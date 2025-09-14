import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { Heart, Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Medicine Tracker", href: "#medicine" },
    { name: "Health Records", href: "#records" },
    { name: "Community", href: "#community" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Heart className="w-8 h-8 text-primary fill-current" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-trust-blue rounded-full animate-pulse-gentle" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Nabha Health</h1>
              <p className="text-xs text-muted-foreground">Rural Healthcare Redefined</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>Emergency: 108</span>
            </div>
            <LanguageSelector value={language} onValueChange={setLanguage} />
            <Button className="bg-gradient-primary hover:scale-105 transition-transform">
              Patient Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                <Phone className="w-4 h-4" />
                <span>Emergency: 108</span>
              </div>
              <div className="flex flex-col space-y-3">
                <LanguageSelector value={language} onValueChange={setLanguage} />
                <Button className="bg-gradient-primary">Patient Login</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}