"use client";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import useSWR from "swr";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function About() {
  const [emblaRef] = useEmblaCarousel({ watchDrag: false, loop: true }, [
    AutoScroll({ speed: 1.5 }),
  ]);

  const [emblaRef2] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 2.5, direction: "backward" }),
  ]);

  const { data } = useSWR(
    "https://fakestoreapi.com/products?limit=10",
    fetcher
  );

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
                  src={
                    "https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723aa9b8b7fc64fc7bf9a_Cons-p-500.webp"
                  }
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
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              <Image
                src={
                  "https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723aa97aa99be5469fa63_About%20-%20Image-p-500.webp"
                }
                width={310}
                height={454}
                alt={"image of a woman in an office useing a pc for work"}
              />
            </motion.div>
          </div>
          <div className={styles.hero_section_bottom}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "30vh", skewY: 8 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                DIGITAL
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "30vh", skewY: 8 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                PIONEERS
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
              Situated in the pulsating heart of Berlin, Webrise thrives on the
              island’s eclectic energy and rich cultural tapestry.
            </motion.p>
            <motion.p
              animate={{ y: 100, skewY: 10, opacity: 0 }}
              whileInView={{ y: 0, skewY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Our holistic, collaborative approach is tailored to navigate the
              challenges and opportunities of our era. Experience transformative
              digital solutions that captivate and engage.
            </motion.p>
          </div>
          <div className={styles.content_section_sliders}>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>
                {data &&
                  data.map((slide) => (
                    <div key={slide.id} className={styles.embla__slide}>
                      <Image
                        src={slide.image}
                        width={640}
                        height={880}
                        alt={slide.title}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.embla} ref={emblaRef2}>
              <div className={styles.embla__container}>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Creative</div>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Pioneers</div>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Strategi</div>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Bold</div>
              </div>
            </div>
          </div>
          <div className={styles.content_section_info}>
            <motion.div
              className={styles.section_info_image}
              animate={{ y: 50, opacity: 0, scale: 0.4 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ ease: "easeIn", duration: 0.9 }}
            >
              <Image
                src={
                  "https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723ab81a3f7d07a7a97d1_Testimonial.webp"
                }
                width={640}
                height={880}
                alt={"image of a woman in an office useing a pc for work"}
              />
            </motion.div>
            <div className={styles.section_info_container}>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  animate={{ y: "14.6vh", skewY: 8 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  OUR OFFICE IS
                </motion.h2>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  animate={{ y: "14.6vh", skewY: 8 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  FULL OF ENERGY
                </motion.h2>
              </div>
              <div className={styles.values_container}>
                <div className={styles.single_value}>
                  <motion.h4
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    (01)
                  </motion.h4>
                  <motion.h3
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Creatively Bold
                  </motion.h3>
                </div>
                <div className={styles.single_value}>
                  <motion.h4
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    (02)
                  </motion.h4>
                  <motion.h3
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Digital Pioneers
                  </motion.h3>
                </div>
                <div className={styles.single_value}>
                  <motion.h4
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    (03)
                  </motion.h4>
                  <motion.h3
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Strategic Thinkers
                  </motion.h3>
                </div>
                <div className={styles.single_value}>
                  <motion.h4
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    (04)
                  </motion.h4>
                  <motion.h3
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    User-Centric
                  </motion.h3>
                </div>
                <div className={styles.single_value}>
                  <motion.h4
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    (05)
                  </motion.h4>
                  <motion.h3
                    animate={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Design Savvy
                  </motion.h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Parallax speed={-5}>
          <div className={styles.about_talent_section}>
            <div>
              <motion.p
                animate={{ y: 100, opacity: 0, skewY: 5 }}
                whileInView={{ y: 0, opacity: 1, skewY: 0 }}
                transition={{ duration: 0.6 }}
              >
                Be part of the innovation journey with Webrise. Our monthly
                insights showcase the cutting-edge trends, technologies, and
                creative strategies shaping the future. Stay informed, inspired,
                and ahead of the curve with Webrise
              </motion.p>
              <motion.div
                animate={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Link href={"http://localhost:3000/contact/"}>
                  <button>Learn more</button>
                </Link>
              </motion.div>
            </div>
            <div className={styles.about_talent_overlay}></div>
          </div>
        </Parallax>
      </section>
    </>
  );
}
