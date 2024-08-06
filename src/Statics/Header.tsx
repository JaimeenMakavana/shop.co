import { CiShop, CiShoppingTag } from "react-icons/ci";
import { PiBabyCarriageLight, PiBrandyLight } from "react-icons/pi";

export const MobileMenuPageData = [
  {
    icon: <CiShop />,
    pageName: "Shop",
    href: "/",
    subPage: [
      { name: "Shop1", href: "/" },
      { name: "Shop2", href: "/" },
      { name: "Shop3", href: "/" },
    ],
  },
  { icon: <CiShoppingTag />, pageName: "On Sale", href: "/" },
  {
    icon: <PiBabyCarriageLight />,
    pageName: "New Arrivals",
    href: "/",
  },
  { icon: <PiBrandyLight />, pageName: "Brands", href: "/" },
];
