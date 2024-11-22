import { getAllProjects } from "@/services/projects";
import ProjectCard from "../ProjectCard";
import { TProject } from "@/types";

export default async function Projects() {
  const projects: TProject[] = await getAllProjects();

  return (
    <section id="projects" className="bg-[#1b1c41] py-10">
      <div className="w-11/12 lg:w-9/12 mx-auto text-white overflow-hidden">
        <h3 className="text-4xl text-center text-white font-bold">
          My Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 overflow-hidden z-0">
          {projects.slice(0, 3).map((item) => (
            <ProjectCard key={item._id} item={item}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}
