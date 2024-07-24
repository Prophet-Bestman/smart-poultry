import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../custom";
import { Button } from "../ui/button";
import StaffManagmentAction from "./StaffManagmentAction";

export default function StaffManagementTable({
  showAll,
}: {
  showAll?: boolean;
}) {
  const columns: ColumnDef<FarmStaffType>[] = [
    {
      header: "Full Name",
      accessorKey: "fullName",
      cell: ({ row }) => (
        <div className="font-medium text-purple-600">
          {row.original.fullName}
        </div>
      ),
    },
    {
      header: "ID",
      accessorKey: "id",
      cell: ({ row }) => <div className="font-medium ">{row.original.id}</div>,
    },

    {
      header: "Email",
      accessorKey: "email",
      cell: ({ row }) => (
        <div className="font-extralight">{row.original.email}</div>
      ),
    },
    {
      header: "Role",
      accessorKey: "role",
      cell: ({ row }) => (
        <div
          className={`font-medium text-sm ${
            row.original.role === "Admin" ? "text-green-500" : "text-blue-500"
          }`}
        >
          {row.original.role}
        </div>
      ),
    },

    {
      header: "Clock Out Time",
      accessorKey: "clockOuttime",
      cell: ({ row }) => (
        <div className="font-extralight">
          <StaffManagmentAction staff={row.original} />
        </div>
      ),
    },
  ];

  return (
    <div className="px-4 py-8 space-y-8 border border-purple-200 rounded-xl">
      {!showAll && (
        <div className="flex justify-between">
          <h3 className="text-xl font-medium text-gray-600">
            Farm Staff Activities Summary
          </h3>
          <Button variant="ghost" size="sm">
            See All
          </Button>
        </div>
      )}
      <DataTable columns={columns} data={showAll ? data : data.slice(0, 3)} />
    </div>
  );
}

const data: FarmStaffType[] = [
  {
    fullName: "Prophet Bestman",
    id: "FRM-001",
    role: "Admin",
    email: "prophet@bestman.com",
  },
  {
    fullName: "James Aliyu",
    id: "FRM-001",
    role: "Staff",
    email: "james@aliyu.com",
  },

  {
    fullName: "Adams Grey",
    id: "FRM-001",
    role: "Staff",
    email: "adams@grey.com",
  },

  {
    fullName: "Oke Precious",
    id: "FRM-001",
    role: "Staff",
    email: "oke@precious.com",
  },
];
