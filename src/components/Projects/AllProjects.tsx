import { TProject } from "@/types";
import CustomContainer from "../CustomContainer";
import { getAllProjects } from "@/services/projects";
import ProjectCard from "../Home/ProjectCard";

export default async function AllProjects() {
  const projects: TProject[] = await getAllProjects();
  return (
    <section id="projects" className="my-12">
      <CustomContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden z-0">
          {projects?.map((item) => (
            <ProjectCard key={item._id} item={item}></ProjectCard>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}
