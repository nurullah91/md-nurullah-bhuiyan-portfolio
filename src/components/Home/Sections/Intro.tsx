import myImg from "@/assets/nurullah-intro.jpg";
import { FaDownload } from "react-icons/fa";
import "../intro.css";
import Image from "next/image";
import NumberCountUp from "../../NumberCountUp";
import TextWriting from "../../TextWriting";
import CustomContainer from "@/components/CustomContainer";

export default function Intro() {
  return (
    <section id="intro" className="introBG py-24">
      <CustomContainer>
        <div
          className="flex flex-col-reverse
   lg:flex-row"
        >
          <div>
            <h2 className="font-bold my-4 w-full text-white text-4xl">
              Hi, I&apos;am
              <br /> <span className="text-rose-500">Md Nurullah Bhuiyan</span>
            </h2>

            {/* Text writing */}
            <h3 className="text-3xl text-white my-4 font-semibold">
              <TextWriting
                texts={[
                  "Full Stack developer (MERN)",
                  "React Developer",
                  "Next.js developer",
                ]}
              />
            </h3>

            <p className="text-white my-4">
              I&apos;m a passionate MERN Stack developer with a knack for
              crafting modern web applications. I specialize in building
              intuitive user interfaces and scalable backend systems to deliver
              seamless experiences.
            </p>

            <div className="my-8">
              <a
                className="bg-gradient-to-r from-blue-500 to-blue-800  px-4 py-3 rounded"
                href="https://drive.google.com/file/d/13q0s4DHUAxEHpvtbfw2dqlcvlLUUCShN/view?usp=sharing"
              >
                <FaDownload className="inline"></FaDownload> Download Resume
              </a>
            </div>
          </div>
          <div className="relative lg:ml-8 lg:w-[50%]  md:w-[40%]">
            <Image src={myImg} alt="Md Nurullah" className="rounded-lg" />
            <div className="text-white bg-blue-500 bg-opacity-60 absolute bottom-5 right-5 px-6 py-4 rounded">
              <p>Projects</p>
              <h2 className="text-3xl  font-semibold">
                <NumberCountUp delay={2} start={0} end={55} /> + Projects
              </h2>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
