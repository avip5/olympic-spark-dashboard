import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

interface DataToolbarProps {
  onAdd?: () => void;
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
}

export function DataToolbar({ onAdd, onSearch, searchPlaceholder = "Search..." }: DataToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <div className="flex-1 max-w-sm relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={searchPlaceholder}
          className="pl-9"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
      
      {onAdd && (
        <Button onClick={onAdd} className="gap-2">
          <Plus className="h-4 w-4" />
          Add New
        </Button>
      )}
    </div>
  );
}
