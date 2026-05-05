"use client";

import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Loja", href: "/loja" },
  { name: "Sobre", href: "/sobre" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = usePathname();

  return (
    <div className="bg-navbar py-2 text-primary shadow-sm md:py-4">
      {/* DESKTOP NAVBAR */}
      <div className="block">
        <div className="mx-auto flex flex-row items-center justify-between p-2 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          {/* LOGOTIPO */}
          <div className="font-extrabold">
            <Link href="/">BASECAMP</Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden flex-row gap-4 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "font-semibold decoration-primary/50 decoration-2 underline-offset-6 opacity-60 hover:opacity-100",
                  currentPath === item.href ? "underline" : "hover:underline",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* TOGGLE MOBILE MENU */}
          <div className="flex flex-row gap-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="opacity-60 hover:opacity-100 cursor-pointer"
            >
              <Menu />
            </button>
          </div>

          {/* CARRINHO & USUÁRIO */}
          <div className="flex gap-4">
            <Link href="/#" className="opacity-60 hover:opacity-100">
              <ShoppingCart />
            </Link>
            <Link href="/#" className="opacity-60 hover:opacity-100">
              <CircleUserRound />
            </Link>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } flex flex-col gap-4 bg-navbar px-4 py-2 text-primary md:hidden`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "pl-4 text-center font-semibold decoration-primary/50 decoration-2 underline-offset-6 opacity-60 hover:opacity-100",
                currentPath === item.href ? "underline" : "hover:underline",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
