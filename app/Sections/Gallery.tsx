'use client';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import type { SwiperOptions } from 'swiper/types';
import type { SwiperContainer } from 'swiper/element/bundle';
import { useEffect, useRef, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

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
      translate: ['70%', 0, 0],
      scale: 0.293,
    },
    next: {
      shadow: true,
      translate: ['-70%', 0, 0],
      scale: 0.293,
    },
  },
  1280: {
    prev: {
      shadow: true,
      translate: ['80%', 0, 0],
      scale: 0.515,
    },
    next: {
      shadow: true,
      translate: ['-80%', 0, 0],
      scale: 0.515,
    },
  },
};

export default function Gallery() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');

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
      effect: 'creative',
      navigation: {
        prevEl: '.gallery-button-next',
        nextEl: '.gallery-button-prev',
      },
      creativeEffect: {
        ...effectBreakpoints[breakPoint],
      },
      slidesPerView: 'auto',
      direction: 'horizontal',
      on: {
        init: () => {
          setSwiperInit(true);
        },
      },
      breakpoints: {
        768: {
          centeredSlides: true,
          direction: 'horizontal',
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
      className="bgSection relative bg-opacity-[.85] bg-gallery pb-14 pt-14"
    >
      <div className="container relative z-0">
        <h2 className="mb-[24px] text-xl4 font-thin tracking-[-1.6px] text-white md:text-[67px] md:tracking-[-2.68px] xl:text-[98px] xl:tracking-[-3.92px]">
          OUR <span className="font-medium">GALLERY</span>
        </h2>
        <div className="relative h-[610px] md:h-[294px] xl:h-[429px]">
          <swiper-container
            init="false"
            class="swiper-gallery w-hull pointer-events-none invisible h-0 opacity-0 md:pointer-events-auto md:visible md:h-full md:opacity-100"
            ref={swiperRef}
          >
            <swiper-slide class="mx-auto h-[187px] w-[280px] md:mx-0 md:h-[294px] md:w-[415px] xl:h-full xl:w-[609px]">
              <Image
                className="h-full w-full object-cover text-center"
                src="/gallery1-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
            <swiper-slide class="mx-auto h-[187px] w-[280px] md:mx-0 md:h-[294px] md:w-[415px] xl:h-full xl:w-[609px]">
              <Image
                className="h-full w-full object-cover"
                src="/gallery2-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
            <swiper-slide class="mx-auto h-[187px] w-[280px] md:mx-0 md:h-[294px] md:w-[415px] xl:h-full xl:w-[609px]">
              <Image
                className="h-full w-full object-cover"
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
            class="block h-full w-full md:hidden"
            slides-per-view="3"
            direction="vertical"
            space-between="24"
          >
            <swiper-slide class="mx-auto h-[187px] w-full max-w-[280px]">
              <Image
                className="h-full w-full object-cover text-center"
                src="/gallery1-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
            <swiper-slide class="mx-auto h-[187px] w-full max-w-[280px]">
              <Image
                className="h-full w-full object-cover"
                src="/gallery2-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
            <swiper-slide class="mx-auto h-[187px] w-full max-w-[280px]">
              <Image
                className="h-full w-full object-cover"
                src="/gallery3-1280.jpg"
                alt=""
                width={1212}
                height={858}
                quality={100}
              />
            </swiper-slide>
          </swiper-container>

          {/** Navigation */}
          <div className="absolute bottom-0 z-10 hidden w-full justify-center gap-x-[440px] md:flex xl:gap-x-[657px]">
            <button className="gallery-button-prev text-[33px] font-thin text-white">
              BACK
            </button>
            <button className="gallery-button-next text-[33px] font-thin text-white">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
