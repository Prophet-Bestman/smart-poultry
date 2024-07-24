import { IoThermometerOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { CiLight } from "react-icons/ci";

export default function DashboardStats() {
  return (
    <div className="grid w-full grid-cols-3 gap-6">
      <div className="w-full px-6 py-8 space-y-4 border border-purple-100 rounded-xl">
        <div className="flex items-center gap-1 text-purple-800">
          <IoThermometerOutline className="text-[45px]" />
          <p className="text-xl">32 °C</p>
        </div>
        <p className="text-lg font-medium text-purple-800">
          Real-Time Temperature
        </p>
      </div>
      <div className="w-full px-6 py-8 space-y-4 border border-purple-100 rounded-xl">
        <div className="flex items-center gap-1 text-purple-800">
          <WiHumidity className="text-[45px]" />
          <p className="text-xl">10g/kg</p>
        </div>
        <p className="text-lg font-medium text-purple-800">
          Real-Time Humidity
        </p>
      </div>
      <div className="w-full px-6 py-8 space-y-4 border border-purple-100 rounded-xl">
        <div className="flex items-center gap-1 text-purple-800">
          <CiLight className="text-[45px]" />
          <p className="text-xl">40cd</p>
        </div>
        <p className="text-lg font-medium text-purple-800">
          Real-Time Light Intensity
        </p>
      </div>
    </div>
  );
}
