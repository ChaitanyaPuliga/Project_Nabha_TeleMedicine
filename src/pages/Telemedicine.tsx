import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/ui/language-selector";
import { 
  ArrowLeft, 
  Video, 
  Phone, 
  Calendar, 
  Clock, 
  MapPin,
  Star,
  Stethoscope,
  Users,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Telemedicine = () => {
  const [language, setLanguage] = useState("en");

  const consultationOptions = [
    {
      type: "Video Call",
      subtitle: "Face-to-face consultation",
      icon: Video,
      price: "₹200",
      duration: "15-30 mins",
      bgColor: "bg-gradient-to-r from-green-500/10 to-green-600/10",
      iconColor: "text-green-600"
    },
    {
      type: "Voice Call", 
      subtitle: "Audio consultation",
      icon: Phone,
      price: "₹150",
      duration: "10-20 mins", 
      bgColor: "bg-gradient-to-r from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600"
    }
  ];

  const availableDoctors = [
    {
      name: "Dr. Preet Singh",
      specialty: "General Physician",
      experience: "15 years",
      rating: 4.8,
      availability: "Available now",
      hospital: "Civil Hospital Nabha",
      languages: ["Punjabi", "Hindi", "English"]
    },
    {
      name: "Dr. Simran Kaur",
      specialty: "Pediatrician", 
      experience: "12 years",
      rating: 4.9,
      availability: "Available in 30 mins",
      hospital: "Civil Hospital Nabha",
      languages: ["Punjabi", "Hindi"]
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      experience: "18 years", 
      rating: 4.7,
      availability: "Next slot: 2:00 PM",
      hospital: "Private Practice",
      languages: ["Hindi", "English"]
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
            <h1 className="text-xl font-semibold text-foreground">Telemedicine</h1>
          </div>
          <LanguageSelector value={language} onValueChange={setLanguage} />
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* 24/7 Support Banner */}
        <Card className="bg-gradient-primary border-0">
          <CardContent className="p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">24/7 Medical Support</h2>
                <p className="text-white/90 mb-4">Connect with qualified doctors anytime</p>
                <Button className="bg-white text-primary hover:bg-white/90">
                  Emergency Consult
                </Button>
              </div>
              <Stethoscope className="w-12 h-12 text-white/80" />
            </div>
          </CardContent>
        </Card>

        {/* Consultation Options */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Consultation Options</h2>
          <div className="space-y-3">
            {consultationOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl ${option.bgColor} flex items-center justify-center`}>
                      <option.icon className={`w-6 h-6 ${option.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{option.type}</h3>
                      <p className="text-sm text-muted-foreground">{option.subtitle}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm font-medium text-foreground">{option.price}</span>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{option.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Available Doctors */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Available Doctors</h2>
            <Badge className="bg-medical-green/10 text-medical-green">
              <div className="w-2 h-2 bg-medical-green rounded-full mr-2" />
              3 Online
            </Badge>
          </div>
          
          <div className="space-y-3">
            {availableDoctors.map((doctor, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 border-0">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{doctor.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{doctor.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{doctor.hospital}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge className="text-xs" variant={doctor.availability.includes('Available') ? 'default' : 'secondary'}>
                            {doctor.availability}
                          </Badge>
                          <div className="flex space-x-1">
                            {doctor.languages.map((lang, i) => (
                              <Badge key={i} variant="outline" className="text-xs px-1 py-0">
                                {lang}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 mt-3">
                        <Button size="sm" className="flex-1">Book Consultation</Button>
                        <Button size="sm" variant="outline">
                          <Shield className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Why Choose Our Telemedicine?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-medical-blue" />
                <span className="text-sm">ABDM Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-medical-blue" />
                <span className="text-sm">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-medical-blue" />
                <span className="text-sm">Multi-language</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-medical-blue" />
                <span className="text-sm">Auto E-prescriptions</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Telemedicine;