import { IoThermometerOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { FaFan } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { GrInsecure } from "react-icons/gr";

import { useGetFarmInfo } from "@/api/farm";

export default function DashboardStats() {
  const { data: values, isLoading } = useGetFarmInfo();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          Environmental Conditions
        </h2>
        <div className="grid w-full grid-cols-3 gap-6">
          <DashBoardCard
            title=" Real-Time Temperature"
            isLoading={isLoading}
            icon={<IoThermometerOutline className="text-[45px]" />}
            value={values ? `${values.FarmData.Temperature} °C` : ""}
          />
          <DashBoardCard
            title=" Real-Time Humidity"
            isLoading={isLoading}
            icon={<WiHumidity className="text-[45px]" />}
            value={values ? `${values.FarmData.Humidity}%` : ""}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          Devices Status
        </h2>
        <div className="grid w-full grid-cols-4 gap-6">
          <DashBoardCard
            title=" Fan Status"
            isLoading={isLoading}
            icon={
              <FaFan
                className={`text-[45px] ${
                  values?.FarmData?.FanStatus === "ON" ? "animate-spin" : ""
                }`}
              />
            }
            value={values ? values.FarmData.FanStatus : ""}
          />
          <DashBoardCard
            title="Heater Status"
            isLoading={isLoading}
            icon={
              <FaFireFlameCurved
                className={`text-[45px] ${
                  values?.FarmData?.HeatStatus === "ON"
                    ? "animate-pulse text-red-600"
                    : ""
                }`}
              />
            }
            value={values ? values.FarmData.HeatStatus : ""}
          />
          <DashBoardCard
            title="Light Status"
            isLoading={isLoading}
            icon={<FaRegLightbulb className="text-[45px]" />}
            value={values ? values.FarmData.lightStatus : ""}
          />
          <DashBoardCard
            title="Intruder Status"
            isLoading={isLoading}
            icon={<GrInsecure className="text-[45px]" />}
            value={values ? values.FarmData.Intruder : ""}
          />
        </div>
      </div>
    </div>
  );
}

const DashBoardCard = ({
  title,
  value,
  icon,
  isLoading,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  isLoading: boolean;
}) => {
  return (
    <div className="w-full px-6 py-8 space-y-4 border border-purple-200 rounded-xl">
      <div className="flex items-center gap-1 text-purple-800">
        {icon}
        <p className="text-xl">
          {isLoading ? (
            <div className="w-20 h-6 bg-purple-200 animate-pulse rounded-xl"></div>
          ) : (
            value
          )}
        </p>
      </div>
      <p className="text-lg font-medium text-purple-800">{title}</p>
    </div>
  );
};
