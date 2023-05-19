import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { man1, man2, man3, man4 } from "../../public/images";

const Prosjekter = () => {
  return (
    <div>
      <div className=" bg-[#0e1821]  text-white ">
        <div className=" px-10 md:px-40 py-10 space-y-5 ">
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
          <div className=" space-y-10">
            <div className=" flex flex-col md:flex-row   gap-x-14">
              <Image
                src={man1}
                className=" w-[500px] rounded-md"
                alt="man photo"
              />
              <div className=" space-y-8">
                <h2 className=" text-3xl font-semibold mt-10 md:mt-0">
                  Project Title
                </h2>
                <p className=" max-w-[750px] leading-8">
                  Project Description: dolores commodi suscipit. Necessitatibus
                  eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. suscipit. Necessitatibus eius consequatur
                  ex aliquid fuga eum quidem. Sit sint consectetur velit.
                </p>
                <div className=" flex  items-end gap-x-3">
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    Next JS
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    React JS
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    Python
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    HTML
                  </p>
                </div>
                <div className=" flex items-center justify-center md:justify-start  gap-x-4">
                  <Link
                    href="#"
                    className=" px-16 py-2 border border-primary rounded-md  "
                  >
                    Demo
                  </Link>
                  <Link
                    href="#"
                    className=" btn px-3 py-2 bg-white text-black rounded-md flex items-center gap-x-3  "
                  >
                    <AiFillGithub size={25} /> KILDEKODE
                  </Link>
                </div>
              </div>
            </div>
            <div className=" flex flex-col md:flex-row   gap-x-14">
              <Image
                src={man2}
                className=" w-[500px] rounded-md"
                alt="man photo"
              />
              <div className=" space-y-8">
                <h2 className=" text-3xl font-semibold mt-10 md:mt-0">
                  Project Title
                </h2>
                <p className=" max-w-[750px] leading-8">
                  Project Description: dolores commodi suscipit. Necessitatibus
                  eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. suscipit. Necessitatibus eius consequatur
                  ex aliquid fuga eum quidem. Sit sint consectetur velit.
                </p>
                <div className=" flex  items-end gap-x-3">
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    Next JS
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    React JS
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    Python
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    HTML
                  </p>
                </div>
                <div className=" flex items-center justify-center md:justify-start  gap-x-4">
                  <Link
                    href="#"
                    className=" px-16 py-2 border border-primary rounded-md  "
                  >
                    Demo
                  </Link>
                  <Link
                    href="#"
                    className=" btn px-3 py-2 bg-white text-black rounded-md flex items-center gap-x-3  "
                  >
                    <AiFillGithub size={25} /> KILDEKODE
                  </Link>
                </div>
              </div>
            </div>
            <div className=" flex flex-col md:flex-row   gap-x-14">
              <Image
                src={man3}
                className=" w-[500px] rounded-md"
                alt="man photo"
              />
              <div className=" space-y-8">
                <h2 className=" text-3xl font-semibold mt-10 md:mt-0">
                  Project Title
                </h2>
                <p className=" max-w-[750px] leading-8">
                  Project Description: dolores commodi suscipit. Necessitatibus
                  eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. suscipit. Necessitatibus eius consequatur
                  ex aliquid fuga eum quidem. Sit sint consectetur velit.
                </p>
                <div className=" flex  items-end gap-x-3">
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    Next JS
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    React JS
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    Python
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    HTML
                  </p>
                </div>
                <div className=" flex items-center justify-center md:justify-start  gap-x-4">
                  <Link
                    href="#"
                    className=" px-16 py-2 border border-primary rounded-md  "
                  >
                    Demo
                  </Link>
                  <Link
                    href="#"
                    className=" btn px-3 py-2 bg-white text-black rounded-md flex items-center gap-x-3  "
                  >
                    <AiFillGithub size={25} /> KILDEKODE
                  </Link>
                </div>
              </div>
            </div>
            <div className=" flex flex-col md:flex-row   gap-x-14">
              <Image
                src={man4}
                className=" w-[500px] rounded-md"
                alt="man photo"
              />
              <div className=" space-y-8">
                <h2 className=" text-3xl font-semibold mt-10 md:mt-0">
                  Project Title
                </h2>
                <p className=" max-w-[750px] leading-8">
                  Project Description: dolores commodi suscipit. Necessitatibus
                  eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. suscipit. Necessitatibus eius consequatur
                  ex aliquid fuga eum quidem. Sit sint consectetur velit.
                </p>
                <div className=" flex  items-end gap-x-3">
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    Next JS
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    React JS
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    Python
                  </p>
                  <p className=" bg-[#23455A] px-5 py-2 rounded-full cursor-pointer">
                    HTML
                  </p>
                </div>
                <div className=" flex items-center justify-center md:justify-start  gap-x-4">
                  <Link
                    href="#"
                    className=" px-16 py-2 border border-primary rounded-md  "
                  >
                    Demo
                  </Link>
                  <Link
                    href="#"
                    className=" btn px-3 py-2 bg-white text-black rounded-md flex items-center gap-x-3  "
                  >
                    <AiFillGithub size={25} /> KILDEKODE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prosjekter;
