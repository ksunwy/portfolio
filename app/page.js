'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero";
import Slider from '@/components/Slider';
import About from '@/components/About';
import Form from '@/components/Form';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


export default function Home() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
      });

        gsap.to(aboutRef.current, {
        y: -200, 
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom", 
          end: "bottom top",
          scrub: true, 
        }
      });
    }
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <Header />
      <div ref={contentRef} id="smooth-content">
        <main className="flex flex-col min-h-screen text-center">
          <Hero />
          <Slider />
          <About aboutRef={aboutRef} />
          <Form />
        </main>
      </div>
    </div>
  );
}
