import { StaffActivities } from "@/components/StaffActivities";
import { Button } from "@/components/ui/button";

export default function StaffActivitiesPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-purple-600">
          Staff Activities
        </h2>

        <Button variant="primary">Clear Activities</Button>
      </div>

      <StaffActivities showAll />
    </div>
  );
}
