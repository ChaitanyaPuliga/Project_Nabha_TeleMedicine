import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import Home from "./pages/Home";
import Telemedicine from "./pages/Telemedicine";
import MedicineTracker from "./pages/MedicineTracker";
import HealthRecords from "./pages/HealthRecords";
import Profile from "./pages/Profile";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} />
            <Route path="/telemedicine" element={<Telemedicine />} />
            <Route path="/medicine-tracker" element={<MedicineTracker />} />
            <Route path="/health-records" element={<HealthRecords />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
