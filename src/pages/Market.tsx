
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Apple, Wheat, Bug } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Market = () => {
  const categories = [
    {
      title: "Vegetables",
      description: "Fresh vegetables directly from farmers",
      icon: <Leaf className="h-12 w-12 text-krishi-green" />,
      link: "/market/vegetables",
      bgColor: "bg-green-50",
    },
    {
      title: "Fruits",
      description: "Seasonal and exotic fruits from local farms",
      icon: <Apple className="h-12 w-12 text-krishi-yellow" />,
      link: "/market/fruits",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Grains",
      description: "Organic grains and pulses from farmers",
      icon: <Wheat className="h-12 w-12 text-amber-700" />,
      link: "/market/grains",
      bgColor: "bg-amber-50",
    },
    {
      title: "Insecticides/Pesticides",
      description: "Eco-friendly farm protection products",
      icon: <Bug className="h-12 w-12 text-blue-600" />,
      link: "/market/pesticides",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-krishi-green mb-4">Market</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore various agricultural products directly from farmers across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="block transition-transform hover:scale-105">
              <Card className={`border-none shadow-md hover:shadow-lg ${category.bgColor} h-full`}>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 p-3 rounded-full bg-white shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-krishi-green mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Market;
