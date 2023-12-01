import Header from './Header';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bgSection relative bg-opacity-50 bg-hero pb-14 md:bg-hero-768 md:pb-16 xl:bg-hero-1280 xl:pb-[104px]">
      <div className="bgGradien md:bg-overlay-hidden"></div>
      <div className="container relative z-10">
        <Header />
        <div className="md:flex md:flex-row-reverse">
          <div className="md: mb-6 ml-auto h-[52px] w-fit max-w-[230px] leading-none md:mb-0 md:mt-3 md:h-auto xl:max-w-[305px]">
            <div>
              <span className="text-[37px] font-medium md:text-[67px] xl:mr-2 xl:text-[98px]">
                7
              </span>
              <span className="text-[37px] font-thin uppercase tracking-[1.665px] md:text-[67px] md:tracking-[8.71px] xl:text-[98px] xl:tracking-normal">
                Days
              </span>
            </div>
            <span className="block text-xs font-light uppercase leading-none tracking-[9.48px] md:text-sm md:tracking-[25.9px] xl:text-base xl:tracking-[36.48px]">
              Journey
            </span>
          </div>
          <div>
            <h1 className="md:tracking[-2.68] mb-6 text-xl4 font-thin uppercase leading-[1.4] tracking-[-1.6px] md:mb-[68px] md:text-[67px] xl:text-[98px] xl:tracking-[-3.92px]">
              <span className="font-medium">Uncover</span> Carpathian’s Secrets
            </h1>
            <p className="mb-6 text-xxs font-extralight leading-4 md:mb-0 md:text-sm md:tracking-[1.26px] xl:text-base xl:tracking-[1.44px]">
              Hoverla / Yaremche / Zakarpattia / <br className="xl:hidden"></br>{' '}
              Vorokhta / Synevyr Lake / Bukovel
            </p>
          </div>
        </div>
        <div className="md:ml-auto md:mt-[-200px] md:w-fit">
          <p className="mb-6 text-justify text-sm font-extralight md:mb-7 md:h-[120] md:w-[230px] md:text-base md:leading-5 xl:w-[294px] xl:text-lg xl:leading-6 ">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <Link href="#contacts" className="relative mx-auto block w-full bg-white bg-opacity-10 px-16 py-[18px] text-center text-lg font-bold leading-none hover:bg-opacity-20 xl:text-[32px]">
              JOIN NOW
              <span className="rounded-inherit absolute bottom-0 left-0 h-3 w-[42px] border-b border-l border-white md:w-[35px] xl:w-[44px]"></span>
              <span className="rounded-inherit absolute left-0 top-0 h-3 w-[42px] border-l border-t border-white md:w-[35px] xl:w-[44px]"></span>
              <span className="rounded-inherit absolute right-0 top-0 h-3 w-[42px] border-r border-t border-white md:w-[35px] xl:w-[44px]"></span>
              <span className="rounded-inherit absolute bottom-0 right-0 h-3 w-[42px] border-b border-r border-white md:w-[35px] xl:w-[44px]"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
