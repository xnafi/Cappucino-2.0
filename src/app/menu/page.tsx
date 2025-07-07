import { menuItems } from "@/data/menuItems";
import Image from "next/image";
import * as motion from 'motion/react-client';


const MenuSection = () => {
  return (
    <section className="py-16 px-4 text-center bg-white">
      {/* Section Heading */}
      <h2 className="text-lg font-medium text-[#2b2b2b] mb-1">Home / Menu</h2>
      <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-10">
        Explore our handcrafted brews, delicious bites, and seasonal specials.
        Every item is made with care to delight your senses.
      </p>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto text-left">
             {menuItems?.map((item, index) => (
               <motion.div
                 whileHover={{ scale: 1.03 }}
                 transition={{ duration: 0.5,ease:"easeInOut"}}
                 key={index}
                 className="flex items-start gap-4 border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
               >
                 <Image
                   src={item.image}
                   alt={item.title}
                   width={60}
                   height={60}
                   className="rounded-md object-cover"
                 />
                 <div className="flex-1">
                   <div className="flex justify-between items-center">
                     <h3 className="font-semibold text-lg text-gray-900">
                       {item.title}
                     </h3>
                     <span className="text-[#B98B5C] font-semibold">
                       {item.price}
                     </span>
                   </div>
                   <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                 </div>
               </motion.div>
             ))}
           </div>
    </section>
  );
};

export default MenuSection;
