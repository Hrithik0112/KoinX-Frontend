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

export function CoinsCarousal() {
  const [trendingcoin, setTrendingCoin] = React.useState<any>([]);
  async function getTrendingCoin() {
    const response = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
    // console.log(response.data.coins);
    const trendingCoins = await response.data.coins;
    setTrendingCoin(trendingCoins);
  }

  function formatToTwoDecimalPoints(number: Number) {
    return parseFloat(number?.toFixed(2));
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
          trendingcoin.map((coin: any) => (
            <CarouselItem
              key={coin.item.coin_id}
              className="md:basis-1/5 lg:basis-1/5 ml-5 border border-black rounded-lg px-4 py-2 flex flex-col"
            >
              <div className="w-[262px] h-[160px] px-4 py-2 flex flex-col ">
                <div>
                  <div className="flex">
                    <Image src={coin.item.small} alt="logo" width={26} height={26} />
                    <p>{coin.item.name}</p>
                    <p>
                      {formatToTwoDecimalPoints(coin.item?.data.price_change_percentage_24h.usd)}
                    </p>
                  </div>
                  <div>
                    <p>{coin.item?.data?.price}</p>
                  </div>
                </div>
                <div className="w-[200px] h-[60px]">
                  <Image src={coin.item.data.sparkline} alt="sparkline" width={200} height={60} />
                </div>
              </div>
            </CarouselItem>
          ))}
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
