import Image from "next/image";
import React from "react";
import BannerImage from "../../../public/assets/bannerImage.png";
import Button from "../buttons/Button";
import * as motion from "motion/react-client";


export default function Banner() {
  return (
    <div className="banner flex flex-col lg:flex-row container j h-full lg:h-screen space-y-4 lg:space-y-0">
      {/* content */}
      <div className="w-full lg:w-3/5 lg:mt-[10%] space-y-5 lg:space-y-8">
        <h1 className="hero-heading inline wrap-anywhere">
          Your Daily Dose of Happiness, in a Cup
        </h1>
        <p className="w-5/6">
          Start your day with a smile or unwind in the afternoon—our coffee is
          more than a drink; it’s a moment of joy. Every cup is crafted to bring
          you comfort, energy, and a little bit of happiness.
        </p>
        <div className="flex space-x-2.5 lg:space-x-8">
          <Button variant="solid">{"Book a table"}</Button>
          <Button variant="outline">{"Discover now"}</Button>
        </div>
      </div>
      {/* image */}
      <div className="w-full lg:w-2/5 flex justify-center h-full">
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
          whileHover={{ y: [0, 0, 0], rotate: [10, 10, 10] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            width={600}
            height={410}
            src={BannerImage}
            alt="flying cup of coffee"
            className="border aspect-square"
          />
        </motion.div>
      </div>
    </div>
  );
}
