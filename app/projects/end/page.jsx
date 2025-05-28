import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import { database } from "@/app/utils/database";
import { ProjectEndContent } from "@/components/Content";

export const metadata = {
  title: "WEBRISE - Latest Projects",
  description:
    "See real-world examples of our web development projects each site is optimized for speed & conversions. Intrested? Let’s talk!",
};

const projectsPage_data = database.projectsPage_data;

export default function ProjectsEnd() {
  return (
    <>
      <AnimateCursor />
      <LenisScroll />
      <ProjectEndContent data={projectsPage_data} />
    </>
  );
}
