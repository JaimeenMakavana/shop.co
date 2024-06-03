"use client";
import { FilterOptionData } from "@/Statics/Category";
import { Drawer } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import FilteOption from "./FilterOption";
import PriceRange from "./RangeSelect";
import SwatchesPickerCompo from "./ColorCompo";
import SizeFilter from "./SizeFilter";

const dressStylesData = [
  { id: 1, name: "Casual" },
  { id: 2, name: "Formal" },
  { id: 3, name: "Party" },
  { id: 4, name: "Gym" },
];

const BottomDrawer: React.FC = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [SelectedFilterOption, setSelectedFilterOption] = useState("");

  useEffect(() => {
    if (openBottom) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [openBottom]);

  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
  return (
    <>
      <span>
        <GiSettingsKnobs
          onClick={openDrawerBottom}
          className=" cursor-pointer"
        />
      </span>
      <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4 rounded-t-xl"
        size={400}
      >
        <>
          <div className=" flex justify-between items-center shadow-sm">
            <h1 className="mHeading">Filter</h1>
            <button onClick={() => setOpenBottom(!openBottom)}>
              <IoMdClose />
            </button>
          </div>
          <div className="h-full w-full overflow-y-auto pb-6 scrollRemove">
            <div className=" space-y-1 py-5 border-b">
              {FilterOptionData?.map((ele: any, index: any) => {
                return (
                  <FilteOption
                    key={ele.id}
                    name={ele.name}
                    subCat={ele.subcategories}
                    setSelectedFilterOption={setSelectedFilterOption}
                    SelectedFilterOption={SelectedFilterOption}
                  />
                );
              })}
            </div>
            <PriceRange />
            <div className=" my-3">
              <SwatchesPickerCompo />
            </div>
            <SizeFilter />
            <div className=" space-y-1 py-5 border-b">
              {dressStylesData?.map((ele: any, index: any) => {
                return (
                  <FilteOption
                    key={ele.id}
                    name={ele.name}
                    subCat={[]}
                    setSelectedFilterOption={setSelectedFilterOption}
                    SelectedFilterOption={SelectedFilterOption}
                  />
                );
              })}
            </div>
            <button className=" btn btn-black">Apply Filter</button>
          </div>
        </>
      </Drawer>
    </>
  );
};

export default BottomDrawer;
