import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../custom";
import { Button } from "../ui/button";

export default function StaffActivities({ showAll }: { showAll?: boolean }) {
  const columns: ColumnDef<FarmStaffActiviyType>[] = [
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
      header: "Activity",
      accessorKey: "activity",
      cell: ({ row }) => (
        <div
          className={`font-medium text-sm ${
            row.original.activity === "Clocked In"
              ? "text-green-500"
              : "text-blue-500"
          }`}
        >
          {row.original.activity}
        </div>
      ),
    },
    {
      header: "Date",
      accessorKey: "date",
      cell: ({ row }) => (
        <div className="font-extralight">{row.original.date}</div>
      ),
    },
    {
      header: "Clock Out Time",
      accessorKey: "clockOuttime",
      cell: ({ row }) => (
        <div className="font-extralight">{row.original.time}</div>
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

const data: FarmStaffActiviyType[] = [
  {
    fullName: "James Aliyu",
    id: "FRM-001",
    activity: "Clocked Out",
    time: "12:59pm",
    date: "20-07-2024",
  },
  {
    fullName: "James Aliyu",
    id: "FRM-001",
    activity: "Clocked In",
    time: "12:44pm",
    date: "20-07-2024",
  },
  {
    fullName: "Adams Grey",
    id: "FRM-001",
    activity: "Clocked Out",
    time: "11:59am",
    date: "20-07-2024",
  },
  {
    fullName: "Adams Grey",
    id: "FRM-001",
    activity: "Clocked In",
    time: "11:33am",
    date: "20-07-2024",
  },

  {
    fullName: "Oke Precious",
    id: "FRM-001",
    activity: "Clocked Out",
    time: "11:00am",
    date: "20-07-2024",
  },
  {
    fullName: "Oke Precious",
    id: "FRM-001",
    activity: "Clocked In",
    time: "10:00am",
    date: "20-07-2024",
  },
];
