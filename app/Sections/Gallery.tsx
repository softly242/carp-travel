"use client";
import { register } from "swiper/element/bundle";
import Image from "next/image";
import type { SwiperOptions } from "swiper/types";
import type { SwiperContainer } from "swiper/element/bundle";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const defaultParams = {};

const effectBreakpoints = {
  default: {
    prev: {
      shadow: true,
      translate: [0, 0, 0],
    },
    next: {
      shadow: true,
      translate: [0, 0, 0],
    },
  },
  768: {
    prev: {
      shadow: true,
      translate: ["70%", 0, 0],
      scale: 0.293,
    },
    next: {
      shadow: true,
      translate: ["-70%", 0, 0],
      scale: 0.293,
    },
  },
  1280: {
    prev: {
      shadow: true,
      translate: ["80%", 0, 0],
      scale: 0.515,
    },
    next: {
      shadow: true,
      translate: ["-80%", 0, 0],
      scale: 0.515,
    },
  },
};

export default function Gallery() {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  const [swiperInit, setSwiperInit] = useState(false);

  const swiperRef = useRef<SwiperContainer>(null);

  useEffect(() => {
    if (isTablet === null || swiperInit) return;
    register();
    const breakPoint = isTablet ? 768 : 1280;
    const options: SwiperOptions = {
      initialSlide: 2,
      loop: true,
      centeredSlides: true,
      effect: "creative",
      navigation: {
        prevEl: ".gallery-button-next",
        nextEl: ".gallery-button-prev",
      },
      creativeEffect: {
        ...effectBreakpoints[breakPoint],
      },
      slidesPerView: "auto",
      direction: "horizontal",
      on: {
        init: () => {
          setSwiperInit(true);
        },
      },
      breakpoints: {
        768: {
          centeredSlides: true,
          direction: "horizontal",
          creativeEffect: {
            ...effectBreakpoints[768],
          },
        },
        1280: {
          centeredSlides: true,
          creativeEffect: {
            ...effectBreakpoints[1280],
          },
        },
      },
    };

    const swiper = swiperRef.current;
    swiper && Object.assign(swiper, options) && swiper?.initialize();
  }, [isTablet, swiperInit]);

  useEffect(() => {
    swiperRef.current?.swiper?.update();
  }, [isTablet, isDesktop]);

  return (
    <section
      id="gallery"
      className="bgSection bg-opacity-[.85] bg-gallery relative pb-14 pt-14"
    >
      <div className="container relative z-0">
        <h1 className="font-thin mb-[24px] text-xl4 tracking-[-1.6px] text-white md:text-[67px] md:tracking-[-2.68px] xl:text-[98px] xl:tracking-[-3.92px]">
          OUR <span className="font-medium">GALLERY</span>
        </h1>
        <div className="relative h-[610px] md:h-[294px] xl:h-[429px]">
          <swiper-container
            init="false"
            class="opacity-0 h-0 pointer-events-none invisible md:visible md:opacity-100 md:pointer-events-auto swiper-gallery md:h-full w-hull"
            ref={swiperRef}
          >
            <swiper-slide class="mx-auto md:mx-0 w-[280px] h-[187px] md:w-[415px] md:h-[294px] xl:w-[609px] xl:h-full">
              <Image
                className="object-cover w-full h-full text-center"
                src="/gallery1-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
            <swiper-slide class="mx-auto md:mx-0 w-[280px] h-[187px] md:w-[415px] md:h-[294px] xl:w-[609px] xl:h-full">
              <Image
                className="object-cover w-full h-full"
                src="/gallery2-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
            <swiper-slide class="mx-auto md:mx-0 w-[280px] h-[187px] md:w-[415px] md:h-[294px] xl:w-[609px] xl:h-full">
              <Image
                className="object-cover w-full h-full"
                src="/gallery3-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
          </swiper-container>

          {/** Mobile gallery */}
          <swiper-container
            class="block md:hidden h-full w-full"
            slides-per-view="3"
            direction="vertical"
            space-between="24"
          >
            <swiper-slide class="mx-auto w-full max-w-[280px] h-[187px]">
              <Image
                className="object-cover w-full h-full text-center"
                src="/gallery1-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
            <swiper-slide class="mx-auto w-full max-w-[280px] h-[187px]">
              <Image
                className="object-cover w-full h-full"
                src="/gallery2-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
            <swiper-slide class="mx-auto w-full max-w-[280px] h-[187px]">
              <Image
                className="object-cover w-full h-full"
                src="/gallery3-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
          </swiper-container>

          {/** Navigation */}
          <div className="hidden md:flex justify-center gap-x-[440px] xl:gap-x-[657px] absolute w-full bottom-0 z-10">
            <button className="gallery-button-prev text-white font-thin text-[33px]">
              BACK
            </button>
            <button className="gallery-button-next text-white font-thin text-[33px]">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
