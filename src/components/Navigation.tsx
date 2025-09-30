import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate("/");
    }
  };

  return (
    <nav className="bg-primary py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground font-bengali cursor-pointer" onClick={() => navigate("/")}>
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
          {user ? (
            <>
              <span className="text-primary-foreground text-sm hidden md:inline">
                {user.email}
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={handleSignOut}
                title="Sign out"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => navigate("/auth")}
              title="Sign in"
            >
              <User className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-accent hover:text-accent-foreground">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
