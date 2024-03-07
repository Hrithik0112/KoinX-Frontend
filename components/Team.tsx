"use client";

import Image from "next/image";
import React from "react";

function Team() {
  return (
    <div className="w-[881px] h-[776px] flex flex-col px-5  mt-5 bg-white rounded-xl mb-10 drop-shadow-lg">
      <p className="text-2xl font-semibold mt-4 mb-10">Team</p>
      <p className="w-[830px] h-[52px] mb-5">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi
        integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      {/* content */}
      <div className="w-[821px] h-[177px] flex items-center bg-[#e8f4fd] rounded-lg mb-5">
        <div className="w-[128px] h-[155px] flex flex-col px-2 items-center">
          <Image src="/human3.svg" alt="human" width={94} height={100} className="rounded-lg" />
          <p className="text-base font-bold mt-2">John Smith</p>
          <p className="text-xs">Designation here</p>
        </div>
        <p className="text-sm w-[646px] h-[110px]">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero
          hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus
          arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id
          facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
          ipsum. Malesuada etiam mi gravida praesent interdu
        </p>
      </div>

      <div className="w-[821px] h-[177px] flex items-center bg-[#e8f4fd] rounded-lg mb-5">
        <div className="w-[128px] h-[155px] flex flex-col px-2 items-center">
          <Image src="/human1.svg" alt="human" width={94} height={100} className="rounded-lg" />
          <p className="text-[15px] font-bold mt-2">Ellina Williams</p>
          <p className="text-xs">Designation here</p>
        </div>
        <p className="text-sm w-[646px] h-[110px]">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero
          hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus
          arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id
          facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
          ipsum. Malesuada etiam mi gravida praesent interdu
        </p>
      </div>

      <div className="w-[821px] h-[177px] flex items-center bg-[#e8f4fd] rounded-lg mb-5">
        <div className="w-[128px] h-[155px] flex flex-col px-2 items-center">
          <Image src="/human2.svg" alt="human" width={94} height={100} className="rounded-lg" />
          <p className="text-base font-bold mt-2">John Smith</p>
          <p className="text-xs">Designation here</p>
        </div>
        <p className="text-sm w-[646px] h-[110px]">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero
          hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus
          arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id
          facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
          ipsum. Malesuada etiam mi gravida praesent interdu
        </p>
      </div>
    </div>
  );
}

export default Team;
