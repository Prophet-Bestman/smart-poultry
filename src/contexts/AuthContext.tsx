// src/context/AuthContext.tsx
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: LoggedInUser | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<LoggedInUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocument = async (user: User) => {
      try {
        const docRef = doc(db, "users", user?.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUser({ ...docSnap.data(), id: user.uid } as LoggedInUser);
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.error("Error fetching document:", err);
        // setError("Error fetching document");
      } finally {
        setLoading(false);
      }
    };
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchDocument(user);
        setLoading(false);
      } else navigate("/login");
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
