
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data - replace with real data when backend is integrated
const mockProducts = {
  vegetables: [
    { id: 1, name: "Fresh Tomatoes", price: 40, rating: 4.5, image: "/placeholder.svg" },
    { id: 2, name: "Potatoes", price: 30, rating: 4.2, image: "/placeholder.svg" },
  ],
  fruits: [
    { id: 1, name: "Sweet Mangoes", price: 80, rating: 4.8, image: "/placeholder.svg" },
    { id: 2, name: "Fresh Apples", price: 120, rating: 4.3, image: "/placeholder.svg" },
  ],
  grains: [
    { id: 1, name: "Organic Wheat", price: 45, rating: 4.6, image: "/placeholder.svg" },
    { id: 2, name: "Rice", price: 60, rating: 4.4, image: "/placeholder.svg" },
  ],
  pesticides: [
    { id: 1, name: "Organic Pesticide", price: 250, rating: 4.1, image: "/placeholder.svg" },
    { id: 2, name: "Bio Insecticide", price: 300, rating: 4.0, image: "/placeholder.svg" },
  ],
};

const ProductCategory = () => {
  const { category } = useParams();
  const { toast } = useToast();

  const products = mockProducts[category as keyof typeof mockProducts] || [];
  const categoryTitle = category?.charAt(0).toUpperCase() + category?.slice(1);

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  const handleBuyNow = (productName: string) => {
    toast({
      title: "Proceeding to Checkout",
      description: `Preparing checkout for ${productName}.`,
    });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating) ? "text-krishi-yellow fill-krishi-yellow" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-krishi-green mb-8 text-center">
          {categoryTitle}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                </div>
                <p className="text-2xl font-bold text-krishi-green mb-4">₹{product.price}</p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => handleAddToCart(product.name)}
                    variant="outline"
                    className="flex-1 bg-white hover:bg-gray-50"
                  >
                    <ShoppingCart className="mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={() => handleBuyNow(product.name)}
                    className="flex-1 bg-krishi-yellow hover:bg-krishi-green hover:text-white text-krishi-green"
                  >
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;
