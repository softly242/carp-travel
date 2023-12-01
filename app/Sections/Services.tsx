'use client';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { DataType } from '../(server)/api/data';
import { register } from 'swiper/element/bundle';

register();

export default function Services() {
  const [allData, setAllData] = useState<DataType>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetch('/api')
      .then((x) => x.json())
      .then(setAllData);
  }, []);

  const getItems = useCallback(() => {
    return allData.length ? allData.map((el) => el.content.item) : [];
  }, [allData]);

  const handlePageChange = (page: number) => {
    setPage(page);
    const swiperEl = document.querySelector('swiper-container');
    swiperEl && swiperEl.swiper.slideTo(page - 1);
  };

  const formatNumber = (value: number) => (value > 10 ? value : `0${value}`);

  return (
    <section
      id="services"
      className="bgSection relative bg-opacity-50 pb-14 pt-[54px] md:pb-16 md:pt-16 xl:pb-[104px] xl:pt-[104px]"
    >
      <div className="bgGradien"></div>
      <div className="absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden">
        <swiper-container effect="fade" class="h-full w-full">
          {allData.length &&
            allData.map(({ backgroundUrl }: DataType[number], index) => {
              return (
                <swiper-slide key={index} className="h-full w-full">
                  <Image
                    className="h-full w-full object-cover"
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
        <div className="items-center justify-between md:mb-10 md:flex xl:mb-5 xl:justify-start xl:gap-[162px]">
          <h2 className="mb-[24px] whitespace-nowrap text-xl4 font-thin tracking-[-1.6px] md:mb-0 md:text-[67px] md:tracking-[-2.68px] xl:mb-[20px] xl:text-[98px] xl:tracking-[-3.92px]">
            WE <span className="font-medium">OFFER</span>
          </h2>
          <span className="mb-[13px] flex justify-end text-[43px] font-thin md:text-[67px] md:leading-[78px] xl:text-[98px]">
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
                  <div className="md:flex md:h-[370px] md:gap-5 xl:h-[429px]">
                    <div className="h-full w-full md:w-[463px] xl:w-[609px]">
                      <Image
                        className="mb-[12px] h-full w-full object-cover md:mb-0"
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
                        <p className="mb-[24px] flex-grow text-right text-xs font-extralight leading-6 tracking-[2.4px] md:mb-[34px] md:mt-[9px] md:flex xl:mb-0 xl:ml-[59px] xl:mt-0 xl:flex xl:text-left">
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
                                    ? 'font-medium '
                                    : 'font-extralight opacity-50'
                                } mb-[16px] flex cursor-pointer items-center text-xl uppercase leading-4 transition hover:opacity-100 md:text-[22px] md:leading-[18px] xl:mb-6 xl:text-[28px] xl:leading-6`}
                              >
                                <span
                                  className={`mr-2 inline-block h-[6px] w-[6px] rotate-45 bg-white ${
                                    isActive ? '' : 'hidden'
                                  }`}
                                ></span>
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <p className="pt-[18px] text-sm font-extralight leading-5 md:mt-auto md:pt-0 md:text-[13px] xl:ml-auto xl:w-[293px] xl:text-justify xl:text-lg xl:leading-6">
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
