/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useGetActivities } from "@/api/farm";
import { DataTable } from "../custom";

export default function StaffActivities({ showAll }: { showAll?: boolean }) {
  const columns: ColumnDef<FarmStaffActiviyType, unknown>[] = [
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
        <div className="font-extralight">
          {new Date(row.original.date).toDateString()}
        </div>
      ),
    },
    {
      header: "Clock Out Time",
      accessorKey: "date",
      cell: ({ row }) => (
        <div className="font-extralight">
          {new Date(row.original.date).toLocaleTimeString()}
        </div>
      ),
    },
  ];

  const { data, isLoading } = useGetActivities();

  return (
    <div className="px-4 py-8 space-y-8 border border-purple-200 rounded-xl">
      {!showAll && (
        <div className="flex justify-between">
          <h3 className="text-xl font-medium text-gray-600">
            Farm Staff Activities Summary
          </h3>

          <Link to="/staff-activities">
            <Button variant="ghost" size="sm">
              See All
            </Button>
          </Link>
        </div>
      )}
      <DataTable
        isLoading={isLoading}
        // @ts-ignore
        columns={columns}
        data={!data ? [] : showAll ? data : data.slice(0, 3)}
      />
    </div>
  );
}
