import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import axios from "../utils/Axios";
import Loading from "./Loading";

const Product = ({id}) => {
    const [product , setProduct] = useState(null)
    const [products] = useContext(ProductContext)

    async function getSingleProduct (){
        try{
            const {data} = await axios.get(`/products/${id}`)
            setProduct(data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getSingleProduct();
    },[])
    
    if(!product){
        return <Loading/>
    }
    return (
        <div>
            <div className="w-[100%] h-[90%] md:flex md:mt-16 mt-24">
                {/* left div with image */}
                <div className="md:fixed md:w-[30%] md:h-[75%] w-[80%] md:ml-14 ml-9 md:mt-14 mt-7 flex flex-col items-center rounded-md border-2 shadow-lg border-black">
                    <img
                        className=" border-b-2 border-black bg-sky-300 w-[90%] h-[80%] mt-5 object-contain rounded-md "
                        src={product.images[0]}
                        alt=""
                    />
                    <div className=" w-[90%] h-[10%] mt-5 rounded-md flex items-center justify-around">
                        <div className="flex items-center md:text-xl mb-3 md:mb-0 bg-blue-300 hover:bg-blue-400 md:hover:text-2xl shadow-lg hover:scale-105 transition ease-in-out duration-300 delay-150 font-medium px-3 py-1 rounded-md border-black border-2">
                            <i class="ri-shopping-cart-2-line "></i>
                            <button className="ml-1 ">Add to cart</button>
                        </div>
                        <button className="md:text-xl bg-red-300 hover:bg-red-400 md:hover:text-2xl shadow-lg hover:scale-105 transition ease-in-out duration-300 delay-150 font-medium px-3 py-1 mb-3 md:mb-0 rounded-md border-black border-2">
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* right details div */}
                <div className="md:w-[62%] w-[95%] h-[100%] md:ml-[38%] md:p-16 p-8 ">
                    <h1 className="md:text-3xl text-2xl font-bold ">{product.title}</h1>
                    <div className="flex items-center mt-3 gap-5">
                        <div className="flex items-center md:text-base text-sm bg-green-200 border-2 border-green-600 w-12 justify-around rounded-md font-semibold px-1">
                            <h6 className="md:text-base">{(product.rating).toFixed(1)}</h6>
                            <i class="ri-star-s-fill"></i>
                        </div>
                        <h2 className="font-medium md:text-base text-sm">{product.reviews.length} reviews</h2>
                    </div>
                    <div className=" mt-3 w-[90%] h-20">
                        <h1 className=" font-bold text-rose-600 md:text-base text-sm border-rose-600 border w-28 text-center rounded-md bg-rose-100 ">Special Price</h1>
                        <div className="flex gap-4 mt-2 items-baseline">
                            <h1 className="text-4xl text-rose-600">${product.price}</h1>
                            <h2 className="text-gray-500 text-lg line-through ">${((product.price)/(1-(product.discountPercentage/100))).toFixed(2)}</h2>
                            <h2 className=" text-lg font-semibold">{product.discountPercentage}%</h2>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-3">
                        <div className="flex items-center justify-around border border-black bg-slate-300 md:w-[10%] w-[27%] h-6 rounded-md">
                            <h1 className=" font-semibold md:text-sm text-xs">{product.availabilityStatus}</h1>
                        </div>
                        <div className="flex items-center gap-2 border border-black bg-slate-300 md:w-[19%] w-[45%] h-6 rounded-md">
                            <i class="ri-shield-star-fill ml-2"></i>
                            <h1 className=" font-semibold md:text-sm text-xs md:mb-1">{product.warrantyInformation}</h1>
                        </div>
                    </div>

                    <div className="md:flex w-[90%] gap-9 mt-5">
                        <h2 className="md:w-[30%] text-lg font-semibold">Description :</h2>
                        <p className="text-gray-500">{product.description}</p>
                    </div>

                    <div className="md:w-[90%] border border-black mt-5 rounded-md">
                        <h2 className="w-[100%] text-2xl font-semibold px-2 py-2 border-b border-black">
                            About
                        </h2>
                        <div className="flex md:text-base text-sm md:w-[90%] w-[96%] md:px-2 px-4 gap-3 mt-4 items-start">
                            <h2 className="md:w-[20%] w-[48%] ">Brand :</h2>
                            <p>{product.brand}</p>
                        </div>
                        <div className="flex md:text-base text-sm md:w-[90%] w-[96%] md:px-2 px-4 gap-3 mt-4 items-start">
                            <h2 className="md:w-[20%] w-[48%] ">Model no. :</h2>
                            <p>{product.sku}</p>
                        </div>
                        <div className="flex md:text-base text-sm md:w-[90%] w-[96%] md:px-2 px-4 gap-3 mt-4 items-start">
                            <h2 className="md:w-[20%] w-[48%] ">Height :</h2>
                            <p>{product.dimensions.height} cm</p>
                        </div>
                        <div className="flex md:text-base text-sm md:w-[90%] w-[96%] md:px-2 px-4 gap-3 mt-4 items-start">
                            <h2 className="md:w-[20%] w-[48%] ">Width :</h2>
                            <p>{product.dimensions.width} cm</p>
                        </div>
                        <div className="flex md:text-base text-sm md:w-[90%] w-[96%] md:px-2 px-4 gap-3 mt-4 items-start">
                            <h2 className="md:w-[20%] w-[48%] ">Depth :</h2>
                            <p>{product.dimensions.depth} cm</p>
                        </div>
                        <div className="flex md:text-base text-sm md:w-[90%] w-[96%] md:px-2 px-4 gap-3 mt-4 items-start">
                            <h2 className="md:w-[20%] w-[48%] ">Stock Available :</h2>
                            <p>{product.stock}</p>
                        </div>
                        <div className="flex md:text-base text-sm md:w-[90%] w-[96%] md:px-2 px-4 gap-3 mt-4 mb-4 items-start">
                            <h2 className="md:w-[20%] w-[48%] ">Shipping :</h2>
                            <p>{product.shippingInformation}</p>
                        </div>
                    </div>

                    <div className="md:w-[90%] border border-black mt-5 rounded-md">
                        <h2 className="w-[100%] text-2xl font-semibold px-2 py-2 border-b border-black">
                            Ratings & Reviews
                        </h2>


                        {/* reviews div  */}
                        {product.reviews.map((val, ind)=>{
                            return(<div className=" px-2 py-2 border-b border-black">
                                <div className="flex md:gap-4 gap-2 items-center  ">
                                    <div className="flex items-center text-xs md:text-base bg-green-200 border-2 border-green-600 md:w-12 justify-around rounded-md font-semibold px-1">
                                        <h6>{val.rating}</h6>
                                        <i class="ri-star-s-fill"></i>
                                    </div>
                                    <h2 className="md:text-md text-sm font-bold ">{val.reviewerName}</h2>
                                </div>
                                <div className="mt-2 text-md ">
                                    {val.comment}
                                </div>
                                <div className=" flex gap-1 items-center mt-2 font-medium text-xs text-gray-600">
                                    <i class="ri-checkbox-circle-fill "></i>
                                    <h2>DashDeals Certified Buyer</h2>
                                </div>
                            </div>)
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
