import AllProjects from "@/components/Projects/AllProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All the projects of Md Nurullah Bhuiyan Full stack web developer. A MERN stack based full stack developer with advance typescript redux and next js experience",
};
export default function Projects() {
  return (
    <div className="pt-16">
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#ffff",
          fontSize: "1.875rem",
        }}
      >
        All Projects
      </h1>
      <AllProjects />
    </div>
  );
}
