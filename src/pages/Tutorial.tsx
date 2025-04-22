
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Tutorial = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-krishi-green hover:text-krishi-yellow transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-krishi-green mb-4">How to Use KrishiConnect</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Follow these simple tutorials to make the most of the KrishiConnect platform
          </p>
        </div>
        
        <Tabs defaultValue="farmers" className="w-full mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="farmers">For Farmers</TabsTrigger>
            <TabsTrigger value="consumers">For Consumers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="farmers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-krishi-green mb-4">Video Tutorial</h3>
                <div className="aspect-video bg-gray-200 rounded flex items-center justify-center mb-4">
                  <p className="text-gray-500">Tutorial Video for Farmers</p>
                </div>
                <Button className="w-full bg-krishi-yellow text-krishi-green hover:bg-krishi-green hover:text-white">
                  Watch Full Video
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-krishi-green mb-4">Step-by-Step Guide</h3>
                <ol className="space-y-6">
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Create Your Account</h4>
                      <p className="text-gray-600">Sign up as a farmer with your basic details and phone number.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Set Up Your Farm Profile</h4>
                      <p className="text-gray-600">Add details about your farm, crops you grow, and upload photos.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">List Your Products</h4>
                      <p className="text-gray-600">Add the products you want to sell with prices and quantities.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Use Voice Assistance</h4>
                      <p className="text-gray-600">Speak in your language to get help with setting up your store or checking market prices.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Manage Orders</h4>
                      <p className="text-gray-600">Receive and fulfill orders from consumers in your area.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="consumers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-krishi-green mb-4">Video Tutorial</h3>
                <div className="aspect-video bg-gray-200 rounded flex items-center justify-center mb-4">
                  <p className="text-gray-500">Tutorial Video for Consumers</p>
                </div>
                <Button className="w-full bg-krishi-yellow text-krishi-green hover:bg-krishi-green hover:text-white">
                  Watch Full Video
                </Button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-krishi-green mb-4">Step-by-Step Guide</h3>
                <ol className="space-y-6">
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Create Your Account</h4>
                      <p className="text-gray-600">Sign up as a consumer with your details and delivery address.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Browse Products</h4>
                      <p className="text-gray-600">Explore different categories of farm-fresh products.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Connect with Farmers</h4>
                      <p className="text-gray-600">View farmer profiles and learn about their farming practices.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Place Orders</h4>
                      <p className="text-gray-600">Add products to cart and complete your purchase with online payment.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-krishi-yellow text-krishi-green font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Receive Fresh Produce</h4>
                      <p className="text-gray-600">Get farm-fresh products delivered to your doorstep.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-krishi-green bg-opacity-5 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-semibold text-krishi-green mb-4 text-center">Need More Help?</h3>
          <p className="text-gray-700 text-center mb-6">
            If you need additional assistance, our support team is always ready to help.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-krishi-yellow text-krishi-green hover:bg-krishi-green hover:text-white">
              Contact Support
            </Button>
            <Button variant="outline" className="border-krishi-green text-krishi-green hover:bg-krishi-green hover:text-white">
              FAQs
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorial;
