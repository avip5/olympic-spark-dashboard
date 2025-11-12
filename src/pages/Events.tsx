import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { DataToolbar } from "@/components/DataToolbar";
import { toast } from "sonner";

export default function Events() {
  const [data, setData] = useState([]);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Event Name" },
    { key: "sport", label: "Sport" },
    { key: "category", label: "Category" },
    { key: "date", label: "Date" },
    { key: "location", label: "Location" },
  ];

  const handleAdd = () => {
    toast.info("Add event form - Coming soon!");
  };

  const handleEdit = (row: any) => {
    toast.info(`Edit event: ${row.name}`);
  };

  const handleDelete = (row: any) => {
    toast.info(`Delete event: ${row.name}`);
  };

  const handleSearch = (query: string) => {
    console.log("Search:", query);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Events</h2>
        <p className="text-muted-foreground">Manage Olympic events and competitions</p>
      </div>

      <DataToolbar
        onAdd={handleAdd}
        onSearch={handleSearch}
        searchPlaceholder="Search events..."
      />

      <DataTable
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
