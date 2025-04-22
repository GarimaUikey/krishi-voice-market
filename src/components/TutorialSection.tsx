
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const TutorialSection = () => {
  return (
    <div className="py-16 bg-krishi-green bg-opacity-5 px-6 md:px-12" id="tutorial">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-krishi-green mb-4">How to Use It</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          New to KrishiConnect? Learn how to make the most of our platform with our easy-to-follow tutorials.
        </p>
        
        <div className="flex justify-center">
          <Link to="/tutorial">
            <Button className="bg-krishi-yellow hover:bg-krishi-green text-krishi-green hover:text-white font-semibold px-8 py-4 rounded-lg text-lg flex items-center gap-2 transition-all duration-300 shadow-md">
              <BookOpen className="w-5 h-5" />
              Watch Tutorial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;
