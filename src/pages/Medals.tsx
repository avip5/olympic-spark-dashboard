import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { DataToolbar } from "@/components/DataToolbar";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function Medals() {
  const [data, setData] = useState([]);

  const columns = [
    { key: "id", label: "ID" },
    { key: "athlete", label: "Athlete" },
    { key: "country", label: "Country" },
    { key: "event", label: "Event" },
    {
      key: "medal_type",
      label: "Medal Type",
      render: (value: string) => {
        const colors = {
          Gold: "bg-yellow-500",
          Silver: "bg-gray-400",
          Bronze: "bg-orange-700",
        };
        return (
          <Badge className={colors[value as keyof typeof colors] || ""}>
            {value}
          </Badge>
        );
      },
    },
    { key: "year", label: "Year" },
  ];

  const handleAdd = () => {
    toast.info("Add medal record - Coming soon!");
  };

  const handleEdit = (row: any) => {
    toast.info(`Edit medal: ${row.athlete}`);
  };

  const handleDelete = (row: any) => {
    toast.info(`Delete medal: ${row.athlete}`);
  };

  const handleSearch = (query: string) => {
    console.log("Search:", query);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Medals</h2>
        <p className="text-muted-foreground">Track medal achievements and standings</p>
      </div>

      <DataToolbar
        onAdd={handleAdd}
        onSearch={handleSearch}
        searchPlaceholder="Search medals..."
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
