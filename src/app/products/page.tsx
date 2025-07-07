// components/ProductGrid.tsx
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import * as motion from 'motion/react-client';
import Button from "@/components/buttons/Button";

interface Product {
  title: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    title: "Americano Coffee",
    price: "$5.99",
    image: "/assets/products/image1.png",
  },
  {
    title: "Cake Chocolate",
    price: "$5.99",
    image: "/assets/products/image2.png",
  },
  {
    title: "Cappuccino Coffee",
    price: "$5.99",
    image: "/assets/products/image3.png",
  },
  {
    title: "Cupcake Chocolate",
    price: "$5.99",
    image: "/assets/products/image4.png",
  },
  {
    title: "Espresso Coffee",
    price: "$5.99",
    image: "/assets/products/image5.png",
  },
  {
    title: "Espresso Iced Coffee",
    price: "$5.99",
    image: "/assets/products/image6.png",
  },
  {
    title: "Gold Blend Couple",
    price: "$5.99",
    image: "/assets/products/image7.png",
  },
  {
    title: "Instant Milk Coffee",
    price: "$5.99",
    image: "/assets/products/image8.png",
  },
];

const ProductGrid = () => {
  return (
    <section className="container text-center bg-transparent mt-[2px]">
      {/* Section Header */}
      <h2 className="sub-heading text-[#2b2b2b] mb-1">Home / Products</h2>
      <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-10">
        Discover our carefully curated selection of coffee blends, brewing
        tools, and accessories. Perfect for every coffee lover.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
        {products.map((product, index) => (
          <motion.div
            whileHover={{ scale: 1.03, background: ["aliceblue"] }}
            transition={{ duration: 0.5, ease: "linear" }}
            key={index}
            className="border border-gray-200 rounded-md p-3 shadow-sm bg-white"
          >
            <div className="relative w-full h-60 mb-3">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-sm font-semibold text-black mb-1">
              {product.title}
            </h3>
            <p className="text-sm text-black font-medium mb-2">
              {product.price}
            </p>
            <div className="flex justify-center mb-3 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <Button variant="solid" className="text-sm mx-auto mt-5">BUY NOW</Button>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
