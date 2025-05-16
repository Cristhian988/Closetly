// import React from "react";
import type { ProductCardProps } from "../types/types";
import StarRating from "./StarRating";
import useFetch from "../hooks/useFetch";

export default function ProductCard({
  id,
  title,
  price,
  image,
  rating,
}: ProductCardProps) {
  const { navigate } = useFetch<ProductCardProps[]>(
    "https://fakestoreapi.com/products"
  );
  return (
    <div
      key={id}
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] pt-5"
    >
      <img
        onClick={() => {
          navigate("/products/" + id);
          scrollTo(0, 0);
        }}
        src={image}
        alt={title}
        className="max-w-[140px] mx-auto cursor-pointer"
      />

      <div className="p-4 mt-4">
        <div className="flex items-center gap-2">
          <StarRating rating={rating} />
        </div>
        <h3
          onClick={() => {
            navigate("/products/" + id);
            scrollTo(0, 0);
          }}
          className="text-xl font-medium text-gray-800 py-4 cursor-pointer"
        >
          {title}
        </h3>
        <p className="text-xl font-bold text-gray-800">${price}</p>
      </div>
    </div>
  );
}
