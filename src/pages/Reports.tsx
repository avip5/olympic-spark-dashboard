import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Database, Zap } from "lucide-react";
import { toast } from "sonner";

export default function Reports() {
  const handleRunFunction = () => {
    toast.info("Running database function...");
  };

  const handleViewTriggers = () => {
    toast.info("Fetching trigger information...");
  };

  const handleExecuteCursor = () => {
    toast.info("Executing cursor operation...");
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Reports</h2>
        <p className="text-muted-foreground">Database functions, triggers, and cursor operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-primary" />
              <CardTitle>Functions</CardTitle>
            </div>
            <CardDescription>
              Execute stored database functions for complex operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleRunFunction} className="w-full">
              Run Function
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-primary" />
              <CardTitle>Triggers</CardTitle>
            </div>
            <CardDescription>
              View and manage database triggers for automated actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleViewTriggers} className="w-full">
              View Triggers
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-5 w-5 text-primary" />
              <CardTitle>Cursors</CardTitle>
            </div>
            <CardDescription>
              Execute cursor operations for row-by-row processing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleExecuteCursor} className="w-full">
              Execute Cursor
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Report Output</CardTitle>
          <CardDescription>Results from database operations will appear here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="min-h-[200px] rounded-md border border-border bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">
              No results to display. Execute a function, view triggers, or run a cursor operation to see output.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
