import Header from "./Header";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="bgSection bg-opacity-50 pb-14 bg-hero relative md:bg-hero-768 md:pb-16 xl:bg-hero-1280 xl:pb-[104px]">
      <div className="bgGradien md:bg-overlay-hidden"></div>
      <div className="container z-10 relative">
        <Header />
        <div className="md:flex md:flex-row-reverse">
          <div className="mb-6 leading-none h-[52px] md:h-auto w-fit ml-auto md:mb-0 md:mt-3 md: max-w-[230px] xl:max-w-[305px]">
            <div>
              <span className="font-medium text-[37px] md:text-[67px] xl:text-[98px] xl:mr-2">
                7
              </span>
              <span className="font-thin text-[37px] tracking-[1.665px] uppercase  md:text-[67px] md:tracking-[8.71px] xl:tracking-normal xl:text-[98px]">
                Days
              </span>
            </div>
            <span className="font-light text-xs leading-none tracking-[9.48px] uppercase block md:text-sm md:tracking-[25.9px] xl:text-base xl:tracking-[36.48px]">
              Journey
            </span>
          </div>
          <div>
            <h1 className="font-thin text-xl4 uppercase mb-6 leading-[1.4] tracking-[-1.6px] md:text-[67px] md:tracking[-2.68] md:mb-[68px] xl:text-[98px] xl:tracking-[-3.92px]">
              <span className="font-medium">Uncover</span> Carpathian’s Secrets
            </h1>

            <p className="mb-6 text-xxs font-extralight leading-4 md:mb-0 md:text-sm md:tracking-[1.26px] xl:text-base xl:tracking-[1.44px]">
              Hoverla / Yaremche / Zakarpattia / <br className="xl:hidden"></br>{" "}
              Vorokhta / Synevyr Lake / Bukovel
            </p>
          </div>
        </div>
        <div className="md:ml-auto md:w-fit md:mt-[-200px]">
          <p className="mb-6 font-extralight text-sm text-justify md:h-[120] md:w-[230px] md:text-base md:leading-5 md:mb-7 xl:w-[294px] xl:text-lg xl:leading-6 ">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <Link href="#contacts">
            <button
              type="submit"
              className="relative bg-white bg-opacity-10 hover:bg-opacity-20 block w-full leading-none text-center mx-auto text-lg font-bold px-16 py-[18px] xl:text-[32px]"
            >
              JOIN NOW
              <span className="absolute h-3 w-[42px] md:w-[35px] xl:w-[44px] border-b border-l border-white left-0 bottom-0 rounded-inherit"></span>
              <span className="absolute h-3 w-[42px] md:w-[35px] xl:w-[44px] border-t border-l border-white left-0 top-0 rounded-inherit"></span>
              <span className="absolute h-3 w-[42px] md:w-[35px] xl:w-[44px] border-r border-t border-white right-0 top-0 rounded-inherit"></span>
              <span className="absolute h-3 w-[42px] md:w-[35px] xl:w-[44px] border-b border-r border-white right-0 bottom-0 rounded-inherit"></span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
