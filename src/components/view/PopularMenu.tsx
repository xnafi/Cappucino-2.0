import { menuItems } from "@/data/menuItems";
import * as motion from "motion/react-client";
import Image from "next/image";



export default function PopularMenu() {
  return (
    <section className="container text-center">
      <h2 className="sub-heading mb-2">OUR POPULAR MENU</h2>

      <div className="flex justify-center items-center gap-4 my-4">
        <div className="h-px w-24 bg-[#B98B5C]" />
        <Image
          src="/assets/coffee_Bean.png"
          alt="Coffee Bean"
          width={24}
          height={24}
        />
        <div className="h-px w-24 bg-[#B98B5C]" />
      </div>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        From rich espressos to creamy lattes, our popular menu is packed with
        crowd favorites. Each drink is crafted with care to bring you the
        perfect blend of flavor and comfort.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto text-left">
        {menuItems?.slice(0, 6).map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
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
}
