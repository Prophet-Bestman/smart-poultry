import "./App.css";
import { DashboardStats } from "./components/Dashboard";
import { StaffActivities } from "./components/StaffActivities";

function App() {
  return (
    <div className="w-full h-full space-y-10">
      <DashboardStats />
      <StaffActivities />
    </div>
  );
}

export default App;
