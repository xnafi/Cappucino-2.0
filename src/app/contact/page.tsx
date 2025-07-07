import { ContactUs } from "@/components/view/ContactUs";
import React from "react";

export default function contact() {
  return (
    <>
      <section className="container bg-transparent mt-[2px]">
        {/* Section Header */}
        <h2 className="sub-heading text-[#2b2b2b] mb-1 text-center">
          Home / Contact
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-10  text-center">
          We’re here to help! Whether you’re curious about our blends, brewing
          tips, or anything coffee-related, feel free to reach out.
        </p>
      </section>
      {/* contact form */}
      <div className="flex items-start justify-start">
        <ContactUs />
      </div>
    </>
  );
}
