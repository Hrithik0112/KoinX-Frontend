"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TradingViewWidget from "./TradingViewWidget";
import {
  BITCOIN_API,
  SIMPLE_PRICE_API,
  absoluteValueWithTwoDecimalPoints,
  cn,
  numberWithCommasINR,
  numberWithCommasUSD,
} from "@/lib/utils";

function CoinDetails() {
  const [coins, setCoins] = useState<any>([]);
  const [coinDetails, setCoinDetails] = useState<any>("");
  async function getCoinData() {
    const response = await axios.get(SIMPLE_PRICE_API);
    setCoins(response.data?.bitcoin);
  }
  async function getCoinDetails() {
    const response = await axios.get(BITCOIN_API);
    // console.log(response);
    setCoinDetails(response.data);
  }

  useEffect(() => {
    getCoinDetails();
    getCoinData();
  }, []);

  let profit = coins.usd_24h_change >= 0;
  return (
    <div className="w-[881px] h-[700px] bg-white rounded-xl drop-shadow-lg ">
      <div className="m-4 flex ">
        <p className="text-2xll font-semibold flex justify-center items-center mr-5">
          <Image
            src={coinDetails?.image?.small}
            alt="bitcoinlogo"
            width={36}
            height={36}
            className="mr-1"
          />
          {coinDetails.name}
          <span className="uppercase text-sm font-medium ml-2">{coinDetails.symbol}</span>
        </p>
        <p className="bg-gray-500 text-white w-fit h-fit py-1 px-2 mt-1 text-sm border border-gray-500 rounded-lg">
          Rank #{coinDetails.market_cap_rank}
        </p>
      </div>
      <div className="mx-4 h-[574px]">
        {/* price */}
        <div className="flex">
          <div className="flex flex-col mr-5">
            <p className="font-bold text-4xl">${numberWithCommasUSD(coins.usd)}</p>
            <p className="font-medium text-lg">₹{numberWithCommasINR(coins.inr)}</p>
          </div>
          <div className="flex items-start justify-start">
            <p
              className={
                (cn("mr-3 w-fit h-fit p-1 border rounded-lg  text-base"),
                profit
                  ? "bg-green-300 border-green-300 text-green-600"
                  : "bg-red-300 border-red-300 text-red-600")
              }
            >
              {profit ? "⏶" : "⏷"}
              {absoluteValueWithTwoDecimalPoints(coins?.usd_24h_change)}%
            </p>
            <p className="text-xs mt-1 ml-2">(24H)</p>
          </div>
        </div>
        {/* line */}
        <div className="border-b border-slate-800 my-5"></div>
        {/* chart */}
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default CoinDetails;
