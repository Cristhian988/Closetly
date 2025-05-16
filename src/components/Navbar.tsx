import React, { useState } from "react";
import Banner from "./Banner";
import { CircleUserRound, Menu, Search, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";
import type { Route } from "../types/types";

const routes: Route[] = [
  { name: "Shop", path: "/" },
  { name: "On Sale", path: "/" },
  { name: "New Arrivals", path: "/" },
  { name: "Brands", path: "/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Banner />
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
        <a href="#" className="text-2xl font-bold">
          SHOP.CO
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          {routes.map((route, index) => (
            <div key={index}>
              <Link to={route.path}>{route.name}</Link>
            </div>
          ))}

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <Search className="w-6 h-6 text-gray-500 cursor-pointer" />
          </div>

          <div className="relative cursor-pointer">
            <ShoppingCart />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-gray-800 w-[18px] h-[18px] rounded-full">
              3
            </button>
          </div>

          <div>
            <CircleUserRound className="w-7 h-7 text-gray-700 cursor-pointer" />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <div className="relative cursor-pointer mr-2">
            <ShoppingCart />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-gray-800 w-[18px] h-[18px] rounded-full">
              3
            </button>
          </div>

          <div>
            <CircleUserRound className="w-7 h-7 text-gray-700 cursor-pointer" />
          </div>

          <div
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            aria-label="Menu"
            className="md:hidden flex items-center gap-4"
          >
            {/* Menu Icon */}
            {open ? (
              <X className="w-8 h-8 text-gray-700 cursor-pointer" />
            ) : (
              <Menu className="w-8 h-8 text-gray-700 cursor-pointer" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full h-screen bg-white shadow-md pt-16 flex-col items-center gap-6 px-5 text-sm md:hidden `}
        >
          {routes.map((route, index) => (
            <div key={index}>
              <Link to={route.path} className="text-lg font-medium">
                {route.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
