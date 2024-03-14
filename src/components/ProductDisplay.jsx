import { Button } from "flowbite-react";

export default function ProductDisplay() {
  return (
    <div className="max-w-6xl mx-auto mt-5 border rounded-2xl h-[300px] flex flex-col">
      <div className="mx-3 bg-red-700 h-12 rounded-2xl mt-3 relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91BLcDIOlieH-_dec42Sv2aOTdGCGE_W87w&usqp=CAU"
          alt="nike sneaker"
          className="h-[120px] w-full object-cover rounded-2xl"
        />
        <div className="absolute top-12 left-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqiYJxg05j2XhuHp8eQzO5KI7hGmN8mjZS-g&usqp=CAU"
            alt=""
            className="w-28 h-28 rounded-full border-[6px] border-[white] object-cover"
          />
        </div>
      </div>
      <div className="flex mt-[120px]">
        <div className="flex-1 ml-[58px]">
          <h2 className="font-semibold text-3xl">Adam-son Store</h2>
          <p className="text-xs">
            Another way to improve the readability of a website or app is to use
            clear and concise navigation. This helps to make it easy for you to
            find the information or features that you are looking for. It also
            helps to prevent you from becoming lost or overwhelmed
          </p>
        </div>
        <div className="flex-1 mt-[30px]">
          <div className="flex justify-center gap-4">
            <Button
              type="button"
              gradientDuoTone="blueToPurple"
              className="text-xs rounded-full border border-purple-600"
            >
              Edit storefront
            </Button>
            <Button
              type="button"
              gradientDuoTone="blueToPurple"
              className="text-xs rounded-full bg-purple-600 text-white"
            >
              Add product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
