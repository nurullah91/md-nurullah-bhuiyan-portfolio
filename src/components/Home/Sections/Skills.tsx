import { getAllSkills } from "@/services/skills";
import ParticleBG from "../ParticleBG";
import Image from "next/image";

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
    <section id="skills" className="py-10 skillsBG">
      <div className="relative">
        <ParticleBG />

        <div className="">
          <h2 className="text-4xl text-white font-bold mb-10 text-center">
            My Skills
          </h2>

          <h2 className="text-3xl font-bold text-center my-5  py-4 text-rose-400">
            Frontend Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 lg:w-9/12 mx-auto">
            {frontendSkills.map((item) => (
              <div className="flex items-center" key={item._id}>
                <Image
                  width={200}
                  height={80}
                  className="w-[15%] mr-3"
                  src={item.icon}
                  alt="Icon"
                />
                <h3 className="text-3xl font-semibold text-slate-100 ">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center my-5  py-4 text-rose-400">
            Backend Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 lg:w-9/12 mx-auto">
            {backendSkills.map((item) => (
              <div className="flex items-center" key={item._id}>
                <Image
                  width={200}
                  height={80}
                  className="w-[15%] mr-3"
                  src={item.icon}
                  alt="Icon"
                />
                <h3 className="text-3xl font-semibold text-slate-100 ">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center my-5  py-4 text-rose-400">
            Others Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 lg:w-9/12 mx-auto">
            {othersSkills.map((item) => (
              <div className="flex items-center" key={item._id}>
                <Image
                  width={200}
                  height={80}
                  className="w-[15%] mr-3"
                  src={item.icon}
                  alt="Icon"
                />
                <h3 className="text-3xl font-semibold text-slate-100 ">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
