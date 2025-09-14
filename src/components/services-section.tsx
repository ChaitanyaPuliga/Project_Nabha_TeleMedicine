import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  FileText, 
  Bot, 
  Package, 
  Users, 
  Monitor,
  Languages,
  Wifi,
  Shield,
  ArrowRight,
  Clock,
  Heart
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: "Telemedicine Suite",
      description: "Secure video/audio consultations in Punjabi, Hindi, and English with automatic e-prescriptions",
      features: ["Multi-language support", "End-to-end encryption", "Digital prescriptions", "Offline booking"],
      badge: "Live Now",
      badgeVariant: "default" as const,
      gradient: "from-medical-blue to-trust-blue"
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description: "Offline-first health records with ABDM compliance, biometric access, and blockchain support",
      features: ["ABHA ID integration", "Offline sync", "Biometric security", "Blockchain ready"],
      badge: "ABDM Compliant",
      badgeVariant: "secondary" as const,
      gradient: "from-primary to-accent"
    },
    {
      icon: Bot,
      title: "AI Health Assistant",
      description: "Symptom checker and triage assistant providing guided healthcare recommendations",
      features: ["Natural language", "Symptom analysis", "Care guidance", "Emergency alerts"],
      badge: "AI Powered",
      badgeVariant: "outline" as const,
      gradient: "from-punjab-gold to-warm-orange"
    },
    {
      icon: Package,
      title: "Medicine Tracker",
      description: "Real-time medicine availability across public and private pharmacies with demand insights",
      features: ["Stock visibility", "Pharmacy network", "Demand forecasting", "Remote fulfillment"],
      badge: "Real-time",
      badgeVariant: "destructive" as const,
      gradient: "from-medical-green to-primary"
    }
  ];

  const providerServices = [
    {
      icon: Monitor,
      title: "Doctor Dashboard",
      description: "Comprehensive patient management with appointment scheduling and prescription tools",
      role: "Healthcare Providers"
    },
    {
      icon: Users,
      title: "Champion Interface",
      description: "Simplified tools for Community Health Champions to assist patients and capture data",
      role: "Health Champions"
    },
    {
      icon: Heart,
      title: "Hospital Portal", 
      description: "Inventory tracking and demand management linking public and private sectors",
      role: "Administrators"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete digital ecosystem designed for rural healthcare challenges, 
            combining cutting-edge technology with community-driven support.
          </p>
        </div>

        {/* Patient Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card hover:scale-[1.02]">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-soft`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <Badge variant={service.badgeVariant} className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Features Banner */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Built for Rural Punjab</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3 text-white">
              <Wifi className="w-6 h-6" />
              <span className="font-medium">Offline-First Design</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Languages className="w-6 h-6" />
              <span className="font-medium">Multi-Language Support</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Shield className="w-6 h-6" />
              <span className="font-medium">ABDM Compliant</span>
            </div>
          </div>
        </div>

        {/* Provider Services */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Tools for Healthcare Professionals
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized interfaces designed for different roles in the healthcare ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {providerServices.map((service, index) => (
            <Card key={index} className="hover:shadow-soft transition-all duration-300 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-fit">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <Badge variant="outline" className="mx-auto mb-2 w-fit">
                  {service.role}
                </Badge>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Clock className="w-4 h-4 mr-2" />
                  Request Access
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}