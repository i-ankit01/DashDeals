import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetails from "./DetailsPage";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
//https://dummyjson.com/products

const Card = () => {

  const [products] = useContext(ProductContext)

  return !products || products.length === 0 ? (
    <Loading />
  ) : (
    <div className="w-full h-full md:p-10 p-5 bg-white flex flex-wrap justify-center md:gap-8 gap-3 overflow-y-auto">
      {products.map((product, key) => (
        <div key={product.id} className="bg-transparent hover:bg-slate-200 hover:scale-105 transition-transform hover:shadow-md border-black border md:w-[14%] w-[48%] md:h-64 h-56 p-2 flex flex-col rounded-md">
          <img
            className="bg-gradient-to-r from-teal-400 to-blue-500 w-[90%] h-[65%] m-auto object-contain border border-black rounded-md"
            src={product.thumbnail}
            alt=""
          />
          <h2 className="md:text-sm text-xs m-auto font-medium">{product.title}</h2>
          <div className="flex justify-between items-center">
            <h2 className="text-md text-red-500 font-bold">${product.price}</h2>
            <Link
              to={`/details/${product.id}`}
              className="md:text-xs text-[10px] bg-slate-200 text-black md:px-2 md:py-1 px-1 py-1 rounded-lg hover:bg-black hover:text-white border border-black font-bold"
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
