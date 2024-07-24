/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { SiThunderbird } from "react-icons/si";

import { realTimeDb } from "@/config/firebase";
import { onValue, ref, update } from "firebase/database";

export default function MainHeader() {
  const [values, setValues] = useState<any>();

  useEffect(() => {
    const dataRef = ref(realTimeDb);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setValues(data);

      console.log(data);
    });
  }, []);

  const writeData = () => {
    update(ref(realTimeDb, "FarmWorker/"), {
      Worker3: values?.FarmWorker?.Worker3 === 1 ? 0 : 1,
    });
  };

  console.log(values);
  return (
    <div className="flex items-center h-[80px] justify-between px-12 py-auto border-b border-purple-200">
      <div className="flex items-center gap-3">
        <SiThunderbird className="text-3xl text-purple-800" />
        <p className="text-sm font-bold text-purple-800">SMART POULTRY</p>
      </div>

      {/* <Button variant="ghost">Log out</Button> */}
      <Button onClick={writeData} variant="primary">
        Clock {values?.FarmWorker?.Worker3 === 1 ? "Out" : "In"}
      </Button>
    </div>
  );
}
