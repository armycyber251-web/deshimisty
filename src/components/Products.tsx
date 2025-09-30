import ProductCard from "./ProductCard";
import pataShondesh from "@/assets/pata-shondesh.jpg";
import roshogolla from "@/assets/roshogolla.jpg";
import malaiKari from "@/assets/malai-kari.jpg";
import rollShondesh from "@/assets/roll-shondesh.jpg";
import raghobShai from "@/assets/raghob-shai.jpg";
import kaloJaam from "@/assets/kalo-jaam.jpg";
import golapJaam from "@/assets/golap-jaam.jpg";
import dudhMalai from "@/assets/dudh-malai.jpg";

const products = [
  { name: "Pata Shondesh", image: pataShondesh },
  { name: "Special Roshogolla", image: roshogolla },
  { name: "Malai Kari", image: malaiKari },
  { name: "Roll Shondesh", image: rollShondesh },
  { name: "Raghob Shai", image: raghobShai },
  { name: "Kalo Jaam", image: kaloJaam },
  { name: "Golap Jaam", image: golapJaam },
  { name: "Dudh Malai", image: dudhMalai },
];

const Products = () => {
  return (
    <section id="products" className="py-16 px-6 bg-warm-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Products
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Every care is taken to ensure the freshness of Mithai Sweets and keep the traditional taste. 
            Buy best quality sweets and confectionary with deshi taste.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.name}
              name={product.name}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
