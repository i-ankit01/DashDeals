import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const {id} = useParams()
  return (
    <>
      <div className="flex flex-col h-screen overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full z-10 ">
          <Navbar />
        </div>
        <div className="w-full overflow-y-auto">
        <Product id={id} />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
