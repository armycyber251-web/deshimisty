import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-primary py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground font-bengali">
            দেশের মিষ্টি
          </h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-primary-foreground hover:text-accent-foreground transition-colors font-medium">
              Home
            </a>
            <a href="#products" className="text-primary-foreground hover:text-accent-foreground transition-colors font-medium">
              Category
            </a>
            <a href="#about" className="text-primary-foreground hover:text-accent-foreground transition-colors font-medium">
              About
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-accent hover:text-accent-foreground">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-accent hover:text-accent-foreground">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
