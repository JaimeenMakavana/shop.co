import BrowseByStyle from "@/components/Home/BrowseByStyle";
import HappyCustomers from "@/components/Home/HappyCustomers";
import {
  NewArrivalDataconst,
  topSellingData,
} from "@/components/Home/HomeStatic";
import Intro from "@/components/Home/Intro";
import ShoppingCardComponent from "@/components/Home/NewArrival";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <ShoppingCardComponent name="New Arrivals" data={NewArrivalDataconst} />
      <div className=" border-t border-gray-300 mt-4">
        <ShoppingCardComponent name="top selling" data={topSellingData} />
      </div>
      <BrowseByStyle />
      <HappyCustomers />
    </main>
  );
}
