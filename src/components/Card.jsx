import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
//https://dummyjson.com/products

const Card = ({ products }) => {
  return (
    <>
      <div className="w-full h-full p-10  bg-black flex flex-wrap gap-8 overflow-y-auto ">
        {products.map((product , key)=>{
          return(<div className="bg-transparent hover:scale-105 transition-transform border-white border-2 w-[14%] h-64 p-2  flex flex-col rounded-md">
            <img
              className="bg-sky-400 w-[90%] h-[65%] m-auto object-contain border-2 border-white rounded-md"
              src={product.thumbnail}
              alt=""
            />
            <h2 className="text-sm m-auto text-white font-medium">{product.title}</h2>
            <div className="flex justify-between items-center">
              <h2 className="text-md text-red-500 font-bold">${product.price}</h2>
              <Link
                to={"/details"}
                className="text-xs bg-black px-2 py-1 rounded-lg hover:bg-white hover:text-black text-white border-2 border-white font-bold"
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
