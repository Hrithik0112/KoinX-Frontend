import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function CTA() {
  return (
    <div className="w-[426px] h-[515px] flex flex-col justify-center items-center  text-white bg-[#0052FE] border rounded-3xl">
      <section className="w-[327px] h-[182px] mb-5 ">
        <p className="w-[268px] h-20 text-2xl font-bold text-center ">
          Get Started with KoinX for FREE
        </p>
        <p className="w-[327px] h-16 text-sm font-medium text-center">
          With our range of features that you can equip for free, KoinX allows you to be more
          educated and aware of your tax reports.
        </p>
      </section>
      <Image src="/Frame.svg" alt="frame" width={178} height={166} className="mb-5" />
      <Button className="bg-white text-black font-bold w-fit">Get Started or FREE &rarr;</Button>
    </div>
  );
}

export default CTA;
