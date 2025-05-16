// import React from 'react'

import { StarIcon } from "lucide-react";

export default function StarRating({ rating = 4 }) {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <StarIcon
            fill={rating > index ? "transparent" : "orange"}
            key={index}
            className="w-5 h-5"
          />
        ))}
    </>
  );
}
