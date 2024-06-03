"use client";
import { useState } from "react";
import { CirclePicker } from "react-color";

const SwatchesPickerCompo = () => {
  const [selectedColor, setSelectedColor] = useState("#fff");

  const handleChangeComplete = (color: any) => {
    setSelectedColor(color.hex);
  };
  return (
    <>
      <h1 className=" mHeading mb-3">Colors</h1>
      <CirclePicker
        color={selectedColor}
        onChangeComplete={handleChangeComplete}
        colors={[
          "#00FF00",
          "#FF0000",
          "#FFFF00",
          "#FFA500",
          "#00FFFF",
          "#0000FF",
          "#800080",
          "#FFC0CB",
          "#DEDEDE",
          "#000000",
        ]}
      />
      {/* <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        Selected Color:{" "}
        <span style={{ color: selectedColor }}>{selectedColor}</span>
      </div> */}
    </>
  );
};

export default SwatchesPickerCompo;
