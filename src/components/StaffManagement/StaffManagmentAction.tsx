import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function StaffManagmentAction({
  staff,
}: {
  staff: FarmStaffType;
}) {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button className="h-auto px-3 py-1 bg-red-600" variant="destructive">
            Delete
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <p>Are you sure you want to delete {staff.fullName}?</p>

            <div className="flex justify-end gap-2">
              <Button size="sm" variant="ghost">
                No
              </Button>
              <Button size="sm" variant="primary">
                Yes
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
