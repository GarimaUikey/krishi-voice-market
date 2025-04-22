
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, ShoppingCart, BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5 mr-2" /> },
    { name: "About", path: "/about", icon: <BookOpen className="w-5 h-5 mr-2" /> },
    { name: "Reviews", path: "/reviews", icon: <User className="w-5 h-5 mr-2" /> },
    { name: "Market", path: "/market", icon: <ShoppingCart className="w-5 h-5 mr-2" /> },
  ];

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <Link 
          key={link.name} 
          to={link.path} 
          className="flex items-center text-gray-700 hover:text-krishi-green transition-colors"
        >
          {isMobile && link.icon}
          {link.name}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 bg-krishi-yellow rounded-full flex items-center justify-center mr-2">
            <span className="text-krishi-green font-bold text-xl">K</span>
          </div>
          <span className="text-xl font-bold text-krishi-green">KrishiConnect</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <NavItems />
                <Link to="/login">
                  <Button className="w-full bg-krishi-yellow text-krishi-green hover:bg-krishi-green hover:text-white">
                    Login / Sign Up
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <NavItems />
            <Link to="/login">
              <Button className="bg-krishi-yellow text-krishi-green hover:bg-krishi-green hover:text-white">
                Login / Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
