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

          <div className="flex flex-col md:flex-row gap-6 justify-between items-start border-t-2 py-8">
            <div className="w-full">
              <h2 className="text-3xl font-semibold text-rose-500">
                Frontend Skills
              </h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {frontendSkills.map((item) => (
                <div
                  className="flex flex-col items-center justify-end"
                  key={item._id}
                >
                  <Image width={150} height={150} src={item.icon} alt="Icon" />
                  <h3 className="text-gray-200 ">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start border-y-2 py-8">
            <div className="w-full">
              <h2 className="text-3xl font-semibold text-rose-500">
                Backend Skills
              </h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {backendSkills.map((item) => (
                <div
                  className="flex flex-col items-center justify-end"
                  key={item._id}
                >
                  <Image width={150} height={150} src={item.icon} alt="Icon" />
                  <h3 className="text-gray-200 ">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Others skills */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start border-b-2 py-8">
            <div className="w-full">
              <h2 className="text-3xl font-semibold text-rose-500">
                Others Skills
              </h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {othersSkills.map((item) => (
                <div
                  className="flex flex-col items-center justify-end"
                  key={item._id}
                >
                  <Image width={150} height={150} src={item.icon} alt="Icon" />
                  <h3 className="text-gray-200 ">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
}
