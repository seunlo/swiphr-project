import { Button } from "flowbite-react";

export default function ProductDisplay() {
  return (
    <div className="max-w-6xl mx-auto mt-5 border rounded-2xl h-[370px] xl:h-[280px] flex flex-col">
      <div className="mx-3 bg-red-700 h-12 rounded-2xl mt-3 relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91BLcDIOlieH-_dec42Sv2aOTdGCGE_W87w&usqp=CAU"
          alt="nike sneaker"
          className="h-[120px] w-full object-cover rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqiYJxg05j2XhuHp8eQzO5KI7hGmN8mjZS-g&usqp=CAU"
          alt=""
          className="w-28 h-28 rounded-full border-[6px] border-[white] object-cover absolute top-12 left-12"
        />
      </div>
      <div className="flex flex-col xl:flex-row mt-[110px] max-w-5xl mx-auto items-center px-2">
        <div className="mr-[80px] xl:ml-[-80px]">
          <h2 className="font-semibold text-xl xl:text-3xl xl:mb-3">
            Adam-son Store
          </h2>
          <p className="text-xs xl:text-md">
            Another way to improve the readability of a website or app is to use
            clear and concise navigation. This helps to <br /> make it easy for
            you to find the information or features that you are looking for. It
            also helps to prevent you <br /> from becoming lost or overwhelmed
          </p>
        </div>
        <div className="">
          <div className="flex mt-3 justify-center xl:justify-start gap-2 xl:gap-4">
            <Button
              type="button"
              gradientDuoTone="blueToPurple"
              className="text-xs xl:text-sm rounded-full border border-purple-600"
            >
              Edit storefront
            </Button>
            <Button
              type="button"
              gradientDuoTone="blueToPurple"
              className="text-xs xl:text-sm rounded-full bg-purple-600 text-white"
            >
              Add product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
