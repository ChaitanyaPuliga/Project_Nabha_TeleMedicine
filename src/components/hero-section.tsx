import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Users, 
  Smartphone, 
  MapPin, 
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";
import heroImage from "@/assets/nabha-health-hero.jpg";

export function HeroSection() {
  const features = [
    "Offline-First Health Records",
    "Multilingual Telemedicine",
    "Real-time Medicine Tracking",
    "AI-Powered Health Assistant",
  ];

  const stats = [
    { label: "Patients Served", value: "15,000+" },
    { label: "Villages Connected", value: "50+" },
    { label: "Health Champions", value: "200+" },
    { label: "Partner Pharmacies", value: "85+" },
  ];

  return (
    <section className="relative min-h-screen pt-16 bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <MapPin className="w-4 h-4 mr-1" />
                Serving Rural Punjab
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Healthcare 
                <span className="block text-punjab-gold">Without Boundaries</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Bridging the healthcare gap in rural Punjab with offline-first digital solutions, 
                community champions, and real-time medicine tracking.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-punjab-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-medical-blue hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-large">
                <Users className="w-5 h-5 mr-2" />
                Find Health Champion
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">ABDM Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Punjab Health Dept.</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm font-medium">Offline Capable</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-large bg-gradient-card">
              <img 
                src={heroImage}
                alt="Nabha Health - Rural Healthcare Technology"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-medium">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-medium">
                <div className="text-2xl font-bold text-trust-blue">98%</div>
                <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-white/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}