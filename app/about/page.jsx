import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import { database } from "../utils/database";
import { AboutMainContent } from "@/components/Content";

export const metadata = {
  title: "WEBRISE – Trusted Web Developers Since 2024",
  description:
    "WEBRISE - A team of expert developers & designers passionate about results-driven websites. See why our clients trust us. Learn our story",
};

const aboutPage_data = database.aboutPage_data;

export default function About() {
  return (
    <>
      <AnimateCursor />
      <LenisScroll />
      <AboutMainContent data={aboutPage_data} />
    </>
  );
}
