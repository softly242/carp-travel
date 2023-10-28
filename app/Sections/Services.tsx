"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { DataType } from "../(server)/api/data";
import { register } from "swiper/element/bundle";

register();

export default function Services() {
  const [allData, setAllData] = useState<DataType>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetch("/api")
      .then((x) => x.json())
      .then(setAllData);
  }, []);

  const getItems = useCallback(() => {
    return allData.length ? allData.map((el) => el.content.item) : [];
  }, [allData]);

  const handlePageChange = (page: number) => {
    setPage(page);
    const swiperEl = document.querySelector("swiper-container");
    swiperEl && swiperEl.swiper.slideTo(page - 1);
  };

  const formatNumber = (value: number) => (value > 10 ? value : `0${value}`);

  return (
    <section
      id="services"
      className="bgSection bg-opacity-50 pt-[54px] pb-14 relative md:pb-16 md:pt-16 xl:pt-[104px] xl:pb-[104px]"
    >
      <div className="bgGradien"></div>
      <div className="absolute z-[-1] w-full h-full top-0 left-0 overflow-hidden">
        <swiper-container effect="fade" class="w-full h-full">
          {allData.length &&
            allData.map(({ backgroundUrl }: DataType[number], index) => {
              return (
                <swiper-slide key={index} className="h-full w-full">
                  <Image
                    className="object-cover w-full h-full"
                    src={backgroundUrl}
                    alt=""
                    width={2880}
                    height={1558}
                    sizes="100vw"
                    quality={85}
                  />
                </swiper-slide>
              );
            })}
        </swiper-container>
      </div>
      <div className="container relative">
        <div className="md:flex md:mb-10 xl:mb-5 items-center justify-between xl:justify-start xl:gap-[162px]">
          <h1 className="font-thin mb-[24px] whitespace-nowrap text-xl4 tracking-[-1.6px] md:text-[67px] md:mb-0 md:tracking-[-2.68px] xl:text-[98px] xl:tracking-[-3.92px] xl:mb-[20px]">
            WE <span className="font-medium">OFFER</span>
          </h1>
          <span className="text-[43px] font-thin flex justify-end mb-[13px] md:text-[67px] md:leading-[78px] xl:text-[98px]">
            <span>{formatNumber(page)}/</span>
            <span className="opacity-30">
              {formatNumber(allData.length || 0)}
            </span>
          </span>
        </div>
        {allData.length &&
          allData
            .filter((_, index) => index + 1 === page)
            .map(({ content }: DataType[number], i) => {
              const { number, image, titleCall, title } = content;
              return (
                <div key={i} className="">
                  <div className="md:flex md:gap-5 md:h-[370px] xl:h-[429px]">
                    <div className="md:w-[463px] xl:w-[609px] w-full h-full">
                      <Image
                        className="object-cover w-full h-full mb-[12px] md:mb-0"
                        src={image}
                        alt="image"
                        width={1214}
                        height={858}
                        sizes="100vw"
                        quality={85}
                      />
                    </div>
                    <div className="flex-grow flex-col md:flex md:w-[221px] xl:w-fit">
                      <div className="md:flex md:flex-col-reverse xl:flex-row-reverse">
                        <p className="flex-grow text-xs font-extralight leading-6 tracking-[2.4px] text-right mb-[24px] md:mb-[34px] md:flex md:mt-[9px] xl:flex xl:mt-0 xl:mb-0 xl:ml-[59px] xl:text-left">
                          {titleCall}
                        </p>

                        <ul className="flex-grow">
                          {getItems().map((item, index) => {
                            const isActive = index + 1 === page;
                            return (
                              <li
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`${
                                  isActive
                                    ? "font-medium "
                                    : "opacity-50 font-extralight"
                                } flex items-center cursor-pointer leading-4 uppercase text-xl transition hover:opacity-100 mb-[16px] md:text-[22px] md:leading-[18px] xl:text-[28px] xl:leading-6 xl:mb-6`}
                              >
                                <span
                                  className={`inline-block w-[6px] h-[6px] rotate-45 bg-white mr-2 ${
                                    isActive ? "" : "hidden"
                                  }`}
                                ></span>
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <p className="text-sm xl:text-justify font-extralight leading-5 pt-[18px] md:pt-0 md:text-[13px] xl:text-lg xl:leading-6 xl:w-[293px] xl:ml-auto md:mt-auto">
                        {title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
}
