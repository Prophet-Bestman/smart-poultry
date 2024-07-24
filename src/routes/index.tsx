import App from "@/App";
import { MainLayout } from "@/layouts";
import {
  Login,
  Signup,
  StaffActivitiesPage,
  StaffManagementPage,
} from "@/pages";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/staff-activities",
        element: <StaffActivitiesPage />,
      },
      {
        path: "/staff-management",
        element: <StaffManagementPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
