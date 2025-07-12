import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="py-10 flex flex-col justify-center items-center bg-[#FCFAF9]">
        <div className="text-[#432818] mb-6 text-center self-center mx-auto">
          <Link href="/" className="">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="w-[100px] lg:w-[180px] mx-auto"
            />
          </Link>
          <p className="text-sm mt-2 max-w-md mx-auto">
            Crafted with love, brewed with passion. Join us in celebrating the
            art of coffee, one cup at a time.
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-2 text-[#432818] text-xl">
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaTwitterSquare />
          <FaYoutubeSquare />
        </div>
      </footer>
      <div className="bg-[#003E40] h-[50px] grid place-items-center w-full mx-auto">
        <p className="text-xs text-white">
          © 2025 Cappuccino. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
