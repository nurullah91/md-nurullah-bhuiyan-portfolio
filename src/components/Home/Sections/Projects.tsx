import { getAllProjects } from "@/services/projects";
import ProjectCard from "../ProjectCard";
import { TProject } from "@/types";
import SectionHeading from "@/components/SectionHeading";
import CustomContainer from "@/components/CustomContainer";
import Link from "next/link";

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
        <div className="mt-8 text-center">
          <Link
            href={"/projects"}
            className="bg-gradient-to-r from-blue-500 to-blue-800  px-4 py-3 rounded"
          >
            See more
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
}
