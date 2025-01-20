import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
//https://dummyjson.com/products

const Card = ({ products }) => {
  return (
    <>
      <div className="w-full h-full p-10  bg-blue-100 flex flex-wrap gap-8 overflow-y-auto ">
        {products.map((product , key)=>{
          return(<div className="bg-red-400 w-[14%] h-64 p-2  flex flex-col rounded-md">
            <img
              className="bg-blue-400 w-[90%] h-[65%] m-auto object-contain rounded-md"
              src={product.thumbnail}
              alt=""
            />
            <h2 className="text-sm m-auto font-medium">{product.title}</h2>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">${product.price}</h2>
              <Link
                to={"/details"}
                className="text-xs bg-black px-2 py-1 rounded-lg text-white font-semibold"
              >
                View More
              </Link>
            </div>
          </div>)
        })}
      </div>
    </>
  );
};

export default Card;
