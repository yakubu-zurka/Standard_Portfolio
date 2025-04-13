
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { School, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AttendanceLayoutProps {
  children: ReactNode;
}

const AttendanceLayout = ({ children }: AttendanceLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 z-30 bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <School className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">School Attendance System</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="font-medium">Admin User</div>
            <Link to="/">
              <Button variant="outline" size="icon">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <ScrollArea className="flex-1">
        <main className="container py-6">
          {children}
        </main>
      </ScrollArea>
      
      {/* Footer */}
      <footer className="border-t py-4 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} School Attendance Management System
        </div>
      </footer>
    </div>
  );
};

export default AttendanceLayout;
