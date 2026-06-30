"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    pdp: string;
    source?: "google" | "resalib";
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "130s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
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
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => {
          const logo = getLogo(item.source); // ✅ ici proprement dans map

          return (
            <li
              key={item.name}
              className="w-[350px] max-w-full bg-white relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px] flex justify-center items-center h-fit"
            >
              <blockquote className="flex flex-col items-start justify-center w-full">
                <div
                  aria-hidden="true"
                  className="-z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                />
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.pdp}
                      alt="Photo de profil avatar google"
                      width={40}
                      height={40}
                    />
                    <span className="leading-[1.6] text-gray-900 font-normal">
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
  );
};
