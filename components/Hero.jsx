'use client';

import { Suspense, useState } from "react";
import dynamic from 'next/dynamic';
import ArrowDown from '@/components/Icons/ArrowDown';
import useWidth from "@/hooks/useWidth";
import Preloader from "@/components/Preloader";
import SplineComponent from '@splinetool/react-spline';
import FallingText from "./FallingText";

const Spline = dynamic(() => Promise.resolve(SplineComponent), { ssr: false });

const Hero = () => {
  const { isMobile } = useWidth();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleScroll = () => {
    const scrollPosition = isMobile ? 500 : 1000;
    window.scrollTo(0, scrollPosition);
  };

  return (
    <div className="relative w-[100dvw] h-[100dvh]">
      {/* <Preloader isLoaded={true} /> */}
      <FallingText />
      <h1 className="absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[#89B0EA] flex flex-col items-center justify-center font-bold text-[120px]">
        Hello, I'm
      </h1>
      <h2 className="absolute top-[58%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[60px] font-bold text-nowrap text-[#89B0EA]">Frontend developer</h2>

      {/* <div className="w-full h-full pointer-events-none">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            scene={isMobile ? "/sceneMobile.splinecode" : "/scene.splinecode"}
            onLoad={() => setIsLoaded(true)}
          />
        </Suspense>
      </div> */}

      {/* <button
        onClick={handleScroll}
        className="absolute bottom-[4.875rem] left-1/2 -translate-x-1/2 z-20 cursor-pointer w-fit h-fit"
      >
        <ArrowDown className="w-[5.375rem] h-[5.375rem]" />
      </button> */}
    </div>
  );
};

export default Hero;
