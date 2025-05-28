import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import { ContactContent } from "@/components/Content";

export const metadata = {
  title: "Hire Web Developers | Get a Free Quote – WEBRISE",
  description:
    "Ready to start your project? Reach out to WEBRISE for a free consultation. We’re here to answer your questions and create a website that meets your needs.",
};

export default function Contact() {
  return (
    <>
      <AnimateCursor />
      <LenisScroll />
      <ContactContent />
    </>
  );
}
