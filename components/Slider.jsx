import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import useWidth from "@/hooks/useWidth";

const initialImages = [
  { id: 5, image: "/img/5.jpg" },
  { id: 9, image: "/img/8.jpg" },
  { id: 8, image: "/img/9.jpg" },
  { id: 4, image: "/img/4.jpg" },
  { id: 3, image: "/img/3.jpg" },
  { id: 2, image: "/img/2.jpg" },
  { id: 1, image: "/img/1.jpg" },
];

const initialMobileImages = [
  { id: 1, image: "/img/1.jpg" },
  { id: 2, image: "/img/2.jpg" },
  { id: 3, image: "/img/3.jpg" },
  { id: 4, image: "/img/4.jpg" },
  { id: 5, image: "/img/5.jpg" },
  { id: 8, image: "/img/8.jpg" },
  { id: 9, image: "/img/9.jpg" },
];

const Slider = () => {
  const { isMobile } = useWidth();
  const [cards, setCards] = useState(isMobile ? initialMobileImages : initialImages);
  const cardRefs = useRef({});

  useEffect(() => {
    setCards(isMobile ? initialMobileImages : initialImages);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const slider = document.querySelector(".slider");
      const initialTransform = `translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)`;
      const zOffset = scrollPos * 0.5;
      if (slider) {
        slider.style.transform = `${initialTransform} translateY(${zOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseOver = (id) => {
    const el = cardRefs.current[id];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      left: "15%",
      zIndex: id,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseOut = (id) => {
    const el = cardRefs.current[id];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      left: "0%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div className="w-[100dvw] h-[100dvh]">
      <div className="slider lg:mt-[45%] mt-[150%]">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            ref={(el) => (cardRefs.current[card.id] = el)}
            onMouseOver={() => handleMouseOver(card.id)}
            onMouseOut={() => handleMouseOut(card.id)}
            style={{ position: "relative", left: "0%", zIndex: card.id }}
          >
            <Image src={card.image} alt={`img${card.id}`} width={400} height={400} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
