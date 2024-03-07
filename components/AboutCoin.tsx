"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function AboutCoin() {
  return (
    <div className="w-[881px] h-[995px] px-5 mt-10 bg-white rounded-xl drop-shadow-lg">
      {/* heading */}
      <div className="text-2xl font-semibold my-2">About Bitcoin</div>
      {/* content */}
      <div className="flex flex-col w-[830px] ">
        {/* content 1 */}
        <div className="h-28 my-2">
          <p className="font-bold mb-4">What is Bitcoin?</p>
          <p>
            Bitcoins price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is
            +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of
            $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating
            supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        <div className="h-[1px] bg-gray-950 mt-2"></div>
        {/* content 2 */}
        <div className="h-[396px]">
          <p className="font-bold mb-3 mt-2">Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique
            pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse
            enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
            fermentum sapien morbi sodales odio sed rhoncus.
            <div className="my-4"></div>
            Diam praesent massa dapibus magnaaliquam a dictumst volutpat. Egestas vitae pellentesque
            auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio
            cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc
            praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
            phasellus. Integer pellentesque enim convallis ultricies at.
            <div className="my-4"></div>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis
            duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum
            potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat
            in eget. Ullamcorper dui
          </p>
        </div>
        <div className="h-[1px] bg-gray-950 mt-2"></div>
        {/* content 3 */}
        <div className="h-[206px]">
          <p className="text-2xl font-semibold my-2">Already Holding Bitcoin</p>
          <div className="w-[807px] h-[151px] flex items-center justify-around">
            <div className="flex p-2 rounded-lg bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] ">
              <Image src="/img1.svg" alt="image" width={126} height={126} />
              <div className="flex flex-col w-[195px] h-[104px] ml-4 my-auto">
                <p className="text-white font-bold">
                  Calculate Your <br /> Profits
                </p>
                <Button className="bg-white text-black w-fit">Check Now -</Button>
              </div>
            </div>
            <div className="flex p-2 rounded-lg bg-gradient-to-br from-[#FF9865] to-[#EF3031] ml-10">
              <Image src="/img1.svg" alt="image" width={126} height={126} />
              <div className="flex flex-col w-[195px] h-[104px] ml-4 my-auto ">
                <p className="text-white font-bold">Calculate Your Tax liability</p>
                <Button className="bg-white text-black w-fit">Check Now -</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-950 mt-2"></div>
        {/* content 4 */}
        <div className="h-[130px] mt-4">
          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis
            duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum
            potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat
            in eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCoin;
