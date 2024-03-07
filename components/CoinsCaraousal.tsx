"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import Image from "next/image";
import { TRENDING_COINS_API, cn, formatToTwoDecimalPoints } from "@/lib/utils";

export function CoinsCarousal() {
  const [trendingcoin, setTrendingCoin] = React.useState<any>([]);
  async function getTrendingCoin() {
    const response = await axios.get(TRENDING_COINS_API);
    const trendingCoins = await response.data.coins;
    setTrendingCoin(trendingCoins);
  }

  React.useEffect(() => {
    getTrendingCoin();
  }, []);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-2xl"
    >
      <CarouselContent>
        {trendingcoin &&
          trendingcoin.map((coin: any) => {
            let profit = coin.item?.data.price_change_percentage_24h.usd >= 0;
            return (
              <CarouselItem
                key={coin.item.coin_id}
                className="md:basis-1/5 lg:basis-1/5 ml-5 border border-black rounded-lg px-4 py-2 flex flex-col"
              >
                <div className="w-[262px] h-[160px] px-4 py-2 flex flex-col ">
                  <div>
                    <div className="flex">
                      <Image src={coin.item.small} alt="logo" width={26} height={26} />
                      <p className="text-base ml-1">{coin.item.symbol}</p>
                      <p
                        className={
                          (cn(" w-fit h-fit p-1 border rounded-lg   text-xs"),
                          profit
                            ? "bg-green-200 border-green-300 text-green-500"
                            : "bg-red-200 border-red-300 text-red-500")
                        }
                      >
                        {profit && "+"}
                        {formatToTwoDecimalPoints(coin.item?.data.price_change_percentage_24h.usd)}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-xl">{coin.item?.data?.price}</p>
                    </div>
                  </div>
                  <div className="w-[200px] h-[60px]">
                    <Image src={coin.item.data.sparkline} alt="sparkline" width={200} height={60} />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
