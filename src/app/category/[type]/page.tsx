"use client";
import { NewArrivalDataconst } from "@/components/Home/HomeStatic";
import { ArrivalCard } from "@/components/Home/NewArrival";
import { Drawer } from "@material-tailwind/react";
import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import ReactPaginate from "react-paginate";

const PaginationLabel = ({
  label,
  icon,
  order,
}: {
  label: string;
  icon: any;
  order: any;
}) => {
  return (
    <div className=" flex justify-start items-center gap-1 border rounded-full shrink-0 px-2 py-1">
      <p className={` ${order} text-xs`}>{label}</p>
      <p>{icon}</p>
    </div>
  );
};

const BottomDrawer = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
  return (
    <>
      <span>
        <GiSettingsKnobs onClick={openDrawerBottom} />
      </span>
      <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4"
        size={400}
      >
        <button onClick={() => setOpenBottom(!openBottom)}>Close</button>
        <div className="h-full w-full overflow-y-auto pb-6 scrollRemove">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p className=" text-red-800">Lorem, ipsum dolor.</p>
        </div>
      </Drawer>
    </>
  );
};

const Page = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setitemsPerPage] = useState(6);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = NewArrivalDataconst.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(NewArrivalDataconst.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * itemsPerPage) % NewArrivalDataconst.length;
    setItemOffset(newOffset);
  };
  return (
    <div className=" px-[16px] py-[16px]">
      <h1 className="w-full inline-flex justify-between items-center">
        <span className=" inline-flex justify-start items-center gap-1">
          <span className=" lHeading text-black font-semibold">Casual </span>{" "}
          <span className=" text-gray-400 text-xs  ">
            Showing 1-10 of 100 Products
          </span>{" "}
        </span>
        <BottomDrawer />
      </h1>
      <div className="grid grid-cols-2 gap-4 my-5">
        {currentItems.map((ele: any) => (
          <ArrivalCard key={ele.id} data={ele} imageClass="size-[165px]" />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        previousLabel={
          <PaginationLabel
            label="Previous"
            icon={<LuArrowLeft />}
            order="order-1"
          />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        nextLabel={
          <PaginationLabel label="Next" icon={<LuArrowRight />} order="" />
        }
        renderOnZeroPageCount={null}
        pageClassName="rounded-full hover:bg-gray-300 px-2"
        className="flex justify-between items-center"
      />
    </div>
  );
};

export default Page;
