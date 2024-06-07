import Link from "next/link";

const MobileMenuPage = ({
  pageName,
  subPage,
  icon,
}: {
  pageName: string;
  subPage: any;
  icon: any;
}) => {
  return (
    <div>
      <div className=" flex justify-start items-center gap-2 group cursor-pointer">
        {icon}
        <p className=" group-hover:underline ">{pageName}</p>
      </div>
      {subPage.length > 0 &&
        subPage &&
        subPage.map((ele: any, index: any) => (
          <p key={index}>
            <Link
              href={ele.href}
              className=" text-sm text-gray-500 ml-3 hover:underline cursor-pointer transition-all duration-700 "
            >
              {ele.name}
            </Link>
          </p>
        ))}
    </div>
  );
};

export default MobileMenuPage;
