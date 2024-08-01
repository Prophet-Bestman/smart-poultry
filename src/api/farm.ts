import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { db, realTimeDb } from "@/config/firebase";
import { onValue, ref, update } from "firebase/database";
import { toast } from "@/components/ui/use-toast";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useAuth } from "@/contexts/AuthContext";

const fetchData = (): Promise<FarmInfoType> => {
  return new Promise((resolve, reject) => {
    const dataRef = ref(realTimeDb);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        resolve(data);
      } else {
        reject("No data available");
      }
    });
  });
};

export const useGetFarmInfo = () =>
  useQuery({
    queryKey: ["farm-info"],
    queryFn: (): Promise<FarmInfoType> => {
      return fetchData().then((res) => res);
    },
  });

export const useClockIn = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: FarmInfoType) => {
      // Update real-time database for the worker status
      update(ref(realTimeDb, "FarmWorker/"), {
        Worker3: values?.FarmWorker?.Worker3 === 1 ? 0 : 1,
      }).then(() => {
        addDoc(collection(db, "activities"), {
          activity:
            values?.FarmWorker?.Worker3 === 1 ? "Clocked Out" : "Clocked In",
          fullName: user?.fullName,
          userId: user?.id,
          date: Date.now(),
          createdAt: serverTimestamp(),
        }).then((res) => res);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["farm-info"] });
      queryClient.invalidateQueries({ queryKey: ["farm-activities"] });

      toast({
        description: "Clock in status updated!",
        duration: 2000,
        variant: "success",
      });
    },
    onError: (error) => {
      toast({
        description: `Failed to update clock in status: ${error.message}`,
        duration: 2000,
        variant: "destructive",
      });
    },
  });
};

export const useGetActivities = () => {
  return useQuery({
    queryKey: ["farm-activities"],
    queryFn: () => {
      return getDocs(
        query(collection(db, "activities"), orderBy("createdAt", "desc"))
      ).then((res) => {
        const data = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return data;
      });
    },
  });
};
