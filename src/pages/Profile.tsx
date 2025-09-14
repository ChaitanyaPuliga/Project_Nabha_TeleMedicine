import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  User, 
  Phone, 
  Calendar, 
  MapPin, 
  Settings, 
  Heart, 
  Shield, 
  Bell, 
  HelpCircle,
  LogOut,
  Edit,
  Camera,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const profileInfo = [
    {
      label: "Phone Number",
      value: "1234567890",
      icon: Phone
    },
    {
      label: "Member Since", 
      value: "13/9/2025",
      icon: Calendar
    },
    {
      label: "Location",
      value: "Nabha, Punjab",
      icon: MapPin
    }
  ];

  const quickSettings = [
    {
      title: "Notifications",
      subtitle: "Manage your notification preferences",
      icon: Bell,
      action: "Configure"
    },
    {
      title: "Privacy & Security", 
      subtitle: "Manage your data and privacy settings",
      icon: Shield,
      action: "Manage"
    },
    {
      title: "Help & Support",
      subtitle: "Get help or contact support",
      icon: HelpCircle, 
      action: "Contact"
    },
    {
      title: "App Settings",
      subtitle: "Language, theme, and app preferences",
      icon: Settings,
      action: "Configure"
    }
  ];

  const healthStats = [
    {
      label: "Consultations",
      value: "12",
      period: "This year"
    },
    {
      label: "Prescriptions", 
      value: "8",
      period: "Active"
    },
    {
      label: "Health Score",
      value: "85%",
      period: "Good"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30 pb-20">
      {/* Header */}
      <div className="bg-gradient-primary px-4 py-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">Profile</h1>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Edit className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 -mt-6 space-y-6">
        {/* Profile Card */}
        <Card className="border-0 shadow-large">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  J
                </div>
                <Button 
                  size="sm" 
                  className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full p-0 bg-white text-primary hover:bg-gray-50"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-1">jackie</h2>
              <p className="text-muted-foreground mb-3">Patient</p>
              
              <Badge className="bg-medical-green/10 text-medical-green mb-4">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified Account
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {profileInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-medium text-foreground">{info.value}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Health Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Heart className="w-5 h-5 text-medical-green mr-2" />
              Health Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {healthStats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-gradient-to-b from-primary/5 to-transparent rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.period}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Settings & Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-border hover:shadow-soft transition-all cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <setting.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{setting.title}</h4>
                    <p className="text-xs text-muted-foreground">{setting.subtitle}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  {setting.action}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ABHA Integration */}
        <Card className="bg-gradient-to-r from-trust-blue/10 to-medical-blue/10 border-trust-blue/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-trust-blue" />
              <div className="flex-1">
                <h3 className="font-semibold text-trust-blue">ABHA Health ID</h3>
                <p className="text-sm text-trust-blue/80">12-3456-7890-1234</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Your digital health identity for seamless healthcare access across India
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <Button 
              variant="ghost" 
              className="w-full text-red-600 hover:bg-red-100 justify-start"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        {/* App Version */}
        <div className="text-center text-xs text-muted-foreground py-4">
          Nabha Health App v1.2.3
          <br />
          Built with ❤️ for Rural Punjab
        </div>
      </div>
    </div>
  );
};

export default Profile;