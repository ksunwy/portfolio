'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ isLoaded }) => {
  const preloaderRef = useRef(null);
  const barRef = useRef(null);
  const [canHide, setCanHide] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { scaleX: 0, borderRadius: '30px' },
      {
        scaleX: 1,
        borderRadius: '50px',
        duration: 1.5,
        ease: 'power1.inOut',
        transformOrigin: 'left',
      }
    );

    const timer = setTimeout(() => {
      setCanHide(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded && canHide) {
      gsap.to(preloaderRef.current, {
        y: '-100%',
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [isLoaded, canHide]);

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 w-full h-screen z-[999] bg-[#FFF9EF] flex items-center justify-center"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-44 rounded-[50px] w-[40%] lg:w-[30%] border-[4px] lg:border-[8px] border-solid border-[#89B0EA] bg-transparent"></div>
      <div
        ref={barRef}
        className="h-20 w-1/4 bg-[#89B0EA]"
        style={{
          transform: 'scaleX(0)',
          borderRadius: '0px',
        }}
      />
    </div>
  );
};

export default Preloader;
