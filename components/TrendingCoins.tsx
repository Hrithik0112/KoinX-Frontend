"use client";

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

  function formatToTwoDecimalPoints(number: Number) {
    return parseFloat(number.toFixed(2));
  }
  useEffect(() => {
    getTrendingCoin();
  }, []);
  return (
    <div className="w-[426px] h-[225px] flex flex-col mt-5 p-5 bg-white border rounded-lg ">
      <p className="font-semibold text-2xl mb-5">Trending Coins (24h)</p>
      <div className="flex flex-col gap-4">
        {trendingcoin &&
          trendingcoin.map((coin: any) => (
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
              <p>{formatToTwoDecimalPoints(coin.item.data.price_change_percentage_24h.usd)}</p>
            </div>
          ))}
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
