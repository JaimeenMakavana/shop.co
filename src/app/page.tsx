import BrowseByStyle from "@/components/Home/BrowseByStyle";
import HappyCustomers from "@/components/Home/HappyCustomers";
import Intro from "@/components/Home/Intro";
import ShoppingCardComponent from "@/components/Home/NewArrival";
import NewArrival from "@/components/Home/NewArrival";

export default function Home() {
  return (
    <main>
      <Intro />
      <ShoppingCardComponent name="New Arrivals" />
      <div className=" border-t border-gray-300 mt-4">
        <ShoppingCardComponent name="top selling" />
      </div>
      <BrowseByStyle />
      <HappyCustomers />
    </main>
  );
}
