import { IoIosArrowForward } from "react-icons/io";

const FilteOption = ({
  name,
  subCat,
  setSelectedFilterOption,
  SelectedFilterOption,
}: {
  name: string;
  subCat?: any;
  setSelectedFilterOption: any;
  SelectedFilterOption: any;
}) => {
  return (
    <>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          if (SelectedFilterOption === name) {
            setSelectedFilterOption("");
          } else {
            setSelectedFilterOption(name);
          }
        }}
      >
        <p className=" text-gray-500">{name}</p>
        <IoIosArrowForward />
      </div>
      <div className=" px-3 space-y-1">
        {subCat.length > 0 &&
          SelectedFilterOption === name &&
          subCat.map((ele: any) => (
            <div
              key={ele.id}
              className=" flex justify-start items-center gap-2"
            >
              <input
                type="checkbox"
                name=""
                id=""
                className=" focus:outline-none accent-black"
              />
              <p className=" cursor-pointer text-sm">{ele.name}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default FilteOption;
