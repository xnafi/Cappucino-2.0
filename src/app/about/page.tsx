import Button from "@/components/buttons/Button";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="container  bg-transparent mt-[2px]">
      {/* Section Header */}
      <h2 className="sub-heading text-[#2b2b2b] mb-10 lg:mb-20 text-center">
        Home / About Us
      </h2>

      {/* Product Grid */}
      <div className="flex flex-col lg:flex-row w-full gap-6">
        {/* Image */}
        <div className="lg:w-1/2">
          <Image src="/assets/about.png" width={600} height={600} alt="" />
        </div>
        {/* Content  */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="sub-heading">
            Lorem Ipsum is simply dummy text of the printing and.
          </h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <Button variant="solid">{"READ MORE"}</Button>
        </div>
      </div>
    </section>
  );
}
