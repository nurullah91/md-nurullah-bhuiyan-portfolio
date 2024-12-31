import Image from "next/image";
import aboutImg from "@/assets/Nurullah3.jpeg";
import SectionHeading from "@/components/SectionHeading";
import CustomContainer from "@/components/CustomContainer";
const About = () => {
  return (
    <section id="about" className="aboutBG my-12">
      <CustomContainer>
        <SectionHeading title="About" />

        <div className="lg:flex items-center gap-8">
          <div className="lg:w-[50%]">
            <Image
              className="w-[100%] mx-auto rounded-md"
              src={aboutImg}
              alt="Md Nurullah Bhuiyan"
            />
          </div>

          <div className="lg:w-[50%]">
            <h3 className="text-3xl text-rose-500 font-bold my-5">
              I am ready to be hired
            </h3>
            <p className="text-justify">
              Hello, I&apos;m Md Nurullah Bhuiyan, a dedicated web developer
              with a strong focus on MERN stack and modern web technologies.
              While my academic background isn&apos;t in Computer Science, my
              passion for technology and problem-solving inspired me to dive
              into web development. Over the past 1.5 years, I&apos;ve gained
              valuable experience building dynamic, interactive, and
              user-friendly web applications. I enjoy collaborating with teams
              to deliver innovative solutions and continuously seek
              opportunities to refine my skills in this fast-evolving field. My
              journey reflects resilience and a commitment to growth, and
              I&apos;m excited to contribute to creating meaningful web
              experiences. Let&apos;s work together to build something amazing!
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default About;
