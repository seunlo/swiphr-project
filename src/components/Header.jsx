import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const path = useLocation();
  const pathRoute = (route) => {
    if (route === path.pathname) {
      return true;
    }
  };
  return (
    <div className="border-b sticky top-0 z-50">
      <header className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="">
          <Link to="/">
            <img
              src="https://swiphr.com/wp-content/uploads/2023/03/Group-1.png"
              alt="swiphr"
              className="h-5 cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-10 font-semibold">
            <Link to="/">
              <li
                className={`p-1 text-sm font-semibold ${
                  pathRoute("/") &&
                  "text-white bg-purple-700 text-sm rounded-full"
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/dashboard">
              <li
                className={`p-1 text-sm font-semibold ${
                  pathRoute("/dashboard") &&
                  "text-white bg-purple-700 text-sm rounded-full"
                }`}
              >
                Dashboard
              </li>
            </Link>
            <Link to="/products">
              <li
                className={`p-1 text-sm font-semibold ${
                  pathRoute("/products") &&
                  "text-white bg-purple-700 text-sm rounded-full"
                }`}
              >
                Products
              </li>
            </Link>
            <Link to="/orders">
              <li
                className={`p-1 text-sm font-semibold ${
                  pathRoute("/orders") &&
                  "text-white bg-purple-700 text-sm rounded-full"
                }`}
              >
                Orders
              </li>
            </Link>
            <Link to="/finance">
              <li
                className={`p-1 text-sm font-semibold ${
                  pathRoute("/finance") &&
                  "text-white bg-purple-700 text-sm rounded-full"
                }`}
              >
                Finance
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-4 relative w-24 sm:w-64">
          <span className="text-xs bg-green-400 rounded-full absolute top-[-6px]">
            23
          </span>
          <GoBell className="text-xl cursor-pointer" />
          <IoSettingsOutline className="text-xl cursor-pointer" />
          <BiMessage className="text-xl cursor-pointer" />
          <span className="mr-[-10px] w-4 h-4 bg-purple-300 rounded-full"></span>
          <span className="text-xs font-semibold cursor-pointer">Store name</span>
          <MdKeyboardArrowDown className="ml-[-15px] cursor-pointer" />
        </div>
      </header>
    </div>
  );
}
