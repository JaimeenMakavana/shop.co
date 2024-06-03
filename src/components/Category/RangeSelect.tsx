"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Range, getTrackBackground } from "react-range";

const PriceRange = () => {
  const [values, setValues] = useState([20, 80]);
  const STEP = 1;
  const MIN = 0;
  const MAX = 100;
  return (
    <>
      <div className=" flex justify-between items-center my-3">
        <h1 className=" mHeading">Price</h1>
        <IoIosArrowDown />
      </div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#000", "#ccc"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "22px",
              width: "22px",
              borderRadius: "100%",
              backgroundColor: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          ></div>
        )}
      />
      <div className="py-2 px-2 border-b">
        <output>${values[0]}</output> - <output>${values[1]}</output>
      </div>
    </>
  );
};

export default PriceRange;
