import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { DataToolbar } from "@/components/DataToolbar";
import { toast } from "sonner";

export default function Athletes() {
  const [data, setData] = useState([]);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "gender", label: "Gender" },
    { key: "country", label: "Country" },
    { key: "sport", label: "Sport" },
    { key: "height", label: "Height (cm)" },
    { key: "weight", label: "Weight (kg)" },
  ];

  const handleAdd = () => {
    toast.info("Add athlete form - Coming soon!");
  };

  const handleEdit = (row: any) => {
    toast.info(`Edit athlete: ${row.name}`);
  };

  const handleDelete = (row: any) => {
    toast.info(`Delete athlete: ${row.name}`);
  };

  const handleSearch = (query: string) => {
    console.log("Search:", query);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Athletes</h2>
        <p className="text-muted-foreground">Manage Olympic athletes information</p>
      </div>

      <DataToolbar
        onAdd={handleAdd}
        onSearch={handleSearch}
        searchPlaceholder="Search athletes..."
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
