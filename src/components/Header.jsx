import React, { useState } from "react";
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

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="border-b sticky top-0 z-50">
      <header className="flex justify-between items-center p-3 max-w-6xl mx-auto overflow-x-auto">
        <div className="">
          <Link to="/">
            <img
              src="https://swiphr.com/wp-content/uploads/2023/03/Group-1.png"
              alt="swiphr"
              className="h-5 cursor-pointer"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-10 font-semibold">
          <ul className="list-none flex space-x-10">
            <li>
              <Link to="/">
                <span
                  className={`p-1 text-sm font-semibold ${
                    pathRoute("/") &&
                    "text-white bg-purple-700 text-sm rounded-full"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <span
                  className={`p-1 text-sm font-semibold ${
                    pathRoute("/dashboard") &&
                    "text-white bg-purple-700 text-sm rounded-full"
                  }`}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <span
                  className={`p-1 text-sm font-semibold ${
                    pathRoute("/products") &&
                    "text-white bg-purple-700 text-sm rounded-full"
                  }`}
                >
                  Products
                </span>
              </Link>
            </li>
            <li>
              <Link to="/orders">
                <span
                  className={`p-1 text-sm font-semibold ${
                    pathRoute("/orders") &&
                    "text-white bg-purple-700 text-sm rounded-full"
                  }`}
                >
                  Orders
                </span>
              </Link>
            </li>
            <li>
              <Link to="/finance">
                <span
                  className={`p-1 text-sm font-semibold ${
                    pathRoute("/finance") &&
                    "text-white bg-purple-700 text-sm rounded-full"
                  }`}
                >
                  Finance
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 relative">
          <span className="text-xs bg-green-400 rounded-full md:inline-block absolute top-[-2px] lg:top-[-6px]">
            23
          </span>
          <GoBell className="text-xl cursor-pointer" />
          <IoSettingsOutline className="text-xl cursor-pointer" />
          <BiMessage className="text-xl cursor-pointer" />
          <span className="mr-[-10px] w-4 h-4 bg-purple-300 rounded-full hidden md:inline-block"></span>
          <span className="text-xs font-semibold cursor-pointer hidden md:inline-block">
            Store name
          </span>
          <MdKeyboardArrowDown className="ml-[-15px] cursor-pointer hidden md:inline-block" />
          <button
            className="block md:hidden text-xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>
        </div>
        {showMenu && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b z-50">
            <ul className="list-none flex flex-col space-y-2 p-4">
              <li>
                <Link to="/">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/") &&
                      "text-white bg-purple-700 text-sm rounded-full"
                    }`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/dashboard") &&
                      "text-white bg-purple-700 text-sm rounded-full"
                    }`}
                  >
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/products") &&
                      "text-white bg-purple-700 text-sm rounded-full"
                    }`}
                  >
                    Products
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/orders">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/orders") &&
                      "text-white bg-purple-700 text-sm rounded-full"
                    }`}
                  >
                    Orders
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/finance">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/finance") &&
                      "text-white bg-purple-700 text-sm rounded-full"
                    }`}
                  >
                    Finance
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
