import { blogItems } from "@/data/ourBlog";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function OurBlog() {
  return (
    <section className="container text-center">
      <h2 className="sub-heading mb-2">READ FROM OUR BLOG</h2>
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
        Dive into the world of coffee with our blog, where we share brewing
        tips, industry insights, and stories behind every cup.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto text-left">
        {blogItems.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={index}
            className="flex flex-col items-center gap-4 border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={450}
              height={349}
              className="rounded-md object-cover"
            />
            <div className="flex-1 space-y-2.5 mb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              <button className="hover">Learn More</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
