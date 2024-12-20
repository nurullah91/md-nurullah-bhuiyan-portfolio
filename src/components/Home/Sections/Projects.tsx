import { getAllProjects } from "@/services/projects";
import ProjectCard from "../ProjectCard";
import { TProject } from "@/types";
import SectionHeading from "@/components/SectionHeading";
import CustomContainer from "@/components/CustomContainer";

export default async function Projects() {
  const projects: TProject[] = await getAllProjects();
  return (
    <section id="projects" className="my-12">
      <CustomContainer>
        <SectionHeading title="My Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden z-0">
          {projects.slice(0, 3).map((item) => (
            <ProjectCard key={item._id} item={item}></ProjectCard>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}
