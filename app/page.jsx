"use client";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsArrowUpRight, BsCheck, BsPatchCheckFill } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import Accordion from "@/components/Accordion";
import { motion } from "framer-motion";
import Gallery from "@/components/gallery";
import Link from "next/link";
import MediaIcons from "@/components/MediaIcons";
import AutoScroll from "embla-carousel-auto-scroll";
import { Typewriter } from "react-simple-typewriter";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import { database } from "@/app/utils/database";
import Talent from "@/components/Talent";

const metadata = {
  title: "WEBRISE - Website, SEO, and maintenance",
  description:
    "WEBRISE is a web development team based in Oslo, Norway, specializing in creating tailored websites for small to medium-sized businesses. We focus on clean design, performance, and usability to help our clients stand out with solutions that fit their unique needs and goals.",
};

const homePage_data = database.homePage_data;

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      delay: 3500,
      stopOnMouseEnter: false,
      watchDrag: false,
    }),
  ]);

  const [emblaRef2] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 0.75, direction: "backward" }),
  ]);

  return (
    <>
      <AnimateCursor />
      <LenisScroll />

      <section className={styles.home_container}>
        <section className={styles.hero_container}>
          <div className={styles.hero_content}>
            <div className={styles.hero_textfield}>
              <div style={{ overflow: "hidden" }}>
                <h3>
                  customer satisfaction guarantee
                  <BsPatchCheckFill />
                </h3>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "160%", skewY: 10 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  MEMORABLE
                </motion.h1>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  className={styles.hero_styler}
                  initial={{ y: "160%", skewY: 10 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  <Typewriter
                    words={["WEBSITES", "WEBRISE"]}
                    loop={true}
                    cursor
                    cursorStyle="!"
                    typeSpeed={80}
                    deleteSpeed={80}
                    delaySpeed={2500}
                  />
                </motion.h2>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  initial={{ y: "160%", skewY: 10 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  THAT SELL.
                </motion.h2>
              </div>
              <div className={styles.subHero_group}>
                <div style={{ overflow: "hidden" }}>
                  <p>
                    Want a website that<span> customers love</span>? We build
                    reliable, <span>highly functional</span> and of course multi
                    device
                    <span> responsive</span> websites
                    <span> for brands like yours</span>.
                  </p>
                </div>
                <p className={styles.hero_mobile_Paragraph}>
                  Reliable, <span>highly functional </span> and multi device
                  <span> responsive </span>
                  websites for <span> brands like yours</span>
                </p>
                <div>
                  <ul>
                    <li>
                      <BsCheck />
                      earn more customers
                    </li>
                    <li>
                      <BsCheck />
                      sell more products
                    </li>
                    <li>
                      <BsCheck />
                      outshine competitiors
                    </li>
                    <li>
                      <BsCheck />
                      recruit more talent
                    </li>
                  </ul>
                  <div className={styles.hero_action_buttons}>
                    <Link href={"/contact"}>
                      <button className={styles.hero_mainBtn}>
                        Let&apos;s chat <IoIosChatbubbles />
                      </button>
                    </Link>
                    <Link href={"/projects"}>
                      <button className={styles.hero_subBtn}>
                        Our portfolio
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.hero_image_section}>
              <Image
                src={homePage_data.heroSection.imageurl}
                width={450}
                height={663.2}
                alt={homePage_data.heroSection.imageAlt}
              />
            </div>
          </div>
          <div className={styles.hero_slider}>
            <p>Meet our clients</p>
            <div className={styles.embla} ref={emblaRef2}>
              <div className={styles.embla__container}>
                {homePage_data.heroSection.brandSlider.map((slider, i) => (
                  <div className={styles.embla__slide} key={i}>
                    <Image
                      src={slider.imageurl}
                      width={200}
                      height={60}
                      alt="image of one of clients logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.about_container}>
          <div className={styles.about_content_left}>
            <div className={styles.image_container}>
              <Image
                src={homePage_data.aboutSection.imageurl}
                width={400}
                height={450}
                alt={homePage_data.aboutSection.imageAlt}
              />
            </div>
          </div>
          <div className={styles.about_content_right}>
            <p>
              <span>
                We’re a small web development team based in Oslo, Norway,
                dedicated to building tailored websites for small to
                medium-sized businesses. With a focus on clean design,
                performance,
                <br />
                <br />
                and usability we help our clients stand out online with
                solutions that fit their unique needs and goals. Whether
                you&apos;re starting from scratch or looking to improve an
                existing site, we&apos;re here to make the web work for you.
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
            transition={{ ease: "easeIn", duration: 0.6 }}
          >
            <Link href={"/projects"}>
              <button className={styles.project_button}>
                Case studies <BsArrowUpRight />
              </button>
            </Link>
          </motion.div>
        </section>
        <section className={styles.social_container}>
          <div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "160%", skewY: 13 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                Follow our
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "160%", skewY: 13 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                journey to
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "160%", skewY: 13 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                PROPEL BRANDS
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "160%", skewY: 13 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                TO all NEW
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "160%", skewY: 13 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                HEIGHTS
              </motion.h2>
            </div>
          </div>
          <MediaIcons />
          <div className={styles.social_image_container}>
            <Image
              src={homePage_data.socialSection.imageurl}
              width={1318}
              height={350}
              alt={homePage_data.socialSection.imageAlt}
            />
          </div>
        </section>
        <section className={styles.article_container}>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              animate={{ y: "100%", skewY: 9 }}
              whileInView={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              LATEST
            </motion.h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              animate={{ y: "100%", skewY: 9 }}
              whileInView={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              ARTICLES
            </motion.h2>
          </div>
          <div className={styles.article_content}>
            {homePage_data.articleSection.map(
              ({ id, subtittle, title, imageurl, imageAlt }) => (
                <Link key={id} href={"/blog/" + id}>
                  <div className={styles.single_article}>
                    <motion.h3
                      animate={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {subtittle}
                    </motion.h3>
                    <motion.span
                      animate={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {title}
                    </motion.span>
                    <div className={styles.image_container}>
                      <Image
                        src={imageurl}
                        width={204}
                        height={306}
                        alt={imageAlt}
                      />
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </section>
        <section className={styles.feedback_container}>
          <div className={styles.feedback_content}>
            <div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  animate={{ y: "153%", skewY: 9 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  HAPPY
                </motion.h2>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  animate={{ y: "153%", skewY: 9 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  CLIENTS
                </motion.h2>
              </div>
            </div>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>
                {homePage_data.feedbackSection.map(({ id, client, review }) => (
                  <div className={styles.embla__slide} key={id}>
                    <h3>{client}</h3>
                    <p>{review}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Talent />
        <section className={styles.info_container}>
          <div className={styles.info_title}>
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                animate={{ y: "130%", skewY: 11 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                YOU ASK
              </motion.h3>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                animate={{ y: "130%", skewY: 11 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                WE ANSWER
              </motion.h3>
            </div>
          </div>
          <div style={styles.info_accordion}>
            <Accordion data={homePage_data.infoSection.accordion} />
          </div>
        </section>
      </section>
    </>
  );
}
