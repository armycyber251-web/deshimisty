import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-foreground">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground hover:text-accent-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground hover:text-accent-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground hover:text-accent-foreground transition-colors">
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-foreground">Recipe Videos</h3>
            <p className="text-primary-foreground">
              Watch our traditional recipes and learn how authentic Bengali sweets are made with care.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-foreground">Useful Links</h3>
            <div className="flex flex-col space-y-3">
              <Button variant="ghost" className="justify-start text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </Button>
              <Button variant="ghost" className="justify-start text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </Button>
              <Button variant="ghost" className="justify-start text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground">
            © 2024 দেশের মিষ্টি. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
