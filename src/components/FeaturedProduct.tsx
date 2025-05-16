// import React from "react";
import useFetch from "../hooks/useFetch";
import type { ProductCardProps } from "../types/types";
import ProductCard from "./ProductCard";
import Title from "./Title";

export default function FeaturedProduct() {
  const { products, loading, error, navigate } = useFetch<ProductCardProps[]>(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title title="Featured Products" align="center" />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {products?.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/products");
          scrollTo(0, 0);
        }}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All
      </button>
    </div>
  );
}
