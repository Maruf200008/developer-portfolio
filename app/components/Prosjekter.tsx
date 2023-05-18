import Image from "next/image";
import Link from "next/link";
import { man1 } from "../../public/images";

const Prosjekter = () => {
  return (
    <div className=" bg-[#0e1821]  text-white ">
      <div className=" px-10 md:px-24 py-10 space-y-5 ">
        <h2 className=" text-4xl font-semibold mt-12">Prosjekter</h2>
        <div className=" mt-10">
          <ul className=" flex items-center gap-x-5">
            <Link href="#" className=" text-primary font-semibold">
              All
            </Link>
            <Link href="#">Guided</Link>
            <Link href="#">JavaScript</Link>
            <Link href="#">Python</Link>
          </ul>
        </div>
        <div className=" flex  gap-x-4">
          <Image src={man1} className=" w-[500px] rounded-md" alt="man photo" />
          <div className=" space-y-8">
            <h2 className=" text-3xl font-semibold">Project Title</h2>
            <p className=" pr-[150px]">
              Project Description: dolores commodi suscipit. Necessitatibus eius
              consequatur ex aliquid fuga eum quidem. Sit sint consectetur
              velit. suscipit. Necessitatibus eius consequatur ex aliquid fuga
              eum quidem. Sit sint consectetur velit.
            </p>
            <div className=" flex items-end gap-x-3">
              <p className=" bg-[#23455A] px-5 py-2 rounded-full">Next JS</p>
              <p className=" bg-[#23455A] px-5 py-2 rounded-full">React JS</p>
              <p className=" bg-[#23455A] px-5 py-2 rounded-full">Python</p>
              <p className=" bg-[#23455A] px-5 py-2 rounded-full">HTML</p>
            </div>
            <div className=" flex items-center gap-x-4">
              <p className=" px-8 py-2 border border-primary rounded-full  ">
                Demo
              </p>
              <p>sdfas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prosjekter;
