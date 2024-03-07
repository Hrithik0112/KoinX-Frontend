"use client";
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
                  <div className="text-black py-2 px-4 rounded-lg text-sm font-medium">
                    48637.83
                  </div>
                  <p className="absolute text-black text-4xl -translate-y-14 translate-x-6">
                    &#9206;
                  </p>
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
          <div className="h-[270px]  w-[820px] flex justify-center mt-5">
            <div className="flex flex-col w-[383PX] h-[270px] mr-10">
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-sm font-medium">Bitcoin Price</p>
                <p className="text-sm font-semibold shadow-lg">$16,815.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-sm font-medium">24h Low / 24h High</p>
                <p className="text-sm font-semibold shadow-lg"> $16,815.46 / $16,815.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-sm font-medium">7d Low / 7d High</p>
                <p className="text-sm font-semibold shadow-lg">$16,815.46 / $16,815.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-sm font-medium">Trading Volume</p>
                <p className="text-sm font-semibold shadow-lg">$23,249,222.46</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-sm font-medium">Market Cap Rank</p>
                <p className="text-sm font-semibold shadow-lg">#1</p>
              </div>
            </div>
            <div className="flex flex-col w-[383PX] h-[270px]">
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-sm font-medium">Market Cap</p>
                <p className="text-sm font-semibold shadow-lg">$323,507,290,047</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-sm font-medium">Market Cap Dominance</p>
                <p className="text-sm font-semibold shadow-lg"> 38.343%</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-sm font-medium">Voulume / Market Cap</p>
                <p className="text-sm font-semibold shadow-lg">0.0718</p>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-sm font-medium">All-Time High</p>
                <div className="flex flex-col text-sm">
                  <p className="ml-auto text-sm font-semibold shadow-lg">
                    $69,044.77 <span className="text-red-500">-75.6%</span>
                  </p>
                  <p className="text-[11px]">Nov 10, 2021 (over 1 years ago)</p>
                </div>
              </div>
              <div className="w-[343px] h-[54px] flex justify-between items-center border-b-2 border-black">
                <p className="text-base font-medium">All-Time Low</p>
                <div className="flex flex-col text-sm">
                  <p className="ml-auto text-sm font-semibold shadow-lg">
                    $67.81 <span className="text-green-500">24729.1%</span>
                  </p>
                  <p className="text-[11px]">Jul 06, 2013 (over 9 years ago)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performence;
