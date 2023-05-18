"use client";
import { useRef } from "react";
// Import Swiper React components
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { VscArrowDown } from "react-icons/vsc";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { image1, image2, image3, image4 } from "../../public/images";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=" bg-[#010C15] text-white ">
      <div className=" px-24  text-right py-10  ">
        <Link href="#" className=" underline ">
          Download CV
        </Link>
      </div>
      <div className=" md:max-w-[1370px] mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <div className=" ">
            <SwiperSlide className=" mt-10">
              <div className=" flex flex-col  md:flex-row justify-center items-center gap-x-24">
                <div className=" hidden md:block">
                  <Image
                    src={image1}
                    alt="image"
                    className=" rounded-full w-[300px]"
                  />
                </div>
                <div className=" flex flex-col gap-y-4">
                  <p>Hei, Jeg er</p>
                  <h2 className=" text-[45px] font-semibold">James Dasher</h2>
                  <div className=" flex items-center gap-x-3">
                    <IoIosArrowForward size={30} className=" text-primary" />
                    <p className=" text-2xl tracking-widest text-primary">
                      {" "}
                      Front-end developer
                    </p>
                  </div>
                  <div className="mt-10 hidden md:block ">
                    <Link
                      href="#"
                      className=" border rounded-md py-3 px-7 hover:bg-white hover:text-black transition "
                    >
                      Prosjekter
                    </Link>
                  </div>

                  <div className=" mt-14 ml-10 hidden md:block">
                    <VscArrowDown className="animate-bounce w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className=" mt-20 flex flex-col justify-center items-center md:hidden ">
                <Image
                  src={image1}
                  alt="image"
                  className=" rounded-full w-[200px]"
                />
                <div className="mt-10 ">
                  <Link
                    href="#"
                    className=" border rounded-md py-3 px-20 w-full hover:bg-white hover:text-black transition "
                  >
                    Prosjekter
                  </Link>
                </div>

                <div className=" mt-14 ">
                  <VscArrowDown className="animate-bounce w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" mt-10">
              <div className=" flex flex-col  md:flex-row justify-center items-center gap-x-24">
                <div className=" hidden md:block">
                  <Image
                    src={image2}
                    alt="image"
                    className=" rounded-full w-[300px]"
                  />
                </div>
                <div className=" flex flex-col gap-y-4">
                  <p>Hei, Jeg er</p>
                  <h2 className=" text-[45px] font-semibold">James Dasher</h2>
                  <div className=" flex items-center gap-x-3">
                    <IoIosArrowForward size={30} className=" text-primary" />
                    <p className=" text-2xl tracking-widest text-primary">
                      {" "}
                      Front-end developer
                    </p>
                  </div>
                  <div className="mt-10 hidden md:block ">
                    <Link
                      href="#"
                      className=" border rounded-md py-3 px-7 hover:bg-white hover:text-black transition "
                    >
                      Prosjekter
                    </Link>
                  </div>

                  <div className=" mt-14 ml-10 hidden md:block">
                    <VscArrowDown className="animate-bounce w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className=" mt-20 flex flex-col justify-center items-center md:hidden ">
                <Image
                  src={image2}
                  alt="image"
                  className=" rounded-full w-[200px]"
                />
                <div className="mt-10 ">
                  <Link
                    href="#"
                    className=" border rounded-md py-3 px-20 w-full hover:bg-white hover:text-black transition "
                  >
                    Prosjekter
                  </Link>
                </div>

                <div className=" mt-14 ">
                  <VscArrowDown className="animate-bounce w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" mt-10">
              <div className=" flex flex-col  md:flex-row justify-center items-center gap-x-24">
                <div className=" hidden md:block">
                  <Image
                    src={image3}
                    alt="image"
                    className=" rounded-full w-[300px]"
                  />
                </div>
                <div className=" flex flex-col gap-y-4">
                  <p>Hei, Jeg er</p>
                  <h2 className=" text-[45px] font-semibold">James Dasher</h2>
                  <div className=" flex items-center gap-x-3">
                    <IoIosArrowForward size={30} className=" text-primary" />
                    <p className=" text-2xl tracking-widest text-primary">
                      {" "}
                      Front-end developer
                    </p>
                  </div>
                  <div className="mt-10 hidden md:block ">
                    <Link
                      href="#"
                      className=" border rounded-md py-3 px-7 hover:bg-white hover:text-black transition "
                    >
                      Prosjekter
                    </Link>
                  </div>

                  <div className=" mt-14 ml-10 hidden md:block">
                    <VscArrowDown className="animate-bounce w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className=" mt-20 flex flex-col justify-center items-center md:hidden ">
                <Image
                  src={image3}
                  alt="image"
                  className=" rounded-full w-[200px]"
                />
                <div className="mt-10 ">
                  <Link
                    href="#"
                    className=" border rounded-md py-3 px-20 w-full hover:bg-white hover:text-black transition "
                  >
                    Prosjekter
                  </Link>
                </div>

                <div className=" mt-14 ">
                  <VscArrowDown className="animate-bounce w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" mt-10">
              <div className=" flex flex-col  md:flex-row justify-center items-center gap-x-24">
                <div className=" hidden md:block">
                  <Image
                    src={image4}
                    alt="image"
                    className=" rounded-full w-[300px]"
                  />
                </div>
                <div className=" flex flex-col gap-y-4">
                  <p>Hei, Jeg er</p>
                  <h2 className=" text-[45px] font-semibold">James Dasher</h2>
                  <div className=" flex items-center gap-x-3">
                    <IoIosArrowForward size={30} className=" text-primary" />
                    <p className=" text-2xl tracking-widest text-primary">
                      {" "}
                      Front-end developer
                    </p>
                  </div>
                  <div className="mt-10 hidden md:block ">
                    <Link
                      href="#"
                      className=" border rounded-md py-3 px-7 hover:bg-white hover:text-black transition "
                    >
                      Prosjekter
                    </Link>
                  </div>

                  <div className=" mt-14 ml-10 hidden md:block">
                    <VscArrowDown className="animate-bounce w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className=" mt-20 flex flex-col justify-center items-center md:hidden ">
                <Image
                  src={image4}
                  alt="image"
                  className=" rounded-full w-[200px]"
                />
                <div className="mt-10 ">
                  <Link
                    href="#"
                    className=" border rounded-md py-3 px-20 w-full hover:bg-white hover:text-black transition "
                  >
                    Prosjekter
                  </Link>
                </div>

                <div className=" mt-14 ">
                  <VscArrowDown className="animate-bounce w-8 h-8" />
                </div>
              </div>
            </SwiperSlide>
          </div>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 0 0" ref={progressCircle}>
              <circle cx="0" cy="0" r="0"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
