"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="max-w-full h-20 flex justify-between px-8 bg-white drop-shadow-lg">
      <Image src="/Logo.svg" alt="logo" width={96} height={24} />
      <div className="flex justify-center items-center">
        <p className="mr-8 font-bold">Crypto tax</p>
        <p className="mr-8 font-bold">Free Tools</p>
        <p className="mr-8 font-bold">Resource Center</p>
        <Button className="bg-blue-600 hover:bg-blue-700 hover:text-white">Get Started</Button>
      </div>
    </div>
  );
}

export default Navbar;
