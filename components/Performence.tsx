import React from "react";
import Image from "next/image";

function Performence() {
  return (
    <div className="w-[881px] h-[632px] px-5 pt-3 pb-6  bg-white rounded-xl drop-shadow-lg">
      <div>
        {/* heading */}
        <p className="text-2xl font-semibold my-2">Performence</p>
        {/* slider */}
        <div className="h-44">
          <div className="h-[71px] flex items-center">
            <div className="flex flex-col w-28 justify-around items-center">
              <p className="text-xs mb-2">Today's Low</p>
              <p className="text-sm font-medium">46930.22</p>
            </div>
            <div className="relative">
              <div className="w-[598px] h-[44px] flex justify-center items-center px-2">
                <div className="h-[6px] w-[582px] bg-gradient-to-r from-red-500 to-green-500"></div>
              </div>
              <div className="absolute bottom-0 translate-y-10 right-0 mr-4 mb-4">
                <div className="relative">
                  <div className=" text-white py-2 px-4 rounded-lg shadow-lg">48637.83</div>
                  <div className="absolute bg-black top-0 right-0 w-0 h-0 border-t-4 border-r-4 border-b-transparent border-l-transparent"></div>

                  {/* <div className=" absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-b-[75px] border-b-black border-r-[50px] border-r-black"></div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-28 justify-around items-center">
              <p className="text-xs mb-2">Today's High</p>
              <p className="text-sm font-medium">49343.83</p>
            </div>
          </div>
          <div className="h-[71px] flex items-center">
            <div className="flex flex-col w-28 justify-around items-center">
              <p className="text-xs mb-2">52W Low</p>
              <p className="text-sm font-medium">16930.22</p>
            </div>

            <div className="w-[598px] h-[44px] flex justify-center items-center px-2">
              <div className="h-[6px] w-[582px] bg-gradient-to-r from-red-500 to-green-500"></div>
            </div>

            <div className="flex flex-col w-28 justify-around items-center">
              <p className="text-xs mb-2">52w High</p>
              <p className="text-sm font-medium">49743.83</p>
            </div>
          </div>
        </div>

        {/* details */}

        <div className="w-[820px] h-[306px] ">
          <p className="text-xl font-semibold flex">
            Fundementals
            <Image src="/info.svg" alt="info" width={20} height={20} className="ml-1" />
          </p>
          <div className="h-[270px]  w-[820px] flex text-white justify-center">
            <div className="flex flex-col w-[383PX] h-[270px] mr-10">
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>Bitcoin Price</p>
                <p>$16,815.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>24h Low / 24h High</p>
                <p> $16,815.46 / $16,815.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>7d Low / 7d High</p>
                <p>$16,815.46 / $16,815.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>Trading Volume</p>
                <p>$23,249,222.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>Market Cap Rank</p>
                <p>#1</p>
              </div>
            </div>
            <div className="flex flex-col w-[383PX] h-[270px]">
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>Bitcoin Price</p>
                <p>$16,815.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>24h Low / 24h High</p>
                <p> $16,815.46 / $16,815.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>7d Low / 7d High</p>
                <p>$16,815.46 / $16,815.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>Trading Volume</p>
                <p>$23,249,222.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p>Market Cap Rank</p>
                <p>#1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performence;