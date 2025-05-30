"use client";

import React from "react";

import { logoSVG, supportSVG } from "@/assets/SVGs";
import Link from "../../node_modules/next/link";

const Navigation = () => {
  const handleSessionClear = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="flex lg:flex-col justify-between h-fit p-5 lg:px-0 lg:py-7 lg:items-center border-b lg:border-r lg:h-screen">
      <div
        onClick={handleSessionClear}
        className="basis-full flex justify-center items-center lg:basis-0 lg:block ml-12 lg:ml-0"
      >
        <button className="flex justify-center lg:w-full">{logoSVG}</button>
        <p className="font-bold">Aura AI</p>
      </div>
      <div>
        <Link href="/feedback">{supportSVG}</Link>
      </div>
    </div>
  );
};

export default Navigation;
