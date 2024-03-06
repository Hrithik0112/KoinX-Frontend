import Image from "next/image";
import TradingViewWidget from "./TradingView";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Temp() {
  const [coins, setCoins] = useState<any>([]);
  const [trendingcoin, setTrendingCoin] = useState<any>([]);
  async function getCoinData() {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`
    );
    setCoins(response.data?.bitcoin);
  }
  async function getTrendingCoin() {
    const response = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
    // console.log(response.data.coins);
    const trendingCoins = await response.data.coins;
    const top3coins = await trendingCoins.slice(0, 3);
    setTrendingCoin(top3coins);
  }
  useEffect(() => {
    getCoinData();
    getTrendingCoin();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <p>Welcome to reality</p>
      <Button>Click me!</Button>
      <div className="flex flex-col ">
        <p className="text-4xl">Price of 1 BTC (in usd) - {coins.usd}</p>
        <p className="text-2xl">Price of 1 BTC (in inr) - {coins.inr}</p>
        <p className="text-xl">change in price - {coins.usd_24h_change}</p>
      </div>
      <div className="w-[540px] h-96">{/* <TradingViewWidget /> */}</div>
      <div>
        <Button>Get trending Coin</Button>
        {trendingcoin &&
          trendingcoin.map((coin: any) => (
            <div key={coin.item.coin_id}>
              <p>{coin.item.name}</p>
              <p>{coin.item.data.price}</p>
              <Image src={coin.item.data.sparkline} width={50} height={50} alt="grapghimage" />
            </div>
          ))}
      </div>
    </main>
  );
}
