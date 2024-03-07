"use client";
import AboutCoin from "@/components/AboutCoin";
import CTA from "@/components/CTA";
import CoinDetailTabs from "@/components/CoinDetailTabs";
import CoinDetails from "@/components/CoinDetails";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Performence from "@/components/Performence";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import TrendingCoins from "@/components/TrendingCoins";

export default function Home() {
  return (
    <div className="w-full bg-[#EFF2F5] ">
      {/* bg-[#dfdfe2] */}
      <Navbar />
      <div className="w-[1328px] grid grid-cols-3 gap-5 mt-14 mx-auto">
        {/* left section */}
        <div className="col-span-2 flex flex-col justify-center items-center text-black">
          <CoinDetails />
          <CoinDetailTabs />
          <Performence />
          <Sentiment />
          <AboutCoin />
          <Tokenomics />
          <Team />
        </div>
        {/* right section */}
        <div className="col-span-1 ">
          <CTA />
          <TrendingCoins />
        </div>
      </div>
      <Footer />
    </div>
  );
}
