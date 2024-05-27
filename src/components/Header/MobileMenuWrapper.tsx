import { IoCloseOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const MobileMenuWrapper = ({
  MobileToggle,
  setMobileToggle,
  children,
}: {
  MobileToggle: boolean;
  setMobileToggle: any;
  children: any;
}) => {
  return (
    <div
      className={twMerge(
        ` fixed inset-0 bg-black/50 `,
        MobileToggle && "hidden"
      )}
    >
      <div className={twMerge(` w-[60%] bg-white absolute inset-y-0 px-4`)}>
        <div className=" flex justify-end items-center">
          <IoCloseOutline
            onClick={() => setMobileToggle(!MobileToggle)}
            className=" size-[20px]"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default MobileMenuWrapper;
