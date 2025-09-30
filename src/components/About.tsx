import kaloJaamImg from "@/assets/kalo-jaam.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-primary p-12 rounded-2xl">
            <h2 className="text-5xl font-bold text-primary-foreground font-bengali mb-6">
              দেশের মিষ্টি
            </h2>
            <p className="text-primary-foreground text-lg leading-relaxed">
              Bringing you the authentic taste of traditional Bengali sweets, crafted with love and care. 
              Our recipes have been passed down through generations, ensuring every bite takes you back to 
              the rich culinary heritage of Bengal.
            </p>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">About Us</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are dedicated to preserving the authentic flavors of Bengali confectionery. Each sweet is 
              prepared using traditional methods and the finest ingredients, ensuring that every customer 
              experiences the true essence of deshi mishti.
            </p>
            
            <div className="mt-8">
              <h4 className="text-2xl font-bold mb-4 text-foreground">Made With Love</h4>
              <div className="flex gap-6 items-start">
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    Our commitment to quality and tradition means that every sweet is made with care and attention 
                    to detail. We believe in preserving the cultural heritage while ensuring the highest standards 
                    of taste and freshness.
                  </p>
                </div>
                <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                  <img 
                    src={kaloJaamImg} 
                    alt="Made with love" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
