import Image from "next/image";
import BookTableForm from "./BookTableForm";
import Bean from "../../../public/assets/coffee_Bean.png";

export default function BookTableSection() {
  return (
    <section className="container mx-auto text-center">
      <h2 className="sub-heading mb-2">Book Your Table</h2>
      <div className="w-full lg:w-[40%] mx-auto flex justify-center items-center my-4">
        <div className="h-px bg-[#B98B5C] w-[30%]" />
        <Image src={Bean} alt="coffee bean" />
        <div className="h-px bg-[#B98B5C] w-[30%]" />
      </div>
      <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
        Ready to enjoy a memorable dining experience? Reserve your table today
        and secure your spot.
      </p>

      <BookTableForm />
    </section>
  );
}
