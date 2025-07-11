import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

export function remToPx(rem) {
  if (typeof window === 'undefined') {
    return Math.floor(rem * 16).toString();
  }
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return Math.floor(rem * rootFontSize).toString();
}

const header = () => {
  const [width, setWidth] = useState(162); 
  const [height, setHeight] = useState(38);

  useEffect(() => {
    setWidth(remToPx(10.125));
    setHeight(remToPx(2.375));
  }, []);
  return (
    <header className="fixed top-0 left-0 flex flex-row items-center justify-between w-full px-12 py-10 z-10 header-bg">
      <Link href="/" className="w-12 h-12">
        <svg width="100%" height="100%" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.38718 47.8323C6.4737 48.8755 9.36917 49.0135 11.4814 48.6669C13.5936 48.3202 17.1671 47.7176 19.4102 46.163C32.0743 37.386 10.4875 -9.68505 6.36401 6.2772C3.5526 17.1604 -1.06239 34.247 10.1977 34.6318C23.6409 35.0913 32.7594 -6.09243 45.3245 6.2772C56.2257 17.0086 26.8641 32.0003 35.8421 44.3113C36.482 45.1887 37.7578 46.2021 38.8295 46.3788C41.3187 46.789 42.851 45.345 42.851 45.345" stroke="#6F96D0" strokeWidth="6" />
        </svg>
      </Link>
      <a target="_blank" href="https://t.me/ksunnw" className="px-8 py-6 w-52 bg-[#89B0EA] rounded-lg flex items-center justify-center">
        <Image src={"/img/reach_me.svg"} alt="Reach me" width={width} height={height} />
      </a>
    </header>
  )
}

export default header
