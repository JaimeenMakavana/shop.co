import Link from "next/link";

const MobileMenuPage = ({
  pageName,
  subPage,
}: {
  pageName: string;
  subPage: any;
}) => {
  return (
    <div>
      <p className="mb-2">{pageName}</p>
      {subPage.length > 0 &&
        subPage &&
        subPage.map((ele: any, index: any) => (
          <p key={index}>
            <Link href={ele.href} className=" text-sm ml-3">
              {ele.name}
            </Link>
          </p>
        ))}
    </div>
  );
};

export default MobileMenuPage;
