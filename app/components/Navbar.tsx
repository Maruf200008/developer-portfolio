"use client";

import Link from "next/link";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { HiOutlineCode } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" bg-[#1F2937] w-full max-h-[96px] hidden md:block">
        <div className=" px-24 py-8 flex justify-between items-center text-white">
          <Link href="/" className=" flex items-center gap-x-3">
            <div className=" text-white">
              {" "}
              <HiOutlineCode size={32} className=" text-white" />
            </div>
            <h2 className=" text-2xl">James Dasher</h2>
          </Link>
          <div className=" z-20">
            <ul className=" flex gap-x-10 text-lg">
              <Link
                href="#"
                className=" hover:text-primary hover:underline transition"
              >
                About
              </Link>
              <Link
                className=" hover:text-primary hover:underline transition"
                href="#"
              >
                Project
              </Link>
              <Link
                className=" hover:text-primary hover:underline transition"
                href="#"
              >
                Contact
              </Link>
              <Link
                className=" hover:text-primary hover:underline transition"
                href="#"
              >
                CV
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-[#010C15] w-full max-h-[96px]  md:hidden border-b-4  border-primary ">
        <div className=" px-8 py-8 flex justify-between items-center text-white">
          <div className=" flex items-center gap-x-3">
            <h2 className=" text-xl text-primary ">james_dasher</h2>
          </div>
          <div className="">
            {!isOpen ? (
              <GoThreeBars
                size={30}
                className=" text-primary z-50"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <RxCross2
                size={30}
                className=" text-primary"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className=" md:hidden bg-[#010C15] text-white w-full  absolute z-50 ">
          <div className=" mx-auto my-5 ">
            <ul className=" px-24 py-14  text-center flex flex-col gap-y-7">
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Contact</Link>
              <Link href="#">CV</Link>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
