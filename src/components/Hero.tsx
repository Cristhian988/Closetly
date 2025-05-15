import React from "react";
import versaceImg from "../assets/logo-versace-bg.png";

export default function Hero() {
  return (
    <div className="bg-[url(assets/hero.svg)] bg-no-repeat bg-center bg-[#F2F0F1]">
      {/* Hero Content */}
      <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 pb-16 min-h-[600px]">
        {/* Text Content */}
        <div className="w-full md:w-1/2 max-md:mb-8 text-center md:text-left">
          <p className="flex justify-center md:justify-start items-center gap-1 text-gray-500 text-xs mb-2 uppercase">
            "Elevate your style. Dress with attitude."
          </p>
          <h1 className="font-extrabold text-4xl md:text-6xl text-gray-900 mb-4 leading-tighter uppercase">
            Find clothes <br /> that your
            <br /> look
            <span className="inline-block bg-orange-400 text-white font-extrabold px-3 -mb-1 ml-2 border-b-2 border-indigo-700">
              Style
            </span>
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed <br /> to bring out your individuality and cater to your
            sense of style.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 justify-center md:justify-start">
            <a
              className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow hover:bg-gray-950/90 transition"
              href="#"
            >
              Shop Now
            </a>
          </div>
          <div className="flex flex-wrap flex-row items-center justify-center gap-4 mt-10 md:mt-16 md:justify-start ">
            <div className="pr-5">
              <h2 className="text-3xl font-medium">200+</h2>
              <p className="text-xs text-gray-600">International Brands</p>
            </div>
            <div className="border-l md:border-r border-gray-300 px-10 last:pr-32 last:border-0">
              <h2 className="text-3xl font-medium">2,000+</h2>
              <p className="text-xs text-gray-600">High Quality Products</p>
            </div>
            <div className="px-5">
              <h2 className="text-3xl font-medium">30,000+</h2>
              <p className="text-xs text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
