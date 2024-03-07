"use client";
import Image from "next/image";
import React from "react";

function Sentiment() {
  return (
    <div className="w-[881px] h-[556px] mt-5 bg-white rounded-xl drop-shadow-lg">
      {/* all details */}
      <div className="h-[286px]">
        <p className="text-2xl font-semibold my-2 px-5">Sentiment</p>
        <p className="text-xl font-semibold flex px-5">
          Key Events
          <Image src="/info.svg" alt="info" width={20} height={20} className="ml-1" />
        </p>
        {/* list */}
        <div className="flex h-[206px] justify-center mt-2">
          <Image src="Item 1.svg" alt="info" width={440} height={204} />
          <Image src="Item 2.svg" alt="info" width={440} height={204} />
        </div>
      </div>
      {/* analysis */}
      <div className="h-[186px] w-[710px]">
        <p className="text-xl font-semibold flex px-5">
          Analyst Estimates
          <Image src="/info.svg" alt="info" width={20} height={20} className="ml-1" />
        </p>
        <div className="h-[120px] flex px-5 mt-5 ">
          <div className="w-[156px]">
            <div className="w-[116px] bg-green-200 text-green-500 rounded-full p-12 flex justify-center items-center">
              76%
            </div>
          </div>
          <div className="w-[553px]">
            <div className="h-9 flex items-center">
              <p>Buy</p>
              <div className="w-[349px] h-2 bg-green-700 mx-2 rounded-xl"></div>
              <p>70%</p>
            </div>
            <div className="h-9 flex items-center">
              <p>Hold</p>
              <div className="w-[35px] h-2 bg-gray-700 mx-2 rounded-xl"></div>
              <p>8%</p>
            </div>
            <div className="h-9 flex items-center">
              <p>Sell</p>
              <div className="w-[66px] h-2 bg-red-700 mx-2 rounded-xl"></div>
              <p>16%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
