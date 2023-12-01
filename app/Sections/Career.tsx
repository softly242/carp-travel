'use client';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../components/ErrorMessage';

export default function Career() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      id="career"
      className="bgSection bg-opacity-75 bg-career bg-no-repeat md:relative md:bg-career-768 xl:bg-career-1280"
    >
      <div className="bgGradien"></div>

      <div className="container">
        <div className="relative pb-14 pt-14 md:pb-16 md:pt-16 xl:pb-[104px] xl:pt-[104px]">
          <div className="mb-9 md:mb-0 md:flex md:items-center md:justify-between xl:mb-6">
            <h2 className="text-xl4 font-thin uppercase tracking-[-1.6px] md:text-[67px]  md:tracking-[-2.68px] xl:text-[98px] xl:leading-none xl:tracking-[-3.92px]">
              Choose <span className="font-medium">US</span>
            </h2>
            <p className="mb-9 ml-auto w-[179px] text-sm font-extralight md:mb-0 md:mt-2 md:w-auto md:max-w-[221px] md:text-justify md:text-[13px] xl:max-w-[293px] xl:text-lg xl:leading-6">
              Your chance to join our passionate team in Carpathian tourism.
              <br className="md:hidden"></br>Seeking talented professionals to
              share our common mission.
            </p>
          </div>
          <div className="md:flex">
            <section className="relative md:mr-5 md:max-w-[225px] md:flex-grow md:bg-transparent md:bg-none xl:max-w-[562px]">
              <h2 className="mb-9 ml-auto w-[179px] text-3xl font-extralight uppercase md:mb-14 md:ml-auto md:w-fit xl:ml-[85px] xl:text-4xl">
                Why us ?
              </h2>
              <div className="w-[181px] space-y-4 text-end md:w-auto md:space-y-6 xl:text-start">
                <div className="ml-auto w-fit gap-x-6 xl:flex">
                  <h3 className="mb-2 text-sm font-normal md:text-base xl:text-lg xl:leading-6">
                    Professional development
                  </h3>
                  <p className="text-xs font-extralight leading-5 xl:max-w-[285px] xl:leading-6">
                    We offer growth opportunities and a creative environment to
                    nurture your talents.
                  </p>
                </div>
                <div className="ml-auto w-fit gap-x-6 xl:flex">
                  <h3 className="mb-2 text-sm font-normal md:text-base xl:text-lg xl:leading-6">
                    Teamwork
                  </h3>
                  <p className="text-xs font-extralight leading-5 xl:max-w-[285px] xl:leading-6">
                    Join our close-knit family, where support and inspiration
                    abound.
                  </p>
                </div>
                <div className="ml-auto w-fit gap-x-6 xl:flex">
                  <h3 className="mb-2 text-sm font-normal md:mb-7 md:text-base xl:text-lg xl:leading-6">
                    Stimulating work environment
                  </h3>
                  <p className="text-xs font-extralight leading-5 xl:max-w-[285px] xl:leading-6">
                    Flexibility and remote options for a comfortable experience.
                  </p>
                </div>
                <div className="ml-auto w-fit gap-x-6 xl:flex">
                  <h3 className="mb-2 text-sm font-normal md:text-base xl:text-lg xl:leading-6">
                    Exciting challenges
                  </h3>
                  <p className="text-xs font-extralight leading-5 xl:max-w-[285px] xl:leading-6">
                    Unleash your potential through unforgettable projects
                    showcasing Carpathian beauty.
                  </p>
                </div>
              </div>
            </section>
            <section className="relative pb-14 pt-14 md:flex-grow md:bg-transparent md:bg-none md:pt-[90px] xl:pt-0">
              <p className="mb-6 ml-auto w-[179px] text-sm font-extralight md:mb-8 md:ml-0 md:w-[221px]">
                Don&apos;t miss your opportunity! <br></br>Fill out the form
                right now<br className="hidden md:inline"></br> and join our
                team!
              </p>
              <form
                className=""
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                {/** User info */}
                <div className="md:flex md:gap-5 ">
                  <div className="md:flex-grow xl:max-w-[290px]">
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
                      placeholder="E-mail"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      className={`input ${errors.email ? 'invalid' : ''}`}
                    />
                    <ErrorMessage
                      message="Invalid email"
                      className={`${errors.email ? '' : 'opacity-0'}`}
                    />

                    <label
                      htmlFor="position"
                      className={`label ${errors.position ? 'invalid' : ''}`}
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      id="position"
                      className="input mb-5"
                      placeholder="Position"
                    />
                    <label
                      htmlFor="tel"
                      className={`label ${errors.tel ? 'invalid' : ''}`}
                    >
                      Phone
                    </label>
                    <div className="relative flex">
                      <span className="absolute inset-y-0 left-2 flex items-center text-xs font-extralight leading-6 tracking-[2.4px] xl:text-xl">
                        +38
                      </span>
                      <input
                        {...register('tel', {
                          pattern: /^[0-9]{10}$/gm,
                        })}
                        type="tel"
                        name="tel"
                        maxLength={10}
                        id="tel"
                        inputMode="numeric"
                        aria-invalid={errors.tel ? 'true' : 'false'}
                        className={`input pl-10 xl:pl-14 ${
                          errors.tel ? 'invalid' : ''
                        }`}
                        placeholder="Phone"
                      />
                    </div>
                    <ErrorMessage
                      message="Incorrect phone"
                      className={`${errors.tel ? '' : 'opacity-0'}`}
                    />
                  </div>

                  {/** User Message */}
                  <div className="md:flex-grow">
                    <label htmlFor="comment" className="label">
                      Message
                    </label>
                    <textarea
                      name="comment"
                      id="comment"
                      placeholder="Message"
                      className="mb-4 h-[196px] w-full bg-white/5 pl-2 text-xs font-extralight placeholder:pt-1 placeholder:text-white/20 md:mb-0 md:min-h-[228px]"
                    ></textarea>
                  </div>
                </div>

                {/** Submit area */}
                <div className="flex justify-between gap-x-4">
                  <div className="mb-4">
                    <label htmlFor="rules" className="flex cursor-pointer">
                      <input
                        {...register('rules', { required: true })}
                        type="checkbox"
                        name="rules"
                        required
                        id="rules"
                        className="peer sr-only"
                      />
                      <span
                        className={`text-gray-700 peer-checked:text-white ${
                          errors.rules ? 'invalid' : ''
                        }`}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="21"
                            height="21"
                            stroke="white"
                          />
                          <rect
                            x="4"
                            y="4"
                            width="14"
                            height="14"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span className="mt-1 pl-2 text-xs font-extralight leading-[22px] md:max-w-[192px] xl:max-w-[258px]">
                        I confirm my consent to the processing of personal data.
                      </span>
                    </label>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="text-3xl font-medium  ">
                      SEND
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
