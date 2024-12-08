import { getAllSkills } from "@/services/skills";
// import ParticleBG from "../ParticleBG";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CustomContainer from "@/components/CustomContainer";

export type TSkills = {
  _id: string;
  name: string;
  icon: string;
};

export default async function Skills() {
  const frontendSkills: TSkills[] = await getAllSkills("frontend");
  const backendSkills: TSkills[] = await getAllSkills("backend");
  const othersSkills: TSkills[] = await getAllSkills("others");

  return (
    <section id="skills" className="skillsBG my-12">
      <div className="relative">
        {/* <ParticleBG /> */}

        <CustomContainer>
          <SectionHeading title="My Skills" />

          <h2 className="text-3xl font-semibold text-center mt-8 text-rose-500">
            Frontend Skills
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {frontendSkills.map((item) => (
              <div className="flex items-center" key={item._id}>
                <Image
                  width={200}
                  height={80}
                  className="w-[15%] mr-3"
                  src={item.icon}
                  alt="Icon"
                />
                <h3 className="text-xl text-slate-100 ">{item.name}</h3>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold text-center mt-8 text-rose-500">
            Backend Skills
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {backendSkills.map((item) => (
              <div className="flex items-center" key={item._id}>
                <Image
                  width={200}
                  height={80}
                  className="w-[15%] mr-3"
                  src={item.icon}
                  alt="Icon"
                />
                <h3 className="text-xl  text-slate-100 ">{item.name}</h3>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold text-center mt-6 text-rose-500">
            Others Skills
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {othersSkills.map((item) => (
              <div className="flex items-center" key={item._id}>
                <Image
                  width={200}
                  height={80}
                  className="w-[15%] mr-3"
                  src={item.icon}
                  alt="Icon"
                />
                <h3 className="text-xl  text-slate-100 ">{item.name}</h3>
              </div>
            ))}
          </div>
        </CustomContainer>
      </div>
    </section>
  );
}
