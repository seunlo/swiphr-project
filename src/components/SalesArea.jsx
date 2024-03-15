import React from "react";

export default function SalesArea() {
  return (
    <div className="max-w-6xl mx-auto h-[420px] lg:h-[220px] flex flex-col my-5 gap-5 xl:flex-row">
      <div class="flex-1 border border-slate-200 rounded-md h-[210px] overflow-x-auto">
        <div class="mt-5">
          <span class="font-semibold ml-4">Real-Time Sales</span>
          <div class="flex justify-between mx-4">
            <div>
              <span class="text-xs">Here are the monthly sales stats</span>
            </div>
            <div class="flex gap-3">
              <div class="flex items-center gap-[1px]">
                <div class="w-2 h-2 bg-purple-300 rounded-full"></div>
                <span class="text-xs text-slate-500">Orders</span>
              </div>
              <div class="flex items-center gap-[1px]">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-xs text-slate-500">Revenue</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col ml-[20px] overflow-x-auto text-xs gap-1 lg:gap-[6px] lg:ml-[20px]">
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>
        <div class="relative ml-[35px]">
          <div class="flex gap-[1px] absolute left-[32px] lg:left-[40px] bottom-[4px]">
            <span class="w-[1px] h-9 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-10 bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-12px]">
              Jan
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[57px] lg:left-[80px] bottom-[4px]">
            <span class="w-[1px] h-10 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-10 bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-12px]">
              Feb
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[82px] lg:left-[120px] bottom-[4px]">
            <span class="w-[1px] h-10 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-11 bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-12px]">
              Mar
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[107px] lg:left-[160px] bottom-[4px]">
            <span class="w-[1px] h-6 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-6 bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-12px]">
              Apr
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[132px] lg:left-[200px] bottom-[4px]">
            <span class="w-[1px] h-14 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-16 bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-12px]">
              May
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[162px] lg:left-[240px] bottom-[4px]">
            <span class="w-[1px] h-16 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-[70px] bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-12px]">
              Jun
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[192px] lg:left-[280px] bottom-[4px]">
            <span class="w-[1px] h-9 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-10 bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-12px]">
              Jul
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[222px] lg:left-[320px] bottom-[4px]">
            <span class="w-[1px] h-10 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-11 bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-15px]">
              Aug
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[252px] lg:left-[360px] bottom-[4px]">
            <span class="w-[1px] h-12 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-[50px] bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-15px]">
              Sep
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[282px] lg:left-[400px] bottom-[4px]">
            <span class="w-[1px] h-12 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-[52px] bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-15px]">
              Oct
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[312px] lg:left-[440px] bottom-[4px]">
            <span class="w-[1px] h-6 bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-7 bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-15px]">
              Nov
            </span>
          </div>
          <div class="flex gap-[1px] absolute left-[342px] lg:left-[480px] bottom-[4px]">
            <span class="w-[1px] h-[52px] bg-purple-300 absolute bottom-[-0px] left-[-5px] xl:w-[3px]"></span>
            <span class="w-[1px] h-[55px] bg-purple-500 xl:w-[3px]"></span>
            <span class="text-xs absolute bottom-[-20px] left-[-15px]">
              Dec
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 border border-slate-200 rounded-md h-[210px]">
        <div className="mt-5">
          <span className="font-semibold ml-4">Top Products</span>
          <div className="flex justify-between mx-4">
            <span className="text-xs">
              Here are the most recent financial transaction
            </span>
            <span className="text-xs cursor-pointer">view all</span>
          </div>
        </div>
        <div className="flex justify-around lg:mx-5">
          <div className="mt-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMYAIp4_hZTW17-XIawvaKdtdXhRxXACaew&usqp=CAU"
              alt="shoe"
              className="object-cover lg:w-24 w-16 h-20 lg:h-24 rounded-xl"
            />
            <span className="text-xs">23% increase</span>
          </div>
          <div className="mt-5">
            <img
              src="https://cdn.shopify.com/s/files/1/2124/8315/products/living-words-loved-tote-bag-13921952727127.jpg?v=1614385550"
              alt="shoe"
              className="object-cover lg:w-24 w-16 h-20 lg:h-24 rounded-xl"
            />
            <span className="text-xs">23% increase</span>
          </div>
          <div className="mt-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNF0-SM_NFltiIMUz_PC3U9bPCRKSjQsJOqQ&usqp=CAU"
              alt="shoe"
              className="object-cover lg:w-24 w-16 h-20 lg:h-24 rounded-xl"
            />
            <span className="text-xs">23% increase</span>
          </div>
          <div className="mt-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNF0-SM_NFltiIMUz_PC3U9bPCRKSjQsJOqQ&usqp=CAU"
              alt="shoe"
              className="object-cover lg:w-24 w-16 h-20 lg:h-24 rounded-xl"
            />
            <span className="text-xs">23% increase</span>
          </div>
        </div>
      </div>
    </div>
  );
}
