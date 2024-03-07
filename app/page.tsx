"use client";
import AboutCoin from "@/components/Left-Section/AboutCoin";
import CTA from "@/components/Right-Section/CTA";
import CoinDetailTabs from "@/components/Left-Section/CoinDetailTabs";
import CoinDetails from "@/components/Left-Section/CoinDetails";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Performence from "@/components/Left-Section/Performence";
import Sentiment from "@/components/Left-Section/Sentiment";
import Team from "@/components/Left-Section/Team";
import Tokenomics from "@/components/Left-Section/Tokenomics";
import TrendingCoins from "@/components/Right-Section/TrendingCoins";

export default function Home() {
  return (
    <div className="w-full bg-[#EFF2F5] " suppressHydrationWarning={true}>
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
