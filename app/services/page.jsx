"use client";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import AnimateCursor from "@/components/AnimateCursor";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import LenisScroll from "@/components/LenisScroll";
import { database } from "../utils/database";

const servicesPage_data = database.servicesPage_data;

export default function Services() {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 2, direction: "backward" }),
  ]);

  return (
    <>
      <Head>
        <title>Services | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          We specialise in creating tailored websites for your unique needs,
          that includes <span>Design</span>, <span>Development</span>,
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

        <div className={styles.services_slider_section}>
          <p>We got the right tools for the job!</p>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {servicesPage_data.sliderSection.images.map(
                ({ imageurl }, index) => (
                  <div className={styles.embla__slide} key={index}>
                    <Image
                      src={imageurl}
                      height={200}
                      width={200}
                      alt="Logo of one of the tech stacks that we use"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
