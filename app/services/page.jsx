"use client";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Lenis from "lenis";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Services() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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

      <AnimatedCursor
        innerSize={12}
        outerSize={60}
        innerScale={1.5}
        outerScale={1.5}
        outerAlpha={15}
        hasBlendMode={true}
        showSystemCursor={true}
        outerStyle={{
          mixBlendMode: "plus-lighter",
          zIndex: "9999",
        }}
        innerStyle={{
          borderRadius: "0px 10px 10px 10px",
          zIndex: "9999",
          backgroundColor: "#151515",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <section className={styles.services_container}>
        <div className={styles.services_hero_section}>
          <div>
            <span>(Services)</span>
            <div className={styles.Services_hero_image_container}>
              <Image
                src="https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723aa9b8b7fc64fc7bf9a_Cons-p-500.webp"
                width={900}
                height={400}
                alt=""
              />
            </div>
          </div>
          <h1>WHAT WE DO</h1>
        </div>
        <div className={styles.services_content_section}>
          <div className={styles.content_speciality_section}>
            <div>
              <h2>Webdevelopment</h2>
              <p>
                Adapting to Communication Styles: Digital communication varies
                greatly from traditional methods. Couples need to adapt and
                understand each other’s preferred styles, whether it’s texting,
                emailing, or video calls. This helps in reducing
                misunderstandings and fostering better communication. Balancing
                Online Interaction: Digital age relationships often involve an
                online component. Couples should discuss and agree on their
                digital interaction levels, including social media usage, online
                friendships, and digital footprints that they are comfortable
                with.
              </p>
              <Link href="/contact">
                <button>Contact</button>
              </Link>
            </div>
            <div className={styles.content_speciality_image}>
              <Image
                src="https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723ab81a3f7d07a7a97d1_Testimonial.webp"
                width={600}
                height={650}
                alt=""
              />
            </div>
          </div>
          <div className={styles.content_speciality_section_two}>
            <div>
              <h2>Søkemotormarkedsføring - SEM</h2>
              <p>
                Adapting to Communication Styles: Digital communication varies
                greatly from traditional methods. Couples need to adapt and
                understand each other’s preferred styles, whether it’s texting,
                emailing, or video calls. This helps in reducing
                misunderstandings and fostering better communication. Balancing
                Online Interaction: Digital age relationships often involve an
                online component. Couples should discuss and agree on their
                digital interaction levels, including social media usage, online
                friendships, and digital footprints that they are comfortable
                with.
              </p>
              <Link href="/contact">
                <button>Contact</button>
              </Link>
            </div>
            <div className={styles.content_speciality_image}>
              <Image
                src="https://assets-global.website-files.com/6606f0f658b42ca7220e36c3/6609a5f1b576d554df6331e4_Article%20Thumbnail%20%235-p-500.png"
                width={600}
                height={650}
                alt=""
              />
            </div>
          </div>
          <div className={styles.content_speciality_section}>
            <div>
              <h2>Søkemotor­­optimalisering – SEO</h2>
              <p>
                Adapting to Communication Styles: Digital communication varies
                greatly from traditional methods. Couples need to adapt and
                understand each other’s preferred styles, whether it’s texting,
                emailing, or video calls. This helps in reducing
                misunderstandings and fostering better communication. Balancing
                Online Interaction: Digital age relationships often involve an
                online component. Couples should discuss and agree on their
                digital interaction levels, including social media usage, online
                friendships, and digital footprints that they are comfortable
                with.
              </p>
              <Link href="/contact">
                <button>Contact</button>
              </Link>
            </div>
            <div className={styles.content_speciality_image}>
              <Image
                src="https://assets-global.website-files.com/6606f0f658b42ca7220e36c3/6609a5bbceb2ea2527a6dab2_Article%20Thumbnail%20%233-p-500.png"
                width={600}
                height={650}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
