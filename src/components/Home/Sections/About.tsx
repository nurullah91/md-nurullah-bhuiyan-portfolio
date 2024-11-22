import Image from "next/image";
import aboutImg from "@/assets/Nurullah3.jpeg";
const About = () => {
  return (
    <section id="about" className="aboutBG py-20">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <h2 className="text-4xl text-center py-10">About Me</h2>

        <div className="lg:flex items-center">
          <div className="lg:w-[50%] mr-10">
            <Image
              className="w-[70%] mx-auto rounded-md"
              src={aboutImg}
              alt="Md Nurullah Bhuiyan"
            />
          </div>

          <div className="lg:w-[50%]">
            <h3 className="text-3xl text-rose-500 font-bold my-5">
              I am ready to be hired
            </h3>
            <p>
              Hello, I&apos;m Md Nurullah Bhuiyan, a passionate web developer
              specializing in React. Despite a non-Computer Science background,
              my curiosity and interest in the IT field led me to web
              development. With 3 months of experience as a React developer, I
              have honed my skills in building dynamic and interactive web
              applications. I thrive on collaborating with cross-functional
              teams to create robust and user-friendly solutions. My journey may
              have taken a different path, but my determination drives me to
              continuously learn and grow in the ever-evolving world of web
              development. Let&apos;s connect and create impactful web
              experiences together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
