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
            <div className="w-[100%] h-[90%] flex mt-16">
                {/* left div with image */}
                <div className="fixed w-[30%] h-[75%] ml-14 mt-14 flex flex-col items-center rounded-md border-2 border-black">
                    <img
                        className=" border-b-2 border-black bg-sky-300 w-[90%] h-[80%] mt-5 object-contain rounded-md "
                        src={product.images[0]}
                        alt=""
                    />
                    <div className=" w-[90%] h-[10%] mt-5 rounded-md flex items-center justify-around">
                        <div className="flex items-center text-xl bg-blue-300 hover:bg-blue-400 hover:text-2xl hover:shadow-lg hover:scale-105 transition ease-in-out duration-300 delay-150 font-medium px-3 py-1 rounded-md border-black border-2">
                            <i class="ri-shopping-cart-2-line "></i>
                            <button className="ml-1 ">Add to cart</button>
                        </div>
                        <button className="text-xl bg-red-300 hover:bg-red-400 hover:text-2xl hover:shadow-lg hover:scale-105 transition ease-in-out duration-300 delay-150 font-medium px-3 py-1 rounded-md border-black border-2">
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* right details div */}
                <div className="w-[62%] h-[100%] ml-[38%] p-16 ">
                    <h1 className="text-3xl font-bold ">{product.title}</h1>
                    <div className="flex items-center mt-3 gap-5">
                        <div className="flex items-center bg-green-200 border-2 border-green-600 w-12 justify-around rounded-md font-semibold px-1">
                            <h6>{(product.rating).toFixed(1)}</h6>
                            <i class="ri-star-s-fill"></i>
                        </div>
                        <h2 className="font-medium">{product.reviews.length} reviews</h2>
                    </div>
                    <div className=" mt-3 w-[90%] h-20">
                        <h1 className=" font-bold text-rose-600 border-rose-600 border w-28 text-center rounded-md bg-rose-100 ">Special Price</h1>
                        <div className="flex gap-4 mt-2 items-baseline">
                            <h1 className="text-4xl text-rose-600">${product.price}</h1>
                            <h2 className="text-gray-500 text-lg line-through ">${((product.price)/(1-(product.discountPercentage/100))).toFixed(2)}</h2>
                            <h2 className=" text-lg font-semibold">{product.discountPercentage}%</h2>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-3">
                        <div className="flex items-center justify-around border border-black bg-slate-300 w-[10%] h-6 rounded-md">
                            <h1 className=" font-semibold text-sm">{product.availabilityStatus}</h1>
                        </div>
                        <div className="flex items-center gap-2 border border-black bg-slate-300 w-[19%] h-6 rounded-md">
                            <i class="ri-shield-star-fill ml-2"></i>
                            <h1 className=" font-semibold text-sm mb-1">{product.warrantyInformation}</h1>
                        </div>
                    </div>

                    <div className="flex w-[90%] gap-9 mt-5">
                        <h2 className="w-[30%] text-lg font-semibold">Description :</h2>
                        <p>{product.description}</p>
                    </div>

                    <div className="w-[90%] border border-black mt-5 rounded-md">
                        <h2 className="w-[100%] text-2xl font-semibold px-2 py-2 border-b border-black">
                            About
                        </h2>
                        <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
                            <h2 className="w-[20%]">Brand :</h2>
                            <p>{product.brand}</p>
                        </div>
                        <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
                            <h2 className="w-[20%]">Model no. :</h2>
                            <p>{product.sku}</p>
                        </div>
                        <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
                            <h2 className="w-[20%]">Height :</h2>
                            <p>{product.dimensions.height} cm</p>
                        </div>
                        <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
                            <h2 className="w-[20%]">Width :</h2>
                            <p>{product.dimensions.width} cm</p>
                        </div>
                        <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
                            <h2 className="w-[20%]">Depth :</h2>
                            <p>{product.dimensions.depth} cm</p>
                        </div>
                        <div className="flex w-[90%] px-2 gap-3 mt-4 items-start">
                            <h2 className="w-[20%]">Stock Available :</h2>
                            <p>{product.stock}</p>
                        </div>
                        <div className="flex w-[90%] px-2 gap-3 mt-4 mb-4 items-start">
                            <h2 className="w-[20%]">Shipping :</h2>
                            <p>{product.shippingInformation}</p>
                        </div>
                    </div>

                    <div className="w-[90%] border border-black mt-5 rounded-md">
                        <h2 className="w-[100%] text-2xl font-semibold px-2 py-2 border-b border-black">
                            Ratings & Reviews
                        </h2>


                        {/* reviews div  */}
                        {product.reviews.map((val, ind)=>{
                            return(<div className=" px-2 py-2 border-b border-black">
                                <div className="flex gap-4 items-center  ">
                                    <div className="flex items-center bg-green-200 border-2 border-green-600 w-12 justify-around rounded-md font-semibold px-1">
                                        <h6>{val.rating}</h6>
                                        <i class="ri-star-s-fill"></i>
                                    </div>
                                    <h2 className="text-md font-medium ">{val.reviewerName}</h2>
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
