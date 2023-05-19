import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import { ImPhone } from "react-icons/im";
const Footer = () => {
  return (
    <div className=" bg-[#1F2937] md:bg-[#06111a] ">
      <div className=" px-10 md:px-24 py-8 flex flex-col md:flex-row justify-between items-start  md:items-center text-white gap-x-11 gap-y-10">
        <div className=" ">
          <div className="space-y-4 ">
            <h2 className=" text-3xl font-semibold">Kontakt Informasjon</h2>
            <div className=" flex items-center gap-x-2">
              <GoMail size={25} />
              <p>jamesdasher.dev@gmail.com</p>
            </div>
            <div className=" flex items-center gap-x-2">
              <ImPhone size={20} />
              <p>+47 99 99 99 99</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="space-y-4 ">
            <h2 className=" text-3xl font-semibold">Knytt Kontakt</h2>
            <div className=" flex items-center gap-x-10">
              <div className="space-y-4">
                <div className=" flex items-center gap-x-2">
                  <AiFillGithub size={25} />
                  <p>Github</p>
                </div>
                <div className=" flex items-center gap-x-2">
                  <AiFillLinkedin size={25} />
                  <p>Linkedin</p>
                </div>
              </div>
              <div>
                <BsFillArrowUpCircleFill
                  size={30}
                  className=" hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
