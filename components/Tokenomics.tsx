import Image from "next/image";
import React from "react";

function Tokenomics() {
  return (
    <div className="w-[881px] h-[539px] px-5  mt-5 bg-white rounded-xl drop-shadow-lg">
      <p className="text-2xl font-semibold mt-4 mb-10">Tokenommics</p>
      <div className="w-[832px] h-[402px] ">
        <div className="flex flex-col">
          <p className="text-xl font-semibold flex ">Initial Distribution</p>
          <div className="w-[810px] h-[210px] flex">
            <Image src="/pie.svg" alt="logo" width={179} height={179} className="mr-10" />
            <Image src="/piedetails.svg" alt="logo" width={216} height={111} />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc
          dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus
          orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa
          habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
          aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem
          posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet
          odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
}

export default Tokenomics;
