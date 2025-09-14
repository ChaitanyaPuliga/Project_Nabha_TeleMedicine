import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  RefreshCw, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Phone,
  Navigation,
  Package,
  Hospital
} from "lucide-react";
import { Link } from "react-router-dom";

const MedicineTracker = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Medicines");

  const filters = ["All Medicines", "Prescription Only", "Over the Counter", "Low Stock Alert"];

  const medicineData = [
    {
      name: "Paracetamol 500mg",
      generic: "Acetaminophen",
      category: "Pain Relief",
      availability: {
        civilHospital: { stock: 250, status: "In Stock", price: "₹2.50" },
        pharmacies: [
          { name: "Sharma Medical", stock: 45, status: "Low Stock", price: "₹8.00", distance: "0.8 km" },
          { name: "Punjab Pharmacy", stock: 120, status: "In Stock", price: "₹7.50", distance: "1.2 km" }
        ]
      }
    },
    {
      name: "Amoxicillin 250mg", 
      generic: "Amoxicillin",
      category: "Antibiotic",
      availability: {
        civilHospital: { stock: 0, status: "Out of Stock", price: "₹15.00" },
        pharmacies: [
          { name: "Sharma Medical", stock: 25, status: "In Stock", price: "₹45.00", distance: "0.8 km" },
          { name: "Punjab Pharmacy", stock: 0, status: "Out of Stock", price: "₹42.00", distance: "1.2 km" }
        ]
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock": return "text-medical-green";
      case "Low Stock": return "text-warm-orange";
      case "Out of Stock": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Stock": return CheckCircle;
      case "Low Stock": return AlertTriangle;
      case "Out of Stock": return XCircle;
      default: return Package;
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-foreground">Medicine Tracker</h1>
          </div>
          <Button variant="ghost" size="icon">
            <MapPin className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Search medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white border-0 shadow-soft"
          />
        </div>

        {/* Real-time Status Banner */}
        <Card className="bg-gradient-primary border-0">
          <CardContent className="p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">Real-time Medicine Availability</h2>
                <p className="text-white/90 text-sm mb-3">Updated every 15 minutes</p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-medical-green rounded-full" />
                    <span>3 pharmacies online</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span>Live tracking</span>
                  </div>
                </div>
              </div>
              <RefreshCw className="w-8 h-8 text-white/80" />
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="whitespace-nowrap"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Medicine Results */}
        <div className="space-y-4">
          {medicineData.map((medicine, index) => (
            <Card key={index} className="border-0 shadow-soft">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold">{medicine.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">Generic: {medicine.generic}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {medicine.category}
                    </Badge>
                  </div>
                  <Package className="w-6 h-6 text-primary" />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Civil Hospital */}
                <div className="p-3 bg-gradient-to-r from-medical-blue/10 to-trust-blue/10 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Hospital className="w-4 h-4 text-medical-blue" />
                      <span className="font-semibold text-medical-blue text-sm">Civil Hospital</span>
                    </div>
                    <Badge variant="outline" className="bg-white text-xs">
                      {medicine.availability.civilHospital.price}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {(() => {
                        const StatusIcon = getStatusIcon(medicine.availability.civilHospital.status);
                        return <StatusIcon className={`w-4 h-4 ${getStatusColor(medicine.availability.civilHospital.status)}`} />;
                      })()}
                      <span className={`text-sm font-medium ${getStatusColor(medicine.availability.civilHospital.status)}`}>
                        {medicine.availability.civilHospital.status}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Stock: {medicine.availability.civilHospital.stock} units
                    </span>
                  </div>
                </div>

                {/* Private Pharmacies */}
                <div className="space-y-2">
                  {medicine.availability.pharmacies.map((pharmacy, pharmaIndex) => (
                    <div key={pharmaIndex} className="p-3 border border-border rounded-lg bg-white">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium text-sm">{pharmacy.name}</span>
                          <span className="text-xs text-muted-foreground">• {pharmacy.distance}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">{pharmacy.price}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {(() => {
                            const StatusIcon = getStatusIcon(pharmacy.status);
                            return <StatusIcon className={`w-4 h-4 ${getStatusColor(pharmacy.status)}`} />;
                          })()}
                          <span className={`text-sm font-medium ${getStatusColor(pharmacy.status)}`}>
                            {pharmacy.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">Stock: {pharmacy.stock}</span>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline" className="h-7 px-2">
                              <Phone className="w-3 h-3" />
                            </Button>
                            <Button size="sm" className="h-7 px-2">
                              <Navigation className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Package className="w-4 h-4 mr-2" />
              Report Stock Issue
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              Pharmacist Counseling
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MedicineTracker;