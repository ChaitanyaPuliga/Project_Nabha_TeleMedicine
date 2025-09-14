import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  FileText, 
  Bot, 
  Package, 
  Bell, 
  Calendar,
  MapPin,
  Phone,
  Users
} from "lucide-react";

const Home = () => {
  const quickActions = [
    {
      title: "Telemedicine",
      subtitle: "Video consultation", 
      icon: Video,
      href: "/telemedicine",
      bgColor: "bg-gradient-to-r from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600"
    },
    {
      title: "Health Records",
      subtitle: "My medical history",
      icon: FileText,
      href: "/health-records", 
      bgColor: "bg-gradient-to-r from-green-500/10 to-green-600/10",
      iconColor: "text-green-600"
    },
    {
      title: "Medicine Tracker",
      subtitle: "Check availability",
      icon: Package,
      href: "/medicine-tracker",
      bgColor: "bg-gradient-to-r from-purple-500/10 to-purple-600/10", 
      iconColor: "text-purple-600"
    },
    {
      title: "AI Assistant",
      subtitle: "Symptom checker",
      icon: Bot,
      href: "/ai-assistant",
      bgColor: "bg-gradient-to-r from-orange-500/10 to-orange-600/10",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30 pb-20">
      {/* Header */}
      <div className="bg-gradient-primary px-4 py-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">ਸਤ ਸ੍ਰੀ ਅਕਾਲ, jackie</h1>
            <p className="text-white/90 text-sm">Your health companion for Nabha</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.href}>
                <Card className="hover:shadow-soft transition-all duration-300 hover:scale-105 border-0">
                  <CardContent className="p-4">
                    <div className={`w-12 h-12 rounded-2xl ${action.bgColor} flex items-center justify-center mb-3`}>
                      <action.icon className={`w-6 h-6 ${action.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{action.title}</h3>
                    <p className="text-xs text-muted-foreground">{action.subtitle}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-medical-blue/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-medical-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">Upcoming Consultation</h3>
                  <p className="text-sm text-muted-foreground">Today, 3:00 PM with Dr. Preet Singh</p>
                </div>
                <Badge className="bg-medical-green/10 text-medical-green">Confirmed</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Services */}
        <section>
          <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-900">Emergency Services</h3>
                    <p className="text-sm text-red-700">24/7 Available - Call 108</p>
                  </div>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Health Champions */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Nearby Health Champions</h2>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-trust-blue/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-trust-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">Nabha Civil Hospital</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>0.5 km away • Open now</span>
                  </div>
                </div>
                <Button size="sm" variant="outline">Visit</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Home;