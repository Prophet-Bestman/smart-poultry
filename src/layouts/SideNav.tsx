import { AiFillDashboard } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function SideNav() {
  const { pathname } = useLocation();

  return (
    <div className="border-r border-slate-200 w-[400px] px-6 py-12 space-y-4">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`flex items-center gap-3 px-6 py-4 text-purple-800 hover:bg-purple-200 rounded-xl cursor-pointer duration-300 ease-in-out ${
            pathname === link.path && "bg-purple-100 hover:bg-purple-200"
          }`}
        >
          {link.icon}
          <p className={`text-sm font-semibold`}>{link.name}</p>
        </Link>
      ))}
    </div>
  );
}

const navLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: <AiFillDashboard className="text-xl" />,
  },
  {
    name: "Staff Activities",
    path: "/staff-activities",
    icon: <FiActivity className="text-xl" />,
  },
  {
    name: "Staff Management",
    path: "/staff-management",
    icon: <MdManageAccounts className="text-xl" />,
  },
  // {
  //   name: "Staff Management",
  //   path: "/",
  //   icon: <MdManageAccounts className="text-xl" />,
  // },
];
