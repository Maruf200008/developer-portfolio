import Image from "next/image";
import { css, html, js, python, react } from "../../public/images";

const About = () => {
  return (
    <div className=" bg-[#011627] text-white  ">
      <div className=" px-10 md:px-40 py-10 ">
        <div className=" grid md:grid-cols-2 gap-x-20 mt-28">
          <div className=" space-y-5">
            <div className=" mb-14 space-y-4">
              <p className=" uppercase text-2xl font-semibold">About</p>
              <h2 className=" text-3xl md:text-5xl font-semibold text-[#FFB800]">
                James Dasher
              </h2>
            </div>
            <div className=" flex justify-between  items-center   ">
              <Image src={react} alt="logo" className=" w-[60px] md:w-[80px]" />
              <Image
                src={python}
                alt="logo"
                className=" w-[60px] md:w-[80px]"
              />
              <Image src={html} alt="logo" className=" w-[60px] md:w-[80px]" />
              <Image src={css} alt="logo" className=" w-[60px] md:w-[80px]" />
              <Image src={js} alt="logo" className=" w-[60px] md:w-[80px]" />
            </div>
            <div className=" space-y-4  ">
              <p className=" leading-8 mt-14">
                Jeg er en frontend-utvikler med erfaring i Python og har
                tidligere jobbet som intern hos Kodeverket Bergen. Der var jeg
                med på å designe og utvikle nettsider ved hjelp av verktøy som
                Figma for design og React og Next JS for utrulling av nettsidene
              </p>
              <p className=" leading-8">
                På fritiden liker jeg å jogge, gå på fjellturer med venner og å
                lese. Jeg har en lidenskap for å lære nye ting og eksperimentere
                med teknologi. For tiden lærer jeg Obsidian.md, slik at jeg kan
                lage mine egne plugins
              </p>
              <p className=" leading-8">
                Jeg går nå gjennom ulike sertifiseringer gjennom FreeCodeCamp,
                blant annet i Responsive Web Design og Python, for å
                videreutvikle mine ferdigheter.
              </p>
            </div>
          </div>
          <div className=" space-y-5 mt-16 md:mt-0">
            <p className=" uppercase text-2xl font-semibold mb-14">Skills</p>

            <div className=" space-y-7">
              <div className=" border rounded-lg px-6 md:px-16 py-7">
                <div>
                  <h2 className=" text-xl font-semibold mb-7">
                    Programming Languages
                  </h2>
                  <ul className="list-disc text-lg space-y-6">
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
              <div className=" border rounded-lg px-6 md:px-16 py-7">
                <div>
                  <h2 className=" text-xl font-semibold mb-7">
                    JavaScript Frameworks
                  </h2>
                  <ul className="list-disc text-lg space-y-6">
                    <li>React</li>
                    <li>Next,js</li>
                  </ul>
                </div>
              </div>
              <div className=" border rounded-lg px-6 md:px-16 py-7">
                <div>
                  <h2 className=" text-xl font-semibold mb-7">
                    Content Management Systems
                  </h2>
                  <ul className="list-disc text-lg space-y-6">
                    <li>Sanity.io</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </div>
              <div className=" border rounded-lg px-6 md:px-16 py-7">
                <div>
                  <h2 className=" text-xl font-semibold mb-7">
                    Kurs og sertifiseringer
                  </h2>
                  <ul className="list-disc text-lg space-y-6">
                    <li>Scientific Computing with Python 50%</li>
                    <li className=" md:hidden">
                      Scientific Computing with Python 50%
                    </li>
                    <li className=" md:hidden">
                      Scientific Computing with Python 50%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
