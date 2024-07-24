import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

export default function MainLayout() {
  return (
    <div className="h-screen">
      <MainHeader />
      <div className="flex h-[calc(100vh-80px)] ">
        <SideNav />
        <div className="w-full h-full p-20 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
