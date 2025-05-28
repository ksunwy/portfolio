'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Form from "@/components/Form";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
      });
    }
  }, []);
  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        <Header />
        <main className="flex flex-col min-h-screen text-center bg-[linear-gradient(106.84deg,#E7F2FF_3.07%,#E4F9F0_48.93%,#EFE6FF_94.8%)]">
          <Hero />
          <Projects />
          <Form />
        </main>
      </div>
    </div>
  );
}
