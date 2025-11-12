import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { DataToolbar } from "@/components/DataToolbar";
import { toast } from "sonner";

export default function Countries() {
  const [data, setData] = useState([]);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Country Name" },
    { key: "code", label: "Country Code" },
    { key: "continent", label: "Continent" },
    { key: "population", label: "Population" },
  ];

  const handleAdd = () => {
    toast.info("Add country form - Coming soon!");
  };

  const handleEdit = (row: any) => {
    toast.info(`Edit country: ${row.name}`);
  };

  const handleDelete = (row: any) => {
    toast.info(`Delete country: ${row.name}`);
  };

  const handleSearch = (query: string) => {
    console.log("Search:", query);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Countries</h2>
        <p className="text-muted-foreground">Manage participating countries</p>
      </div>

      <DataToolbar
        onAdd={handleAdd}
        onSearch={handleSearch}
        searchPlaceholder="Search countries..."
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
