import AddStaff from "@/components/StaffManagement/AddStaff";
import StaffManagementTable from "@/components/StaffManagement/StaffManagementTable";
import { Button } from "@/components/ui/button";
import useDisclosure from "@/hooks/useDisclosure";

export default function StaffManagementPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-purple-600">
          Staff Management
        </h2>

        <Button onClick={onOpen} variant="primary">
          Add Staff
        </Button>
      </div>

      <StaffManagementTable showAll />

      <AddStaff isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
