import { useToast } from "@/components/ui/use-toast";
import { auth, db } from "@/config/firebase";
import { LoginValues } from "@/schema/loginSchema";
import { useMutation } from "@tanstack/react-query";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (values: SignupPayload) => {
      const { email, password, fullName } = values;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Set admin role in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        role: "admin",
      });
    },
    onSuccess: () => {
      toast({
        description: "Signup Successfull",
        duration: 2000,
        variant: "success",
      });
    },
    onError: (err) => {
      console.log(err);
      toast({
        description: err?.message,
        duration: 2000,
        variant: "destructive",
      });
    },
  });
};

export const useLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (values: LoginValues) => {
      const { email, password } = values;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    },
    onSuccess: () => {
      toast({
        description: "Login Successfull",
        duration: 2000,
        variant: "success",
      });
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      toast({
        description: err?.message,
        duration: 2000,
        variant: "destructive",
      });
    },
  });
};
