import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Video, 
  Package, 
  FileText, 
  User 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home
  },
  {
    name: "Consult",
    href: "/telemedicine",
    icon: Video
  },
  {
    name: "Medicine",
    href: "/medicine-tracker",
    icon: Package
  },
  {
    name: "Records",
    href: "/health-records",
    icon: FileText
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User
  }
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-large">
      <div className="grid grid-cols-5 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-3 px-2 text-xs font-medium transition-colors",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 mb-1",
                isActive ? "text-primary" : "text-muted-foreground"
              )} />
              <span className={cn(
                "text-xs",
                isActive ? "text-primary font-semibold" : "text-muted-foreground"
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}