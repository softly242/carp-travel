'use client';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../components/ErrorMessage';

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section
      id="contacts"
      className="bgSection relative bg-opacity-75 bg-contacts pb-[54px] pt-14 md:bg-contacts-768 md:pb-16 md:pt-16 xl:bg-contacts-1280 xl:pb-[104px] xl:pt-[104px]"
    >
      <div className="bgGradien"></div>
      <div className="container relative z-0">
        <h2 className="mb-9 text-xl4 font-thin uppercase tracking-[-1.6px] md:text-[67px] md:leading-[66px] md:tracking-[-2.68px] xl:mb-[71px] xl:text-[98px] xl:tracking-[-3.92px]">
          Contact <span className="font-medium">US</span>
        </h2>
        <div className="xl:flex xl:justify-between">
          <div className="md:mb-16 md:flex xl:mb-0 xl:block">
            <div className="">
              <ul className="mb-6 ml-auto w-fit md:mb-0">
                <li className="flex md:ml-16">
                  <a
                    href="tel:+380981234567"
                    className="pr-5 text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    +38 098 12 34 567
                  </a>
                  <p className="text-xs font-extralight leading-5">
                    Phone number
                  </p>
                </li>
                <li className="md:mb-6 md:ml-16 xl:mb-16">
                  <a
                    href="tel:+380731234567"
                    className="text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    +38 073 12 34 567
                  </a>
                </li>

                <li className="mb-[26px]  ml-auto mr-[46px] flex w-fit md:mb-0 xl:mb-[124px] ">
                  <a
                    href="mailto:support@carptravel.com"
                    className="pr-[19px] text-sm font-normal leading-6 md:text-base xl:text-lg"
                  >
                    isupport@carptravel.com
                  </a>
                  <p className="text-xs font-extralight leading-5">E-mail</p>
                </li>
              </ul>
            </div>
            <div className="mb-3 ml-auto mr-[15px] flex w-fit md:ml-[90px] xl:ml-auto xl:flex-row-reverse xl:gap-5">
              <p className="mr-5 text-xs font-extralight leading-5">
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
            className="md:flex md:justify-between md:gap-5 xl:w-full xl:max-w-[607px] xl:flex-col xl:gap-0"
          >
            <div className="flex-grow md:max-w-[221px] xl:flex xl:w-full xl:max-w-none xl:gap-5">
              <div className="mb-[1px] w-full">
                <label
                  htmlFor="name"
                  className={`label ${errors.name ? 'invalid' : ''}`}
                >
                  Full name
                </label>
                <input
                  {...register('name', { required: true })}
                  type="text"
                  name="name"
                  id="name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  className={`input ${errors.name ? 'invalid' : ''}`}
                  placeholder="Name"
                />
                <ErrorMessage
                  message="Incorrect name"
                  className={`${errors.name ? '' : 'opacity-0'}`}
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="email"
                  className={`label ${errors.email ? 'invalid' : ''}`}
                >
                  E-mail
                </label>
                <input
                  {...register('email', {
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                  type="email"
                  name="email"
                  id="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  placeholder="E-mail"
                  className={`input ${errors.email ? 'invalid' : ''}`}
                />
                <ErrorMessage
                  message="Invalid email"
                  className={`${errors.email ? '' : 'opacity-0'}`}
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
                  className="mb-4 h-[196px] w-full bg-white/5 pl-2 text-xs font-extralight placeholder:pt-1 placeholder:text-white/20 xl:mb-6 xl:text-xl"
                ></textarea>
              </div>

              <div className=" text-right">
                <button
                  type="submit"
                  className="text-3xl font-medium xl:text-[32px]  "
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
