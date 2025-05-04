"use client";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import { database } from "../utils/database";
import Talent from "@/components/Talent";

const aboutPage_data = database.aboutPage_data;

export default function About() {
  const [emblaRef] = useEmblaCarousel({ watchDrag: false, loop: true }, [
    AutoScroll({ speed: 0.6 }),
  ]);

  const [emblaRef2] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 1.1, direction: "backward" }),
  ]);

  return (
    <>
      <Head>
        <title>About | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimateCursor />
      <LenisScroll />

      <section className={styles.about_main_container}>
        <div className={styles.about_hero_section}>
          <div className={styles.hero_section_top}>
            <div>
              <motion.div
                className={styles.image_wrapper}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                <Image
                  src={aboutPage_data.heroSection.imageOne}
                  width={299}
                  height={160}
                  alt={"image of a woman in an office useing a pc for work"}
                />
              </motion.div>
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                (About)
              </motion.span>
            </div>
            <motion.div
              className={styles.image_wrapperTwo}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              <Image
                src={aboutPage_data.heroSection.imageTwo}
                width={310}
                height={454}
                alt={"image of a woman in an office useing a pc for work"}
              />
            </motion.div>
          </div>
          <div className={styles.hero_section_bottom}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "132%", skewY: 15 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                DIGITAL
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: "185%", skewY: 15 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                EXPERTS.
              </motion.h2>
            </div>
          </div>
        </div>

        <div className={styles.about_content_section}>
          <div className={styles.content_section_story}>
            <motion.p
              animate={{ y: 100, skewY: 10, opacity: 0 }}
              whileInView={{ y: 0, skewY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              We’re a small web development team based in Oslo, Norway,
              dedicated to building tailored websites for small to medium-sized
              businesses.
            </motion.p>
            <motion.p
              animate={{ y: 100, skewY: 10, opacity: 0 }}
              whileInView={{ y: 0, skewY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              With a focus on clean design, performance, and usability, we help
              our clients stand out online with solutions that fit their unique
              needs and goals. Whether you&apos;re starting from scratch or
              looking to improve an existing site, we&apos;re here to make the
              web work for you.
            </motion.p>
            <motion.p
              animate={{ y: 100, skewY: 10, opacity: 0 }}
              whileInView={{ y: 0, skewY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              We offer a complete range of services including design,
              development, on site SEO, and hosting. As a small team, we work
              closely with each client to deliver websites that are visually
              appealing, high performing, and optimized for search engines.
            </motion.p>
            <motion.p
              animate={{ y: 100, skewY: 10, opacity: 0 }}
              whileInView={{ y: 0, skewY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Our approach is personal and hands on. We take the time to
              understand your business and build solutions that truly support
              your goals. When you work with us, you get more than just a
              website. You gain a reliable digital partner who is committed to
              your success.
            </motion.p>
          </div>
          <div className={styles.content_section_sliders}>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>
                {aboutPage_data.sliderSection.images.map(
                  ({ imageurl }, index) => (
                    <div key={index} className={styles.embla__slide}>
                      <Image
                        src={imageurl}
                        width={640}
                        height={880}
                        alt="image desplaying one of our project"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={styles.embla} ref={emblaRef2}>
              <div className={styles.embla__container}>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Design</div>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Develop</div>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Optimize</div>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Host</div>
              </div>
            </div>
          </div>
          <div className={styles.content_section_info}>
            <div className={styles.section_info_image}>
              <Image
                src={aboutPage_data.infoSection.image}
                width={640}
                height={880}
                alt={"image of a woman in an office useing a pc for work"}
              />
            </div>
            <div className={styles.section_info_container}>
              <h2>OUR CORE VALUES</h2>
              <div className={styles.values_container}>
                {aboutPage_data.infoSection.values.map(
                  ({ number, title }, index) => (
                    <div className={styles.single_value} key={index}>
                      <motion.h4
                        animate={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {number}
                      </motion.h4>
                      <motion.h3
                        animate={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {title}
                      </motion.h3>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <Talent />
      </section>
    </>
  );
}
