import { IoThermometerOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { FaFan } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
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
          <div className="w-full px-6 py-8 space-y-4 border border-purple-100 rounded-xl">
            <div className="flex items-center gap-1 text-purple-800">
              <IoThermometerOutline className="text-[45px]" />
              <p className="text-xl">
                {isLoading ? (
                  <div className="w-20 h-6 bg-purple-200 animate-pulse rounded-xl"></div>
                ) : (
                  values && `${values.FarmData.Temperature} °C`
                )}
              </p>
            </div>
            <p className="text-lg font-medium text-purple-800">
              Real-Time Temperature
            </p>
          </div>
          <div className="w-full px-6 py-8 space-y-4 border border-purple-100 rounded-xl">
            <div className="flex items-center gap-1 text-purple-800">
              <WiHumidity className="text-[45px]" />
              <p className="text-xl">
                {isLoading ? (
                  <div className="w-20 h-6 bg-purple-200 animate-pulse rounded-xl"></div>
                ) : (
                  values && `${values.FarmData.Humidity}g/kg`
                )}
              </p>
            </div>
            <p className="text-lg font-medium text-purple-800">
              Real-Time Humidity
            </p>
          </div>
          <div className="w-full px-6 py-8 space-y-4 border border-purple-100 rounded-xl">
            <div className="flex items-center gap-1 text-purple-800">
              <CiLight className="text-[45px]" />
              <p className="text-xl">
                {isLoading ? (
                  <div className="w-20 h-6 bg-purple-200 animate-pulse rounded-xl"></div>
                ) : (
                  `40cd`
                )}
              </p>
            </div>
            <p className="text-lg font-medium text-purple-800">
              Real-Time Light Intensity
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          Devices Status
        </h2>
        <div className="grid w-full grid-cols-3 gap-6">
          <div className="w-full px-6 py-8 space-y-4 border border-purple-100 rounded-xl">
            <div className="flex items-center gap-1 text-purple-800">
              <FaFan className="text-[45px]" />
              <p className="text-xl">
                {isLoading ? (
                  <div className="w-20 h-6 bg-purple-200 animate-pulse rounded-xl"></div>
                ) : (
                  values && values.FarmData.FanStatus
                )}
              </p>
            </div>
            <p className="text-lg font-medium text-purple-800">Fan Status</p>
          </div>
          <div className="w-full px-6 py-8 space-y-4 border border-purple-100 rounded-xl">
            <div className="flex items-center gap-1 text-purple-800">
              <FaRegLightbulb className="text-[45px]" />
              <p className="text-xl">
                {isLoading ? (
                  <div className="w-20 h-6 bg-purple-200 animate-pulse rounded-xl"></div>
                ) : (
                  values && values.FarmData.lightStatus
                )}
              </p>
            </div>
            <p className="text-lg font-medium text-purple-800">Light Status</p>
          </div>
          <div className="w-full px-6 py-8 space-y-4 border border-purple-100 rounded-xl">
            <div className="flex items-center gap-1 text-purple-800">
              <GrInsecure className="text-[45px]" />
              <p className="text-xl">
                {isLoading ? (
                  <div className="w-20 h-6 bg-purple-200 animate-pulse rounded-xl"></div>
                ) : (
                  values && values.FarmData.Intruder
                )}
              </p>
            </div>
            <p className="text-lg font-medium text-purple-800">
              Intruder Status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
