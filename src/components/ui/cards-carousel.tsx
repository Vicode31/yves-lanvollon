"use client";
import { cn } from "@/lib/utils";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React, { createContext, useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";

interface CarouselProps {
  items: {
    quote: string;
    name: string;
    pdp: string;
    source?: "google" | "resalib";
  }[];
  initialScroll?: number;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  // ✅ Fonction utilitaire pour choisir l'image et la taille
  const getLogo = (source?: "google" | "resalib") => {
    if (source === "resalib") {
      return {
        src: "/logo-resalib.png",
        alt: "Logo Resalib",
        width: 40,
        height: 40,
      };
    }
    return {
      src: "/google-color.png",
      alt: "Logo Google",
      width: 70,
      height: 35,
    };
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full z-10">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <ul
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item) => {
              const logo = getLogo(item.source); // ✅ ici proprement dans map

              return (
                <li
                  className="w-[350px] max-w-full bg-white relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px] flex justify-center items-center h-fit"
                  key={item.name}
                >
                  <blockquote className="flex flex-col items-start justify-center w-full">
                    <div
                      aria-hidden="true"
                      className="-z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                    ></div>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <Image
                          src={item.pdp}
                          alt="Photo de profil avatar google"
                          width={40}
                          height={40}
                        />
                        <span className=" leading-[1.6] text-gray-900 font-normal">
                          {item.name}
                        </span>
                      </div>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                      />
                    </div>
                    <div className="flex items-center my-4 text-yellow-400 text-2xl">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                    </div>
                    <span className="leading-[1.6] text-gray-900 font-normal">
                      {item.quote}
                    </span>
                  </blockquote>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            title="Scroll Left"
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            title="Scroll Right"
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};
