import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import { database } from "../utils/database";
import { SliderService } from "@/components/Sliders";

export const metadata = {
  title: "WEBRISE - Design, Development, On-site SEO, and Hosting",
  description:
    "We specialize in creating tailored websites for your unique needs, including Design, Development, Hosting and On-site SEO.",
  openGraph: {
    title: "WEBRISE - Our Services",
    description:
      "Professional web design, development, SEO and hosting services tailored to your business needs.",
    images: [
      {
        url: database.servicesPage_data.heroSection.imageurl,
        width: 1200,
        height: 630,
        alt: "Webrise services overview",
      },
    ],
  },
};
const servicesPage_data = database.servicesPage_data;

export default function Services() {
  return (
    <>
      <AnimateCursor />
      <LenisScroll />

      <section className={styles.services_container}>
        <div className={styles.services_hero_section}>
          <div className={styles.hero_tittle_container}>
            <div style={{ overflow: "hidden" }}>
              <h1>WHAT</h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h2>WE</h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h2>DO</h2>
            </div>
          </div>
          <div className={styles.hero_content_container}>
            <div style={{ overflow: "hidden", textAlign: "end" }}>
              <h4>(Services)</h4>
            </div>
            <div className={styles.hero_image_container}>
              <Image
                src={servicesPage_data.heroSection.imageurl}
                width={900}
                height={400}
                alt=""
              />
            </div>
          </div>
        </div>

        <p className={styles.services_opener_paragraph}>
          We specialize in creating tailored websites for your unique needs,
          which includes <span>Design</span>, <span>Development</span>,
          <span> Hosting</span> and <span>On-site SEO</span>.
        </p>

        <div className={styles.services_content_section}>
          {servicesPage_data.contentSection.specialities.map(
            ({ title, paragraph, imageurl, alt }, index) => (
              <div className={styles.content_speciality_section} key={index}>
                <div>
                  <h3>{title}</h3>
                  <p>{paragraph}</p>
                  <Link href="/contact">
                    <button>Learn more</button>
                  </Link>
                </div>
                <div className={styles.content_speciality_image}>
                  <Image src={imageurl} width={600} height={650} alt={alt} />
                </div>
              </div>
            )
          )}
        </div>

        <SliderService data={servicesPage_data} />
      </section>
    </>
  );
}
