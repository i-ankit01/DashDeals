import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
//https://dummyjson.com/products

const Card = () => {

  const [products] = useContext(ProductContext)

  return !products || products.length === 0 ? (
    <Loading />
  ) : (
    <div className="w-full h-full p-10 bg-white flex flex-wrap justify-center gap-8 overflow-y-auto">
      {products.map((product, key) => (
        <div key={key} className="bg-transparent hover:bg-slate-200 hover:scale-105 transition-transform hover:shadow-md border-black border w-[14%] h-64 p-2 flex flex-col rounded-md">
          <img
            className="bg-gradient-to-r from-teal-400 to-blue-500 to-pink-500 w-[90%] h-[65%] m-auto object-contain border border-black rounded-md"
            src={product.thumbnail}
            alt=""
          />
          <h2 className="text-sm m-auto font-medium">{product.title}</h2>
          <div className="flex justify-between items-center">
            <h2 className="text-md text-red-500 font-bold">${product.price}</h2>
            <Link
              to={"/details"}
              className="text-xs bg-slate-200 text-black px-2 py-1 rounded-lg hover:bg-black hover:text-white border border-black font-bold"
            >
              View More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Card;
