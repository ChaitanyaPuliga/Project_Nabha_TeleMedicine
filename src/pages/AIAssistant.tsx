import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Bot, 
  Send, 
  Mic, 
  AlertTriangle, 
  Heart, 
  Thermometer, 
  Activity,
  Clock,
  Phone,
  MapPin,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const quickSymptoms = [
    { label: "Fever", icon: Thermometer, category: "Common" },
    { label: "Headache", icon: Activity, category: "Common" },
    { label: "Cough", icon: Activity, category: "Respiratory" },
    { label: "Stomach Pain", icon: Heart, category: "Digestive" },
    { label: "Chest Pain", icon: Heart, category: "Serious" },
    { label: "Difficulty Breathing", icon: Activity, category: "Emergency" }
  ];

  const chatHistory = [
    {
      type: "assistant",
      message: "Hello! I'm your AI health assistant. I can help you understand your symptoms and guide you to appropriate care. How are you feeling today?",
      time: "10:30 AM"
    },
    {
      type: "user", 
      message: "I have been having a headache and mild fever since yesterday",
      time: "10:32 AM"
    },
    {
      type: "assistant",
      message: "I understand you're experiencing a headache and mild fever. Let me help you with some follow-up questions:\n\n1. What's your current temperature?\n2. On a scale of 1-10, how severe is your headache?\n3. Have you taken any medication?\n\nBased on your symptoms, this could be a common viral infection, but I'd recommend consulting with a doctor for proper diagnosis.",
      time: "10:32 AM", 
      actions: [
        { label: "Book Consultation", type: "primary" },
        { label: "Find Nearby Pharmacy", type: "secondary" }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Emergency": return "bg-red-500/10 text-red-600 border-red-200";
      case "Serious": return "bg-orange-500/10 text-orange-600 border-orange-200";  
      case "Common": return "bg-blue-500/10 text-blue-600 border-blue-200";
      default: return "bg-gray-500/10 text-gray-600 border-gray-200";
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message sending logic here
      setMessage("");
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
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">AI Assistant</h1>
                <p className="text-xs text-medical-green">Online • HIPAA Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Disclaimer */}
        <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-200">
          <CardContent className="p-4">
            <div className="flex space-x-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-orange-900 mb-1">Medical Disclaimer</h4>
                <p className="text-sm text-orange-800">
                  This AI assistant provides health information only and is not a replacement for professional medical diagnosis. 
                  For emergencies, call 108 immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Symptom Buttons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Common Symptoms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {quickSymptoms.map((symptom, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-auto p-3 flex-col space-y-2 ${getCategoryColor(symptom.category)}`}
                  onClick={() => setMessage(`I have ${symptom.label.toLowerCase()}`)}
                >
                  <symptom.icon className="w-5 h-5" />
                  <div className="text-center">
                    <div className="font-medium text-sm">{symptom.label}</div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {symptom.category}
                    </Badge>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="min-h-[400px]">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Bot className="w-5 h-5 text-primary mr-2" />
              Health Consultation Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Chat Messages */}
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    chat.type === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary text-foreground'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{chat.message}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className={`text-xs ${chat.type === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {chat.time}
                      </p>
                    </div>
                    {chat.actions && (
                      <div className="flex space-x-2 mt-3">
                        {chat.actions.map((action, actionIndex) => (
                          <Button 
                            key={actionIndex}
                            size="sm" 
                            variant={action.type === 'primary' ? 'default' : 'outline'}
                            className="text-xs"
                          >
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex space-x-2 pt-3 border-t border-border">
              <div className="flex-1 relative">
                <Input
                  placeholder="Describe your symptoms in simple words..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="pr-12"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className={`absolute right-1 top-1/2 -translate-y-1/2 ${isListening ? 'text-red-500' : 'text-muted-foreground'}`}
                  onClick={() => setIsListening(!isListening)}
                >
                  <Mic className="w-4 h-4" />
                </Button>
              </div>
              <Button onClick={handleSendMessage} disabled={!message.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-200">
            <CardContent className="p-4 text-center">
              <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-semibold text-red-900 mb-1">Emergency</h3>
              <p className="text-xs text-red-800 mb-3">Call 108 immediately</p>
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white w-full">
                Call 108
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-200">
            <CardContent className="p-4 text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-900 mb-1">Find Help</h3>
              <p className="text-xs text-blue-800 mb-3">Nearby hospitals & clinics</p>
              <Button size="sm" variant="outline" className="w-full border-blue-200 text-blue-600">
                Find Nearby
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">AI Assistant Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Smart Symptom Analysis</h4>
                  <p className="text-xs text-muted-foreground">AI-powered health assessment and triage</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Multilingual Support</h4>
                  <p className="text-xs text-muted-foreground">Chat in Punjabi, Hindi, or English</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">24/7 Availability</h4>
                  <p className="text-xs text-muted-foreground">Get health guidance anytime, anywhere</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistant;