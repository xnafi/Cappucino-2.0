"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
  ...rest
}: ButtonProps) {
  const baseStyle =
    " px-3 py-2 rounded-[8px] text-center font-medium flex items-center justify-center text-base  hover:shadow-[2px_4px_30px_#d63a76] ease-linear transition-all duration-300 transform";

  const solidStyle = "primaryBg text-white text-base";
  const outlineStyle =
    "bg-transparent border border-[#B98B5C] primaryText hover:text-black scale-105";

  const style =
    variant === "solid"
      ? `${baseStyle} ${solidStyle} ${className}`
      : `${baseStyle} ${outlineStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
}
