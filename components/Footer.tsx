"use client";

import React from "react";
import { CoinsCarousal } from "./CoinsCaraousal";

function Footer() {
  return (
    <div className="max-w-full h-[628px] p-10 bg-white text-black ">
      <div className="flex flex-col mb-5 w-full p-2 ">
        {/* you may also like */}
        <div className="mb-5">
          <div className="text-2xl font-semibold mb-5">You May Also Like</div>
          <div className="flex justify-center items-center ms-auto">
            <CoinsCarousal />
          </div>
        </div>
        {/* trending coins */}
        <div className="mb-5">
          <div className="text-2xl font-semibold mb-5">Trending Coins</div>
          <div className="flex justify-center items-center ms-auto">
            <CoinsCarousal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
