import { ReactNode, useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { checkServerConnection } from "@/lib/api";
import { CheckCircle2, XCircle } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      const connected = await checkServerConnection();
      setIsConnected(connected);
    };
    
    checkConnection();
    const interval = setInterval(checkConnection, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold text-foreground">Olympics DBMS</h1>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              {isConnected === null ? (
                <span className="text-muted-foreground">Checking connection...</span>
              ) : isConnected ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-muted-foreground">Connected to Flask Server</span>
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4 text-destructive" />
                  <span className="text-destructive">Server Disconnected</span>
                </>
              )}
            </div>
          </header>
          
          <main className="flex-1 p-6 bg-background">
            {children}
          </main>
          
          <footer className="h-12 border-t border-border bg-card flex items-center justify-center text-sm text-muted-foreground">
            © 2024 Olympics Database Management System | Flask + MySQL
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
