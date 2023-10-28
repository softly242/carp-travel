export default function About() {
  return (
    <section
      id="about"
      className="bgSection bg-opacity-50 bg-about md:bg-about-768 md:pt-16 md:pb-16 xs:bg-about-480 xl:bg-about-1280 xl:pt-[104px] xl:pb-[104px] pb-[54px] pt-14 bg-center"
    >
      <div className="bgGradien"></div>
      <div className="container">
        <div className="md:flex md:mb-4 xl:mb-[72px]">
          <h1 className="font-thin mb-2 text-xl4 self-start leading-none tracking-[-1.6px] md:text-[67px] md:mr-4 xl:text-[98px] xl:tracking-[-3.92px] xl:mr-6">
            WHO <span className="font-medium">WE ARE</span>
          </h1>
          <div className="block ">
            <div className="h-[240px] w-[180px] md:w-[220px] mb-5 md:ml-auto xl:ml-0 xl:mb-6 xl:h-[240px] xl:w-[292px]">
              <p className="text-sm font-extralight md:leading-5 md:text-base xl:text-lg xl:leading-6">
                <span className="font-normal text-sm md:leading-5 md:text-base xl:text-lg xl:leading-6">
                  a team of enthusiasts
                </span>
                who are fully committed to the mission of creating unforgettable
                and extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </p>
            </div>

            <div className="h-[200px] w-[180px] md:h-[180px] md:w-[220px] mb-10  md:ml-auto xl:ml-0 xl:h-[192px] xl:w-[292px] ">
              <p className="font-extralight text-sm md:leading-5 md:text-base xl:text-lg xl:leading-6">
                <span className="font-normal text-sm md:leading-5 md:text-base xl:text-lg xl:leading-6">
                  We believe
                </span>{" "}
                that nature has the power to inspire, strengthen character and
                provide new perspectives. Therefore, each of our{" "}
                <br className="md:hidden"></br>tours is aimed at unlocking your
                potential, enriching your spiritual world and creating
                unforgettable memories.
              </p>
            </div>
          </div>
        </div>
        <div className=" xl:flex xl:flex-row-reverse xl:justify-between">
          <div className="w-fit ml-auto mb-10 md:ml-0 md:mb-[64px] ">
            <span className="block uppercase text-sm font-normal md:text-base xl:text-lg">
              From vacationers
            </span>
            <span className="block uppercase text-end text-sm font-normal md:text-base xl:text-lg">
              to active travelers
            </span>
            <span className="block tracking-[-0.14px] text-sm text-end font-extralight md:tracking-[0.32px] md:text-base xl:text-lg xl:tracking-[2.16px]">
              we have a tour for everyone.
            </span>
          </div>
          <p className=" font-extralight text-sm md:ml-auto md:h-[60px] md:w-[463px] md:text-base xl:ml-0 xl:text-lg xl:h-[72px] xl:w-[605px]">
            <span className="font-normal text-sm md:text-base xl:text-lg">
              We use methods
            </span>
            that are time-tested and proven. Our expert guides with in-depth
            knowledge of the Carpathian landscapes lead you safely through the
            mysteries of these mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
