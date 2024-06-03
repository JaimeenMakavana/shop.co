"use client";
import { useState } from "react";

const SizeFilter = () => {
  const [SelectedSize, setSelectedSize] = useState([
    { name: "XX-Small", selected: false },
    { name: "X-Small", selected: false },
    { name: "Small", selected: false },
    { name: "Medium", selected: false },
    { name: "Large", selected: true },
    { name: "X-Large", selected: false },
    { name: "XX-Large", selected: false },
    { name: "3X-Large", selected: false },
    { name: "4X-Large", selected: false },
  ]);

  const handleSizeClick = (index: any) => {
    const updatedSizes = SelectedSize.map((size, i) => ({
      ...size,
      selected: i === index,
    }));
    setSelectedSize(updatedSizes);
  };
  return (
    <div>
      <h1 className=" mHeading mb-3">Size</h1>
      <div className=" flex flex-wrap justify-start items-center gap-3">
        {SelectedSize.map((size: any, index: any) => (
          <div
            key={size.name}
            onClick={() => handleSizeClick(index)}
            className={`px-5 py-1 rounded-full bg-lightGrey ${
              size.selected ? "!bg-black text-white" : ""
            }`}
          >
            {size.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
