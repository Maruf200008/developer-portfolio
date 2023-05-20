"use client";

import Link from "next/link";

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

import Head from "next/head";
import { image1 } from "../../public/images";

const Hero = () => {
  return (
    <div>
      <Head></Head>
      <div className=" bg-[#010C15] text-white h-[900px]  md:h-[800px]  ">
        <div className=" px-40  text-right py-10  hidden md:block ">
          <Link href="#" className=" underline ">
            Download CV
          </Link>
        </div>
        <div className=" md:max-w-[1370px]  mx-auto ">
          <div className=" pt-16 md:pt-0">
            <div className=" flex flex-col  md:flex-row justify-center items-center gap-x-24">
              <div className=" hidden md:block">
                <Image
                  src={image1}
                  alt="image"
                  className=" rounded-full w-[300px]"
                />
              </div>
              <div className=" flex flex-col gap-y-2 ">
                <p>Hei, Jeg er</p>
                <h2 className=" text-[45px] font-semibold">James Dasher</h2>
                <div className=" flex items-center gap-x-3">
                  <IoIosArrowForward size={30} className=" text-primary" />
                  <div className="input-wrapper">
                    <input aria-label="Ask us anything" />
                    <span className="placeholder">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem, consequatur?
                    </span>{" "}
                  </div>
                </div>
                <div className="hidden md:block mt-28">
                  <Link
                    href="#"
                    className="btn btn1 text-white  border-white px-14 py-4 rounded-md border-2 text-lg z-10"
                  >
                    Benjamin
                  </Link>
                </div>

                <div className="middle mt-[300px] cursor-pointer">
                  <div className=" mouse mt-14 ml-10 hidden md:block"></div>
                </div>
              </div>
            </div>
            <div className=" mt-20 flex flex-col justify-center items-center md:hidden ">
              <Image
                src={image1}
                alt="image"
                className=" rounded-full w-[200px]"
              />
              <div className="middle mt-[200px] cursor-pointer">
                <div className=" mouse mt-[500px]  md:mt-96 ml-10 "></div>
              </div>
              <div className=" mt-20 ">
                <Link
                  href="#"
                  className="btn btn1 text-white  border-white px-24 py-4 rounded-md border-2 text-lg z-10"
                >
                  Benjamin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
