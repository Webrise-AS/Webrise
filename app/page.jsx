import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import { database } from "@/app/utils/database";
import { HomeContent } from "@/components/Content";

export const metadata = {
  title: "WEBRISE - Websites, SEO, and maintenance",
  description:
    "WEBRISE is a web development company based in Oslo, Norway, specializing in creating tailored websites for small to medium-sized businesses. We focus on clean design, performance, and usability to help our clients stand out with solutions that fit their unique needs and goals.",
};

const homePage_data = database.homePage_data;

export default function Home() {
  return (
    <>
      <AnimateCursor />
      <LenisScroll />
      <HomeContent data={homePage_data} />
    </>
  );
}
