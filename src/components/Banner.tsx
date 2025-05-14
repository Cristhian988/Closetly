import { X } from "lucide-react";
import React from "react";

export default function Banner() {
  return (
    <div className="relative w-full px-4 md:px-14 py-2 font-medium text-sm text-white text-center bg-gray-800">
      <p>
        Sign up and get 20% off to your first order.{" "}
        <span className="underline underline-offset-4">Sign Up Now</span>
      </p>
      <button
        type="button"
        className="absolute top-1.5 right-8 h-3 w-3 cursor-pointer hidden md:block"
      >
        <X />
      </button>
    </div>
  );
}
