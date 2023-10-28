"use client";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section
      id="contacts"
      className="bgSection bg-opacity-75 bg-contacts relative pb-[54px] pt-14 md:bg-contacts-768 xl:bg-contacts-1280 md:pb-16 md:pt-16 xl:pt-[104px] xl:pb-[104px]"
    >
      <div className="bgGradien"></div>
      <div className="container relative z-0">
        <h1 className="font-thin mb-9 text-xl4 tracking-[-1.6px] uppercase md:text-[67px] md:leading-[66px] md:tracking-[-2.68px] xl:text-[98px] xl:tracking-[-3.92px] xl:mb-[71px]">
          Contact <span className="font-medium">US</span>
        </h1>
        <div className="xl:flex xl:justify-between">
          <div className="md:flex md:mb-16 xl:block xl:mb-0">
            <div className="">
              <ul className="ml-auto w-fit mb-6 md:mb-0">
                <li className="flex md:ml-16">
                  <a
                    href="tel:+380981234567"
                    className="pr-5 text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    +38 098 12 34 567
                  </a>
                  <p className="font-extralight text-xs leading-5">
                    Phone number
                  </p>
                </li>
                <li className="md:ml-16 md:mb-6 xl:mb-16">
                  <a
                    href="tel:+380731234567"
                    className="text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    +38 073 12 34 567
                  </a>
                </li>

                <li className="flex  ml-auto w-fit mr-[46px] mb-[26px] xl:mb-[124px] md:mb-0 ">
                  <a
                    href="mailto:support@carptravel.com"
                    className="pr-[19px] text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    isupport@carptravel.com
                  </a>
                  <p className="font-extralight text-xs leading-5">E-mail</p>
                </li>
              </ul>
            </div>

            <div className="flex ml-auto w-fit mr-[15px] mb-3 md:ml-[90px] xl:flex-row-reverse xl:gap-5 xl:ml-auto">
              <p className="font-extralight text-xs leading-5 mr-5">
                Follow us
              </p>
              <ul className="socials">
                <li>
                  <a
                    href=""
                    className="text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    youtube
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="md:flex xl:flex-col md:gap-5 xl:gap-0 md:justify-between xl:w-full xl:max-w-[607px]"
          >
            <div className="xl:flex xl:gap-5 flex-grow md:max-w-[221px] xl:w-full xl:max-w-none">
              <div className="mb-[1px] w-full">
                <label
                  htmlFor="name"
                  className={`label ${errors.name ? "invalid" : ""}`}
                >
                  Full name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  id="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  className={`input ${errors.name ? "invalid" : ""}`}
                  placeholder="Name"
                />
                <ErrorMessage
                  message="Incorrect name"
                  className={`${errors.name ? "" : "opacity-0"}`}
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="email"
                  className={`label ${errors.email ? "invalid" : ""}`}
                >
                  E-mail
                </label>
                <input
                  {...register("email", {
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                  type="email"
                  name="email"
                  id="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  placeholder="E-mail"
                  className={`input ${errors.email ? "invalid" : ""}`}
                />
                <ErrorMessage
                  message="Invalid email"
                  className={`${errors.email ? "" : "opacity-0"}`}
                />
              </div>
            </div>

            {/** Textarea */}
            <div className="flex-grow">
              <div className="">
                <label htmlFor="comment" className="label">
                  Message
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Message"
                  className="w-full h-[196px] pl-2 mb-4 xl:mb-6 bg-white/5 text-xs  xl:text-xl font-extralight placeholder:text-white/20 placeholder:pt-1"
                ></textarea>
              </div>

              <div className=" text-right">
                <button
                  type="submit"
                  className="font-medium text-3xl xl:text-[32px]  "
                >
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
