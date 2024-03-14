import RecentOrders from "../components/RecentOrders";
import SalesArea from "../components/SalesArea";
import Overview from "../components/Overview";
import ProductDisplay from "../components/ProductDisplay";

export default function Dashboard() {
  return (
    <div className="">
      <ProductDisplay />
      <Overview />
      <SalesArea />
      <RecentOrders />
    </div>
  );
}
