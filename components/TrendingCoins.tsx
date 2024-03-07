"use client";

import { cn } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function TrendingCoins() {
  const [trendingcoin, setTrendingCoin] = useState<any>([]);
  async function getTrendingCoin() {
    const response = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
    // console.log(response.data.coins);
    const trendingCoins = await response.data.coins;
    const top3coins = await trendingCoins.slice(0, 3);
    setTrendingCoin(top3coins);
  }

  function absoluteValueWithTwoDecimalPoints(number: Number) {
    return Math.abs(parseFloat(number?.toFixed(2)));
  }
  useEffect(() => {
    getTrendingCoin();
  }, []);
  return (
    <div className="w-[426px] h-[225px] flex flex-col mt-5 p-5 bg-white border rounded-lg ">
      <p className="font-semibold text-2xl mb-5">Trending Coins (24h)</p>
      <div className="flex flex-col gap-4">
        {trendingcoin &&
          trendingcoin.map((coin: any) => {
            let profit = coin.item.data.price_change_percentage_24h.usd >= 0;

            return (
              <div key={coin.item.coin_id} className="flex justify-between items-center ">
                <div className="flex justify-start items-center">
                  <Image
                    src={coin.item.small}
                    alt="logo"
                    width={24}
                    height={24}
                    className="rounded-full mr-1"
                  />
                  <p className="text-base font-medium">{coin.item.name}</p>
                </div>
                <p
                  className={
                    (cn(" w-fit h-fit p-1 border rounded-lg text-base font-medium"),
                    profit
                      ? "bg-green-200 border-green-300 text-green-500"
                      : "bg-red-200 border-red-300 text-red-500")
                  }
                >
                  {profit ? "⏶" : "⏷"}
                  {absoluteValueWithTwoDecimalPoints(
                    coin.item.data.price_change_percentage_24h.usd
                  )}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TrendingCoins;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function TrendingCoins() {
//   const [trendingcoins, setTrendingCoins] = useState<any>([]);
//   async function getTrendingCoin() {
//     const response = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
//     console.log(response);
//   }

//   useEffect(() => {
//     getTrendingCoin();
//   }, []);
//   return <div>TrendingCoins</div>;
// }

// export default TrendingCoins;
