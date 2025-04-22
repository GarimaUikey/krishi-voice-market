
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&h=500" 
            alt="Farmer in field" 
            className="rounded-lg shadow-lg w-full object-cover h-[400px]"
          />
        </div>
        <div className="order-1 md:order-2">
          <h1 className="text-4xl md:text-5xl font-bold text-krishi-green mb-6">
            Connect Directly with <span className="text-krishi-yellow">Farmers</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            KrishiConnect helps farmers sell directly to consumers, ensuring fair prices and fresh produce. 
            Our platform provides voice assistance, real-time market prices, and weather forecasts to empower farmers.
          </p>
          <Link to="/login">
            <Button className="bg-krishi-yellow hover:bg-krishi-green text-krishi-green hover:text-white font-semibold py-6 px-8 rounded-lg text-lg flex items-center gap-2 transition-all duration-300 shadow-md">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
