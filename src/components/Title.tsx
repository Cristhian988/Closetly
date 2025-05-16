import React from "react";
import type { TitleProps } from "../types/types";

export default function Title({ title, align, font }: TitleProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${
        align === "left" && "md:items-start md:text-left"
      }`}
    >
      <h1
        className={`text-4xl md:text-5xl font-bold ${font || "font-playfair"}`}
      >
        {title}
      </h1>
    </div>
  );
}
