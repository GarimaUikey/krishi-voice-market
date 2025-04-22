
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, TrendingUp, CloudRain } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      title: "Voice Assistant",
      description: "Speak in your language and get farming solutions through AI voice assistance.",
      icon: <Mic className="h-10 w-10 text-krishi-yellow" />,
    },
    {
      title: "Real-time Prices",
      description: "Visual charts showing current market prices to help you sell at the best rates.",
      icon: <TrendingUp className="h-10 w-10 text-krishi-yellow" />,
    },
    {
      title: "Weather Forecasts",
      description: "Stay informed about upcoming weather conditions to protect your crops.",
      icon: <CloudRain className="h-10 w-10 text-krishi-yellow" />,
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-krishi-green mb-4">About KrishiConnect</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            KrishiConnect is a platform designed to empower farmers by connecting them directly with consumers, 
            eliminating middlemen, and ensuring fair prices for agricultural produce.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:border-krishi-yellow transition-all duration-300 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-white p-3 rounded-full border border-gray-100 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-krishi-green mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Our mission is to create a sustainable ecosystem where farmers can thrive by getting the right value 
            for their hard work while consumers enjoy fresh produce directly from farms.
          </p>
          <Button className="bg-krishi-yellow hover:bg-krishi-green text-krishi-green hover:text-white transition-all duration-300">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
