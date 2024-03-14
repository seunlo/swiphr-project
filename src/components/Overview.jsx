import { PiStarFill } from "react-icons/pi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { TbArrowDownRight } from "react-icons/tb";

export default function Overview() {
  return (
    <>
      <p className="font-semibold ml-[5%] text-sm mt-5 mb-3">Overview</p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="flex flex-col p-3 gap-4 md:w-[33.333%] w-full rounded-md border border-slate-200">
          <div className="flex justify-between">
            <div className="">
              <PiStarFill className="text-3xl text-green-300" />
              <h3 className="text-slate-800 text-xs font-semibold">
                Total Sales
              </h3>
              <p className="text-2xl font-semibold">N134,000</p>
            </div>
            <div className="flex h-5 w-12 border bg-green-300 rounded-2xl text-xs">
              <RiArrowRightUpLine className="text-slate-800" />
              <span className="">56.5%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-3 gap-4 md:w-[33.333%] w-full rounded-md border border-slate-200">
          <div className="flex justify-between">
            <div className="">
              <PiStarFill className="text-3xl text-green-300" />
              <h3 className="text-slate-800 text-xs font-semibold">
                Total Orders
              </h3>
              <p className="text-2xl font-semibold">120</p>
            </div>
            <div className="flex h-5 w-12 border bg-green-300 rounded-2xl text-xs">
              <RiArrowRightUpLine className="text-slate-800" />
              <span className="">56.5%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-3 gap-4 md:w-[33.333%] w-full rounded-md border border-slate-200">
          <div className="flex justify-between">
            <div className="">
              <PiStarFill className="text-3xl text-green-300" />
              <h3 className="text-slate-800 text-xs font-semibold">
                Total Visitors
              </h3>
              <p className="text-2xl font-semibold">54</p>
            </div>
            <div className="flex h-5 w-12 border bg-orange-300 rounded-2xl text-xs">
              <TbArrowDownRight className="text-slate-800" />
              <span className="">56.5%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
