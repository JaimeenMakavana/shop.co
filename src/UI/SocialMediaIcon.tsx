import Link from "next/link";

const SocialMediaIcon = ({ icon, href = "/" }: { icon: any; href: string }) => {
  return (
    <Link
      href={href}
      className=" text-[20px] border p-1 rounded-full overflow-hidden hover:bg-black hover:text-white cursor-pointer"
    >
      {icon}
    </Link>
  );
};

export default SocialMediaIcon;

export const FooterMenu = ({
  menu,
  subMenu,
}: {
  menu: string;
  subMenu: any;
}) => {
  return (
    <div className=" py-3">
      <h1 className=" uppercase font-medium text-lg">{menu}</h1>
      {subMenu.map((ele: any, index: any) => (
        <p key={index} className=" text-gray-500 hover:underline">
          {ele.title}
        </p>
      ))}
    </div>
  );
};
