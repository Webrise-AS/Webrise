"use client";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import AnimateCursor from "@/components/AnimateCursor";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import LenisScroll from "@/components/LenisScroll";

const servicesPage_data = {
  heroSection: {
    imageurl: `https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723aa9b8b7fc64fc7bf9a_Cons-p-500.webp`,
  },

  sliderSection: {
    images: [
      {
        imageurl: `/Images/services/tech-stack/nextjs.svg`,
      },

      {
        imageurl: `/Images/services/tech-stack/react.svg`,
      },

      {
        imageurl: `/Images/services/tech-stack/supabase.svg`,
      },

      {
        imageurl: `/Images/services/tech-stack/medusa.svg`,
      },

      {
        imageurl: `/Images/services/tech-stack/typescript.svg`,
      },

      {
        imageurl: `/Images/services/tech-stack/payload.svg`,
      },

      {
        imageurl: `/Images/services/tech-stack/vercel.svg`,
      },

      {
        imageurl: `/Images/services/tech-stack/tailwindcss.svg`,
      },

      {
        imageurl: `/Images/services/tech-stack/sass.svg`,
      },

      {
        imageurl: `/Images/services/tech-stack/wordpress.svg`,
      },
    ],
  },

  contentSection: {
    specialities: [
      {
        title: `Design`,
        paragraph: `
          Adapting to Communication Styles: Digital communication varies
          greatly from traditional methods. Couples need to adapt and
          understand each other’s preferred styles, whether it’s texting,
          emailing, or video calls. This helps in reducing
          misunderstandings and fostering better communication. Balancing
          Online Interaction: Digital age relationships often involve an
          online component. Couples should discuss and agree on their
          digital interaction levels, including social media usage, online
          friendships, and digital footprints that they are comfortable
          with.`,
        imageurl: `https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723ab81a3f7d07a7a97d1_Testimonial.webp`,
        alt: ``,
      },

      {
        title: `Development`,
        paragraph: `
          Adapting to Communication Styles: Digital communication varies
          greatly from traditional methods. Couples need to adapt and
          understand each other’s preferred styles, whether it’s texting,
          emailing, or video calls. This helps in reducing
          misunderstandings and fostering better communication. Balancing
          Online Interaction: Digital age relationships often involve an
          online component. Couples should discuss and agree on their
          digital interaction levels, including social media usage, online
          friendships, and digital footprints that they are comfortable
          with.`,
        imageurl: `https://assets-global.website-files.com/6606f0f658b42ca7220e36c3/6609a5f1b576d554df6331e4_Article%20Thumbnail%20%235-p-500.png`,
        alt: ``,
      },

      {
        title: `On-site SEO`,
        paragraph: `
          Adapting to Communication Styles: Digital communication varies
          greatly from traditional methods. Couples need to adapt and
          understand each other’s preferred styles, whether it’s texting,
          emailing, or video calls. This helps in reducing
          misunderstandings and fostering better communication. Balancing
          Online Interaction: Digital age relationships often involve an
          online component. Couples should discuss and agree on their
          digital interaction levels, including social media usage, online
          friendships, and digital footprints that they are comfortable
          with.`,
        imageurl: `https://assets-global.website-files.com/6606f0f658b42ca7220e36c3/6609a5bbceb2ea2527a6dab2_Article%20Thumbnail%20%233-p-500.png`,
        alt: ``,
      },

      {
        title: `Hosting`,
        paragraph: `
          Adapting to Communication Styles: Digital communication varies
          greatly from traditional methods. Couples need to adapt and
          understand each other’s preferred styles, whether it’s texting,
          emailing, or video calls. This helps in reducing
          misunderstandings and fostering better communication. Balancing
          Online Interaction: Digital age relationships often involve an
          online component. Couples should discuss and agree on their
          digital interaction levels, including social media usage, online
          friendships, and digital footprints that they are comfortable
          with.`,
        imageurl: `https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723b3e10d6cd0f0ca10f6_Camera-p-800.webp`,
        alt: ``,
      },
    ],
  },
};

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

        <div className={styles.services_slider_section}>
          <span>&quot;We got the right tools for the job!&quot;</span>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {servicesPage_data.sliderSection.images.map((image, i) => (
                <div className={styles.embla__slide} key={i}>
                  <Image
                    src={image.imageurl}
                    height={200}
                    width={200}
                    alt="Logo of one of the tech stacks that we use"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.services_content_section}>
          {servicesPage_data.contentSection.specialities.map(
            (speciality, i) => (
              <div className={styles.content_speciality_section} key={i}>
                <div>
                  <h3>{speciality.title}</h3>
                  <p>{speciality.paragraph}</p>
                  <Link href="/contact">
                    <button>Learn more</button>
                  </Link>
                </div>
                <div className={styles.content_speciality_image}>
                  <Image
                    src={speciality.imageurl}
                    width={600}
                    height={650}
                    alt={speciality.alt}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
