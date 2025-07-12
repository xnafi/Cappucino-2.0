import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

import Button from "../buttons/Button";
import NavLink from "../buttons/NavLinks";

const Navbar = () => {
  const NavItems = [
    { Home: "Home", Href: "/home" },
    { Home: "About", Href: "/about" },
    { Home: "Menu", Href: "/menu" },
    { Home: "Products", Href: "/products" },
    { Home: "Contact", Href: "/contact" },
  ];
  return (
    <nav className="shadow-md w-full z-10 h-[100px] place-items-center grid">
      <div className="container mx-auto !py-0 ">
        <div className="flex items-center justify-between py-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="logo"
                className="w-[100px] lg:w-[180px]"
              />
            </Link>
          </div>
          {/* desktop nav */}
          <div className="hidden lg:flex space-x-10">
            {NavItems.map((nav, index) => {
              return (
                <Link
                  key={index}
                  href={nav.Href}
                  className="text-base font-bold uppercase hover:transition-colors hover"
                >
                  {nav.Home}
                </Link>
              );
            })}
          </div>
          {/* button */}
          <div className="hidden lg:flex space-x-4">
            <Button variant="solid" href="/sign-up">
              {"SIGN UP"}
            </Button>
            <Button variant="outline" href="/login">
              {"LOGIN"}
            </Button>
          </div>
          {/* Hamburger menu */}
          <div className="lg:hidden">
            <input
              type="checkbox"
              id="menu-toggle"
              className="hidden peer"
              aria-hidden="true"
            />
            <label
              htmlFor="menu-toggle"
              className="text-base font-bold uppercase hover:transition-all focus:outline-none peer-checked:text-[#d63a76]"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <div
              className="peer-checked:transform peer-checked:translate-x-0 
                         fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-20
                         transform -translate-x-full transition-transform duration-300 ease-in-out"
            >
              <div className="p-4">
                <div>
                  <label
                    htmlFor="menu-toggle"
                    className="text-base font-bold uppercase hover:transition-all focus:outline-none mb-4 flex justify-end "
                    aria-label="Close Menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </label>
                </div>
                <nav className="space-y-4">
                  {NavItems.map((nav, index) => {
                    return (
                      <NavLink href={nav.Href} key={index} label={nav.Home} />
                    );
                  })}

                  <div className="flex space-x-2.5">
                    <Button variant="solid" href="/sign-up">
                      {"SIGN UP"}
                    </Button>
                    <Button variant="outline" href="/login">
                      {"LOGIN"}
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
