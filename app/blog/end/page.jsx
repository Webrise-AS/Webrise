import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import { database } from "@/app/utils/database";
import { BlogEndContent } from "@/components/Content";

export const metadata = {
  title: "WEBRISE - Latest Blog Posts",
  description: "",
};

const blogPage_data = database.blogPage_data;

export default function BlogEnd() {
  return (
    <>
      <AnimateCursor />
      <LenisScroll />
      <BlogEndContent data={blogPage_data} />
    </>
  );
}
