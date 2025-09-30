import heroImage from "@/assets/hero-sweets.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center bg-white/95 backdrop-blur-sm px-12 py-8 rounded-2xl shadow-2xl">
          <h2 className="text-5xl md:text-7xl font-bold text-brown font-bengali mb-2">
            দেশের মিষ্টি
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional Bengali sweets made with love and authentic recipes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
