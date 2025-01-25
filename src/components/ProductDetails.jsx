import React from "react";
import Navbar from "./Navbar";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="w-[100%] h-[90%] flex ">
        <div className=" w-[30%] h-[75%] ml-14 mt-14 flex flex-col items-center rounded-md border-2 border-black">
          <img
            className="bg-red-500 w-[90%] h-[80%] mt-5 rounded-md "
            src="/"
            alt=""
          />
          <div className="bg-red-500 w-[90%] h-[10%] mt-5 rounded-md flex items-center justify-around">
            <div className="flex items-center text-xl font-medium px-3 py-1 rounded-md border-black border-2">
              <i class="ri-shopping-cart-2-line "></i>
              <button className="ml-1">Add to cart</button>
            </div>
            <button className="text-xl font-medium px-3 py-1 rounded-md border-black border-2">
              Buy Now
            </button>
          </div>
        </div>

        <div className="w-[62%] h-[100%] bg-red-400 ml-14 p-16 ">
          <h1 className="text-3xl font-bold ">Eyeshadow Palette with Mirror</h1>
          <div className="flex items-center mt-3 gap-5">
            <div className="flex items-center bg-green-400 w-12 justify-around rounded-md font-semibold px-1">
              <h6>4.3</h6>
              <i class="ri-star-s-fill"></i>
            </div>
            <h2 className="font-medium">4 reviews</h2>
          </div>
          <div className="bg-black mt-3 w-[90%] h-20">
            <h1 className="text-white font-bold">Special Price</h1>
            <div className="flex gap-4 mt-2 items-baseline">
            <h1 className="text-4xl text-white">$8000</h1>
            <h2 className="text-gray-300 text-lg line-through ">$9000</h2>
            <h2 className="text-white text-lg font-semibold">50% off</h2>
            </div>
          </div>

          <h1 className="mt-2 font-semibold text-sm border border-black bg-slate-300 w-[17%] text-center rounded-md">1 month warranty</h1>
          <div className="w-[90%] bg-red-200">
          <h2 className="w-[100%] text-2xl font-semibold mt-5 px-2 py-2 border-black border">About</h2>
          <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
          <h2 className="w-[20%]">Brand :</h2>
          <p>Glamour Beauty</p>
          </div>
          <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
          <h2 className="w-[20%]">Model no. :</h2>
          <p>MVCFH27F</p>
          </div>
          <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
          <h2 className="w-[20%]">Height :</h2>
          <p>23.3cm</p>
          </div>
          <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
          <h2 className="w-[20%]">Width :</h2>
          <p>23.3cm</p>
          </div>
          <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
          <h2 className="w-[20%]">Depth :</h2>
          <p>23.3cm</p>
          </div>
          <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
          <h2 className="w-[20%]">Shipping :</h2>
          <p>Ships in one month</p>
          </div>
          </div>
          <div className="flex w-[90%] gap-9 mt-5">
          <h2 className="w-[30%]">Description :</h2>
          <p>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
