"use client";
import Image from "next/image";
import React from "react";

function Sentiment() {
  return (
    <div className="w-[881px] h-[556px] mt-5 bg-white rounded-xl drop-shadow-lg">
      {/* all details */}
      <div className="h-[286px]">
        <p className="text-2xl font-semibold px-5 mt-5">Sentiment</p>
        <p className="text-xl font-semibold flex px-5 mt-5">
          Key Events
          <Image src="/info.svg" alt="info" width={20} height={20} className="ml-1" />
        </p>
        {/* list */}
        <div className="flex h-[206px] justify-center mt-5 px-5">
          <Image src="Item 1.svg" alt="info" width={440} height={204} />
          <Image src="Item 2.svg" alt="info" width={440} height={204} />
        </div>
      </div>
      {/* analysis */}
      <div className="h-[186px] w-[710px] mt-8">
        <p className="text-xl font-semibold flex px-5">
          Analyst Estimates
          <Image src="/info.svg" alt="info" width={20} height={20} className="ml-1" />
        </p>
        <div className="h-[120px] flex px-5 mt-5 ">
          <div className="w-[156px]">
            <div className="w-[116px] bg-[#ebf9f4] text-green-500 rounded-full p-11 flex justify-center items-center text-3xl font-medium">
              76%
            </div>
          </div>
          <div className="w-[553px]">
            <div className="h-9 flex items-center">
              <p className="mr-2">Buy</p>
              <div className="w-[349px] h-2 bg-green-500 mx-2 rounded-xl"></div>
              <p>76%</p>
            </div>
            <div className="h-9 flex items-center">
              <p className="mr-2">Hold</p>
              <div className="w-[35px] h-2 bg-gray-500 mx-2 rounded-xl"></div>
              <p>8%</p>
            </div>
            <div className="h-9 flex items-center">
              <p className="mr-2">Sell</p>
              <div className="w-[66px] h-2 bg-red-500 mx-2 rounded-xl"></div>
              <p>16%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
