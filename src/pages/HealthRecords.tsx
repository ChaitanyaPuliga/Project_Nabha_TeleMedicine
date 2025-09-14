import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  FileText, 
  Calendar, 
  Activity, 
  Pill, 
  Shield, 
  Download, 
  Fingerprint, 
  Lock, 
  Wifi,
  AlertCircle,
  Clock,
  Stethoscope
} from "lucide-react";
import { Link } from "react-router-dom";

const HealthRecords = () => {
  const [activeTab, setActiveTab] = useState("medical-records");

  const medicalRecords = [
    {
      type: "Consultation",
      date: "2024-01-15",
      doctor: "Dr. Preet Singh",
      hospital: "Civil Hospital Nabha",
      diagnosis: "Viral Fever",
      prescription: "Paracetamol 500mg, Rest",
      status: "Completed"
    },
    {
      type: "Lab Test",
      date: "2024-01-10", 
      hospital: "Civil Hospital Nabha",
      testName: "Complete Blood Count",
      result: "Normal ranges",
      status: "Completed"
    }
  ];

  const vitalSigns = [
    {
      type: "Blood Pressure",
      value: "120/80 mmHg",
      date: "2024-01-15",
      status: "Normal",
      trend: "stable"
    },
    {
      type: "Heart Rate", 
      value: "72 bpm",
      date: "2024-01-15",
      status: "Normal",
      trend: "stable"
    },
    {
      type: "Temperature",
      value: "98.6°F",
      date: "2024-01-15", 
      status: "Normal",
      trend: "stable"
    },
    {
      type: "Weight",
      value: "70 kg",
      date: "2024-01-15",
      status: "Normal", 
      trend: "stable"
    }
  ];

  const prescriptions = [
    {
      medicine: "Paracetamol 500mg",
      dosage: "1 tablet, twice daily",
      duration: "5 days",
      doctor: "Dr. Preet Singh",
      date: "2024-01-15",
      status: "Active"
    }
  ];

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
            <div>
              <h1 className="text-xl font-semibold text-foreground">Health Records</h1>
              <p className="text-xs text-medical-green flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                ABHA ID: 12-3456-7890-1234
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Fingerprint className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Security Banner */}
        <Card className="bg-gradient-to-r from-medical-green to-trust-blue border-0">
          <CardContent className="p-4 text-white">
            <h2 className="text-xl font-bold mb-2">Secure Digital Health Records</h2>
            <p className="text-white/90 text-sm mb-3">Encrypted • Offline Available • ABDM Compliant</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Wifi className="w-4 h-4" />
                <span>Offline Access</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lock className="w-4 h-4" />
                <span>End-to-End Encrypted</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="medical-records" className="text-xs">Medical Records</TabsTrigger>
            <TabsTrigger value="vital-signs" className="text-xs">Vital Signs</TabsTrigger>
            <TabsTrigger value="prescriptions" className="text-xs">Prescriptions</TabsTrigger>
          </TabsList>

          <TabsContent value="medical-records" className="space-y-4 mt-6">
            {medicalRecords.map((record, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-medical-blue/10 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-medical-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{record.type}</h3>
                          <p className="text-sm text-muted-foreground">{record.date}</p>
                        </div>
                        <Badge className="bg-medical-green/10 text-medical-green">
                          {record.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        {record.doctor && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Doctor:</span>
                            <span className="font-medium">{record.doctor}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Hospital:</span>
                          <span className="font-medium">{record.hospital}</span>
                        </div>
                        {record.diagnosis && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Diagnosis:</span>
                            <span className="font-medium">{record.diagnosis}</span>
                          </div>
                        )}
                        {record.testName && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Test:</span>
                            <span className="font-medium">{record.testName}</span>
                          </div>
                        )}
                        {record.prescription && (
                          <div className="mt-2 p-2 bg-secondary/50 rounded text-xs">
                            <strong>Prescription:</strong> {record.prescription}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="vital-signs" className="space-y-4 mt-6">
            <div className="grid grid-cols-2 gap-4">
              {vitalSigns.map((vital, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold text-sm">{vital.type}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xl font-bold text-primary">{vital.value}</div>
                      <div className="flex items-center justify-between text-xs">
                        <Badge variant={vital.status === 'Normal' ? 'default' : 'destructive'} className="text-xs">
                          {vital.status}
                        </Badge>
                        <span className="text-muted-foreground">{vital.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prescriptions" className="space-y-4 mt-6">
            {prescriptions.map((prescription, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                      <Pill className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{prescription.medicine}</h3>
                          <p className="text-sm text-muted-foreground">{prescription.dosage}</p>
                        </div>
                        <Badge className="bg-medical-green/10 text-medical-green">
                          {prescription.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{prescription.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Prescribed by:</span>
                          <span className="font-medium">{prescription.doctor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium">{prescription.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Sync Status */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Last synced: 2 minutes ago</span>
              </div>
              <Button size="sm" variant="outline">
                Sync Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Your Privacy is Protected</h4>
                <p className="text-sm text-blue-800">
                  All health records are encrypted and stored securely. Only you and authorized healthcare providers can access your data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthRecords;