/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { SiThunderbird } from "react-icons/si";

import { AiFillAlert } from "react-icons/ai";
import { useClockIn, useGetFarmInfo } from "@/api/farm";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

export default function MainHeader() {
  const { data: values } = useGetFarmInfo();

  const { mutate: clockInOut, isPending } = useClockIn();

  return (
    <div className="flex items-center h-[80px] justify-between px-12 py-auto border-b border-purple-200">
      <div className="flex items-center gap-3">
        <SiThunderbird className="text-3xl text-purple-800" />
        <p className="text-sm font-bold text-purple-800">SMART POULTRY</p>
      </div>

      <div className="flex items-center gap-6">
        <a
          href={
            values?.FarmData?.IP_Address === "null"
              ? "#"
              : `${values?.FarmData?.IP_Address.replace("http//:", "http://")}`
          }
          target={values?.FarmData?.IP_Address === "null" ? "_self" : "_blank"}
        >
          <AiFillAlert
            // onClick={onOpen}
            className={`${
              values?.FarmData.Intruder === "True"
                ? "text-red-600 animate-ping"
                : "text-gray-600 text-3xl"
            }`}
          />
        </a>

        {values && (
          <Button onClick={() => clockInOut(values)} variant="primary">
            {isPending ? "Clocking" : "Clock"}{" "}
            {values?.FarmWorker?.Worker3 === 1 ? "Out" : "In"}
            {isPending && "..."}
          </Button>
        )}
        <Button onClick={() => signOut(auth)} variant="ghost">
          Log out
        </Button>
      </div>
    </div>
  );
}
