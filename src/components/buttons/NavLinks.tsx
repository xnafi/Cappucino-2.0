"use client";

import { NavLinkProps } from "@/types/AllTypes";
import Link from "next/link";

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const handleClick = () => {
    const menuToggle = document.getElementById(
      "menu-toggle"
    ) as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  };

  return (
    <Link
      href={href}
      className="block primaryText font-extrabold uppercase"
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

export default NavLink;
