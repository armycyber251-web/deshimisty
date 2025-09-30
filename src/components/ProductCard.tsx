import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  image: string;
}

const ProductCard = ({ name, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4 bg-card">
          <h3 className="text-lg font-semibold text-center text-card-foreground font-bengali">
            {name}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
