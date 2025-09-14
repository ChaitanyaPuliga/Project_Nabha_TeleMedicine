import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Phone,
  Navigation,
  Package,
  TrendingUp,
  Users,
  Hospital
} from "lucide-react";

export function MedicineTracker() {
  const [searchQuery, setSearchQuery] = useState("");

  const medicineData = [
    {
      name: "Paracetamol 500mg",
      generic: "Acetaminophen",
      availability: {
        civilHospital: { stock: 250, status: "In Stock", price: "₹2.50" },
        pharmacy1: { name: "Sharma Medical", stock: 45, status: "Low Stock", price: "₹8.00", distance: "0.8 km" },
        pharmacy2: { name: "Punjab Pharmacy", stock: 120, status: "In Stock", price: "₹7.50", distance: "1.2 km" },
      }
    },
    {
      name: "Amoxicillin 250mg",
      generic: "Amoxicillin",
      availability: {
        civilHospital: { stock: 0, status: "Out of Stock", price: "₹15.00" },
        pharmacy1: { name: "Sharma Medical", stock: 25, status: "In Stock", price: "₹45.00", distance: "0.8 km" },
        pharmacy2: { name: "Punjab Pharmacy", stock: 0, status: "Out of Stock", price: "₹42.00", distance: "1.2 km" },
      }
    },
    {
      name: "Metformin 500mg",
      generic: "Metformin HCl",
      availability: {
        civilHospital: { stock: 180, status: "In Stock", price: "₹5.00" },
        pharmacy1: { name: "Sharma Medical", stock: 60, status: "In Stock", price: "₹25.00", distance: "0.8 km" },
        pharmacy2: { name: "Punjab Pharmacy", stock: 15, status: "Low Stock", price: "₹22.00", distance: "1.2 km" },
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
      default: return Clock;
    }
  };

  const demandInsights = [
    { medicine: "Paracetamol", trend: "+15%", period: "This Week", icon: TrendingUp },
    { medicine: "Insulin", trend: "+28%", period: "This Month", icon: Users },
    { medicine: "BP Medicines", trend: "+12%", period: "This Week", icon: Hospital },
  ];

  return (
    <section id="medicine" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Medicine Availability</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real-Time Medicine Tracker
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check medicine availability across Nabha Civil Hospital and local pharmacies. 
            Get real-time stock updates and find the nearest available source.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for medicines (e.g., Paracetamol, Insulin, BP medicines...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-0 shadow-medium bg-white"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Medicine Results */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="all">All Sources</TabsTrigger>
                <TabsTrigger value="hospital">Civil Hospital</TabsTrigger>
                <TabsTrigger value="pharmacy">Pharmacies</TabsTrigger>
                <TabsTrigger value="nearby">Nearby</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {medicineData.map((medicine, index) => (
                  <Card key={index} className="hover:shadow-soft transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg font-bold">{medicine.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">Generic: {medicine.generic}</p>
                        </div>
                        <Package className="w-6 h-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Civil Hospital */}
                      <div className="p-4 bg-gradient-to-r from-medical-blue/10 to-trust-blue/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            <Hospital className="w-5 h-5 text-medical-blue" />
                            <span className="font-semibold text-medical-blue">Nabha Civil Hospital</span>
                          </div>
                          <Badge variant="outline" className="bg-white">
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
                          <span className="text-sm text-muted-foreground">
                            Stock: {medicine.availability.civilHospital.stock} units
                          </span>
                        </div>
                      </div>

                      {/* Private Pharmacies */}
                      <div className="space-y-3">
                        {[medicine.availability.pharmacy1, medicine.availability.pharmacy2].map((pharmacy, pharmaIndex) => (
                          <div key={pharmaIndex} className="p-3 border border-border rounded-lg bg-white">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                <span className="font-medium">{pharmacy.name}</span>
                                <span className="text-sm text-muted-foreground">• {pharmacy.distance}</span>
                              </div>
                              <Badge variant="outline">{pharmacy.price}</Badge>
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
                                <span className="text-sm text-muted-foreground">Stock: {pharmacy.stock}</span>
                                <Button size="sm" variant="outline">
                                  <Phone className="w-3 h-3 mr-1" />
                                  Call
                                </Button>
                                <Button size="sm">
                                  <Navigation className="w-3 h-3 mr-1" />
                                  Navigate
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Other tab contents would be filtered versions */}
              <TabsContent value="hospital">
                <div className="text-center py-8 text-muted-foreground">
                  Hospital-only results would be shown here
                </div>
              </TabsContent>
              <TabsContent value="pharmacy">
                <div className="text-center py-8 text-muted-foreground">
                  Pharmacy-only results would be shown here
                </div>
              </TabsContent>
              <TabsContent value="nearby">
                <div className="text-center py-8 text-muted-foreground">
                  Nearby sources would be shown here
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Demand Insights */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Demand Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {demandInsights.map((insight, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <insight.icon className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium text-sm">{insight.medicine}</p>
                        <p className="text-xs text-muted-foreground">{insight.period}</p>
                      </div>
                    </div>
                    <Badge className="bg-medical-green/10 text-medical-green">
                      {insight.trend}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Package className="w-4 h-4 mr-2" />
                  Report Stock Issue
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Request Medicine
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Pharmacist Counseling
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
