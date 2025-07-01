"use client";

import Image from "next/image";
import Bean from "../../../public/assets/coffee_Bean.png";

const galleryImages = [
  {
    src: "/assets/gallery/image1.jpg",
    overlay: true,
    label: "HAZELNUT HAVEN",
    className: "col-span-12 lg:col-span-4 lg:row-span-2",
  },
  {
    src: "/assets/gallery/image2.png",
    overlay: true,
    label: "HAZELNUT HAVEN",
    className: "col-span-12 lg:col-span-4 lg:row-span-2",
  },
  {
    src: "/assets/gallery/image3.png",
    overlay: true,
    label: "HAZELNUT HAVEN",
    className: "col-span-12 lg:col-span-4 lg:row-span-2",
  },
  {
    src: "/assets/gallery/image4.png",
    overlay: true,
    label: "HAZELNUT HAVEN",
    className: "col-span-12 lg:col-span-8 lg:row-span-2",
  },
  {
    src: "/assets/gallery/image5.png",
    overlay: true,
    label: "HAZELNUT HAVEN",
    className: "col-span-12 lg:col-span-4 lg:row-span-2",
  },
  {
    src: "/assets/gallery/image6.png",
    overlay: true,
    label: "HAZELNUT HAVEN",
    className: "col-span-12 lg:col-span-4 lg:row-span-2",
  },
  {
    src: "/assets/gallery/image7.png",
    overlay: true,
    label: "HAZELNUT HAVEN",
    className: "col-span-12 lg:col-span-5 lg:row-span-2",
  },
  {
    src: "/assets/gallery/image8.png",
    overlay: true,
    label: "HAZELNUT HAVEN",
    className: "col-span-12 lg:col-span-3 lg:row-span-2",
  },
];

export default function CoffeeGallery() {
  return (
    <section className="container mx-auto text-center px-4">
      <h2 className="sub-heading mb-4">OUR GALLERY</h2>

      <div className="w-full lg:w-[40%] mx-auto flex justify-center items-center my-4">
        <div className="h-px bg-[#B98B5C] w-[30%]" />
        <Image src={Bean} alt="coffee bean" />
        <div className="h-px bg-[#B98B5C] w-[30%]" />
      </div>

      <p className="text-gray-600 mb-10 max-w-2xl mx-auto para-text">
        Step into our world of coffee through vibrant moments captured in every
        cup. Explore the artistry, passion, and joy behind each brew.
      </p>

      <div className="grid grid-cols-12 gap-4 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[250px] lg:auto-rows-[150px]">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg group ${img.className}`}
          >
            <Image
              src={img.src}
              alt={`Coffee ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {img.overlay && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold tracking-wide">
                  {img.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
