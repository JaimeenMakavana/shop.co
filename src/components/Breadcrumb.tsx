"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlHome } from "react-icons/sl";
import { TbSlash } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const Breadcrumb = () => {
  const pathname = usePathname();
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li>
          <SlHome />
        </li>
        {pathname.split("/").map((ele: any, index: any) => {
          const isLastIndex = index === pathname.split("/").length - 1;
          return (
            <>
              <li key={index} className="inline-flex items-center">
                <Link
                  href={index > 0 ? ele : "/"}
                  className={twMerge(
                    `inline-flex items-center text-sm text-gray-700 hover:text-black capitalize`,
                    isLastIndex && "text-black font-semibold"
                  )}
                >
                  {ele === "" ? "Home" : ele}
                </Link>
              </li>
              {!isLastIndex && (
                <li>
                  <TbSlash />
                </li>
              )}
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
