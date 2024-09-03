"use client";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsArrowUpRight } from "react-icons/bs";
import Accordion from "@/components/accordion";
import AnimatedCursor from "react-animated-cursor";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Gallery from "@/components/gallery";
import Link from "next/link";
import MediaIcons from "@/components/MediaIcons";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      delay: 3500,
      stopOnMouseEnter: false,
      watchDrag: false,
    }),
  ]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1.95", "-0.35"],
  });

  return (
    <>
      <Head>
        <title>Home | Webrise</title>
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

      <div className={styles.home_container}>
        <section className={styles.hero_container}></section>
        <section className={styles.about_container}>
          <div className={styles.about_content_left}>
            <motion.div
              ref={ref}
              style={{ scale: scrollYProgress, opacity: scrollYProgress }}
            >
              <Image
                src="https://placehold.jp/400x450.png"
                width={400}
                height={450}
                alt=""
              />
            </motion.div>
          </div>
          <div className={styles.about_content_right}>
            <p>
              <span>
                At Webrise, we are a dedicated web design agency comprised of a
                team of creative professionals committed to helping your
                business thrive in the ever-changing digital landscape.
                <br />
                <br />
                Our mission is to design and develop visually stunning and
                highly functional websites that perfectly reflect your brand and
                meet your unique needs.
              </span>
            </p>
          </div>
        </section>
        <section className={styles.project_container}>
          <Gallery />
          <motion.div
            className={styles.project_button_container}
            animate={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href={"/projects"}>
              <button className={styles.project_button}>
                CASE STUDIES <BsArrowUpRight />
              </button>
            </Link>
          </motion.div>
        </section>
        <section className={styles.social_container}>
          <div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "24.5vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                Follow our
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "24.5vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                journey to
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "24.5vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                PROPEL BRANDS
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "24.5vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                TO all NEW
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "24.5vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                HEIGHTS
              </motion.h2>
            </div>
          </div>
          <MediaIcons />
          <motion.div
            animate={{ opacity: 0, scale: 0.5, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 1 }}
          >
            <Image
              src="https://placehold.jp/1318x350.png"
              width={1318}
              height={350}
              alt=""
            />
          </motion.div>
        </section>
        <section className={styles.article_container}>
          <div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "13.5vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                LATEST
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "13.5vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                ARTICLES
              </motion.h2>
            </div>
          </div>
          <div className={styles.article_content}>
            <div className={styles.article_content_top}>
              <motion.h3
                animate={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                (01)
              </motion.h3>
              <motion.span
                animate={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Unveiling the Future of Web Design: Trends to Watch in
                Berlin&apos;s Digital Scene
              </motion.span>

              <Image
                src="https://placehold.jp/204x306.png"
                width={204}
                height={306}
                alt=""
              />
            </div>
            <div className={styles.article_content_bottom}>
              <motion.h3
                animate={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                (02)
              </motion.h3>
              <motion.span
                animate={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Inside Strobe™: A Day in the Life of Berlin&apos;s Most
                Innovative Creative Team
              </motion.span>
              <Image
                src="https://placehold.jp/204x306.png"
                width={204}
                height={306}
                alt=""
              />
            </div>
            <div className={styles.article_content_bottom}>
              <motion.h3
                animate={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                (03)
              </motion.h3>
              <motion.span
                animate={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Sustainable Design: Strobe™&apos;s Approach to Eco-Friendly
                Digital Solutions
              </motion.span>
              <Image
                src="https://placehold.jp/204x306.png"
                width={204}
                height={306}
                alt=""
              />
            </div>
            <div className={styles.article_content_bottom}>
              <motion.h3
                animate={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                (04)
              </motion.h3>
              <motion.span
                animate={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Unveiling the Future of Web Design: Trends to Watch in
                Berlin&apos;s Digital Scene
              </motion.span>
              <Image
                src="https://placehold.jp/204x306.png"
                width={204}
                height={306}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className={styles.feedback_container}>
          <div className={styles.feedback_content}>
            <div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  animate={{ y: "21vh", skewY: 15 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  HAPPY
                </motion.h2>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  animate={{ y: "21vh", skewY: 15 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  CLIENTS
                </motion.h2>
              </div>
            </div>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>
                <div className={styles.embla__slide}>
                  <h3>Lena M. – Founder of Caffeine Coders</h3>
                  <p>
                    &quot;Webrise transformed our digital presence with a
                    stunning website that not only looks sleek but functions
                    like a dream. Our site now truly reflects the vibrant energy
                    of our coding café in Berlin.&quot;
                  </p>
                </div>
                <div className={styles.embla__slide}>
                  <h3>Marco G. – Head Chef at Pasta Palette</h3>
                  <p>
                    &quot;The creativity of Webrise is unmatched. They&apos;ve
                    crafted an online experience that captures the essence of
                    our kitchen&apos;s innovation. It&apos;s not just our pasta
                    that&apos;s artful now—our digital platform is too!&quot;
                  </p>
                </div>
                <div className={styles.embla__slide}>
                  <h3>Lena M. – Founder of Caffeine Coders</h3>
                  <p>
                    &quot;Webrise transformed our digital presence with a
                    stunning website that not only looks sleek but functions
                    like a dream. Our site now truly reflects the vibrant energy
                    of our coding café in Berlin.&quot;
                  </p>
                </div>
                <div className={styles.embla__slide}>
                  <h3>Marco G. – Head Chef at Pasta Palette</h3>
                  <p>
                    &quot;The creativity of Webrise is unmatched. They&apos;ve
                    crafted an online experience that captures the essence of
                    our kitchen&apos;s innovation. It&apos;s not just our pasta
                    that&apos;s artful now—our digital platform is too!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.hire_container}>
          <div className={styles.hire_content}>
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
              <button>Learn more</button>
            </motion.div>
          </div>
          <div className={styles.hire_overlay}></div>
        </section>
        <section className={styles.info_container}>
          <div className={styles.info_title}>
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                animate={{ y: "14vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                YOU ASK
              </motion.h3>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                animate={{ y: "14vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                WE ANSWER
              </motion.h3>
            </div>
          </div>
          <div style={styles.info_accordion}>
            <Accordion />
          </div>
        </section>
      </div>
    </>
  );
}
