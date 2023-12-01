export default function About() {
  return (
    <section
      id="about"
      className="bgSection bg-opacity-50 bg-about bg-center pb-[54px] pt-14 xs:bg-about-480 md:bg-about-768 md:pb-16 md:pt-16 xl:bg-about-1280 xl:pb-[104px] xl:pt-[104px]"
    >
      <div className="bgGradien"></div>
      <div className="container">
        <div className="md:mb-4 md:flex xl:mb-[72px]">
          <h2 className="mb-2 self-start text-xl4 font-thin leading-none tracking-[-1.6px] md:mr-4 md:text-[67px] xl:mr-6 xl:text-[98px] xl:tracking-[-3.92px]">
            WHO <span className="font-medium">WE ARE</span>
          </h2>
          <div className="block ">
            <div className="mb-5 h-[240px] w-[180px] md:ml-auto md:w-[220px] xl:mb-6 xl:ml-0 xl:h-[240px] xl:w-[292px]">
              <p className="text-sm font-extralight md:text-base md:leading-5 xl:text-lg xl:leading-6">
                <span className="text-sm font-normal md:text-base md:leading-5 xl:text-lg xl:leading-6">
                  a team of enthusiasts
                </span>{' '}
                who are fully committed to the mission of creating unforgettable
                and extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </p>
            </div>
            <div className="mb-10 h-[200px] w-[180px] md:ml-auto md:h-[180px] md:w-[220px] xl:ml-0 xl:h-[192px] xl:w-[292px] ">
              <p className="text-sm font-extralight md:text-base md:leading-5 xl:text-lg xl:leading-6">
                <span className="text-sm font-normal md:text-base md:leading-5 xl:text-lg xl:leading-6">
                  We believe
                </span>{' '}
                that nature has the power to inspire, strengthen character and
                provide new perspectives. Therefore, each of our{' '}
                <br className="md:hidden"></br>tours is aimed at unlocking your
                potential, enriching your spiritual world and creating
                unforgettable memories.
              </p>
            </div>
          </div>
        </div>
        <div className=" xl:flex xl:flex-row-reverse xl:justify-between">
          <div className="mb-10 ml-auto w-fit md:mb-[64px] md:ml-0 ">
            <span className="block text-sm font-normal uppercase md:text-base xl:text-lg">
              From vacationers
            </span>
            <span className="block text-end text-sm font-normal uppercase md:text-base xl:text-lg">
              to active travelers
            </span>
            <span className="block text-end text-sm font-extralight tracking-[-0.14px] md:text-base md:tracking-[0.32px] xl:text-lg xl:tracking-[2.16px]">
              we have a tour for everyone.
            </span>
          </div>
          <p className=" text-sm font-extralight md:ml-auto md:h-[60px] md:w-[463px] md:text-base xl:ml-0 xl:h-[72px] xl:w-[605px] xl:text-lg">
            <span className="text-sm font-normal md:text-base xl:text-lg">
              We use methods
            </span>{' '}
            that are time-tested and proven. Our expert guides with in-depth
            knowledge of the Carpathian landscapes lead you safely through the
            mysteries of these mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
