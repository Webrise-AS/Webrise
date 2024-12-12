"use client";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsArrowUpRight, BsCheck, BsPatchCheckFill } from "react-icons/bs";
import Accordion from "@/components/Accordion";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Gallery from "@/components/gallery";
import Link from "next/link";
import MediaIcons from "@/components/MediaIcons";
import AnimateCursor from "@/components/AnimateCursor";
import AutoScroll from "embla-carousel-auto-scroll";
import { Typewriter } from "react-simple-typewriter";
import LenisScroll from "@/components/LenisScroll";

const homePage_data = {
  heroSection: {
    imageurl: `https://placehold.jp/151515/ffffff/500x611.png`,
    imageAlt: `image of ...`,

    brandSlider: [
      {
        imageurl: `https://placehold.jp/151515/ffffff/200x60.png`,
      },
      {
        imageurl: `https://placehold.jp/151515/ffffff/200x61.png`,
      },
      {
        imageurl: `https://placehold.jp/151515/ffffff/200x62.png`,
      },
      {
        imageurl: `https://placehold.jp/151515/ffffff/200x63.png`,
      },
      {
        imageurl: `https://placehold.jp/151515/ffffff/200x64.png`,
      },
      {
        imageurl: `https://placehold.jp/151515/ffffff/200x65.png`,
      },
      {
        imageurl: `https://placehold.jp/151515/ffffff/200x66.png`,
      },
    ],
  },

  aboutSection: {
    imageurl: `https://placehold.jp/400x450.png`,
    imageAlt: `image of about of...`,
  },

  socialSection: {
    imageurl: `https://placehold.jp/1318x350.png`,
    imageAlt: `image of social of...`,
  },

  articleSection: [
    {
      title: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
      subtittle: "(01)",
      imageurl: `https://placehold.jp/204x306.png`,
      imageAlt: `image related to the article`,
    },
    {
      title: `Inside Webrise™: A Day in the Life of Berlin's Most Innovative Creative Team`,
      subtittle: "(02)",
      imageurl: `https://placehold.jp/204x306.png`,
      imageAlt: `image related to the article`,
    },
    {
      title: `Sustainable Design: Webrise™'s Approach to Eco-Friendly Digital Solutions`,
      subtittle: "(03)",
      imageurl: `https://placehold.jp/204x306.png`,
      imageAlt: `image related to the article`,
    },
    {
      title: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
      subtittle: "(04)",
      imageurl: `https://placehold.jp/204x306.png`,
      imageAlt: `image related to the article`,
    },
  ],

  feedbackSection: [
    {
      id: 1,
      client: `Lena M. – Founder of Caffeine Coders`,
      review: `The creativity of Webrise is unmatched. They've
        crafted an online experience that captures the essence of
        our kitchen's innovation. It's not just our pasta
        that's artful now—our digital platform is too!`,
    },

    {
      id: 2,
      client: `Marco G. – Head Chef at Pasta Palette`,
      review: `Strobe™ transformed our digital presence with a stunning website that not only
        looks sleek but functions like a dream. Our site now truly reflects the vibrant
        energy of our coding café in Berlin.`,
    },

    {
      id: 3,
      client: `Linda M. – Founder of Caffeine Coders`,
      review: `The creativity of Webrise is unmatched. They've
        crafted an online experience that captures the essence of
        our kitchen's innovation. It's not just our pasta
        that's artful now—our digital platform is too!`,
    },

    {
      id: 4,
      client: `Abel Y. – Head Chef at Pasta Palette`,
      review: `Strobe™ transformed our digital presence with a stunning website that not only
        looks sleek but functions like a dream. Our site now truly reflects the vibrant
        energy of our coding café in Berlin.`,
    },
  ],

  infoSection: {
    accordion: [
      {
        id: 1,
        question: "What sets Webrise apart?",
        answer: `Webrise™ stands out through our unique fusion of Berlin's artistic heritage
          with modern digital innovation. Our approach is not just about creating visually
          stunning designs; it's about delivering functional, user-centered experiences
          that drive results and embody the vibrant spirit of our city.`,
      },
      {
        id: 2,
        question: "How does Webrise ensure trends?",
        answer: `Webrise™ stands out through our unique fusion of Berlin's artistic heritage
          with modern digital innovation. Our approach is not just about creating visually
          stunning designs; it's about delivering functional, user-centered experiences
          that drive results and embody the vibrant spirit of our city.`,
      },
      {
        id: 3,
        question: "Can Webrise help my brand?",
        answer: `Webrise™ stands out through our unique fusion of Berlin's artistic heritage
          with modern digital innovation. Our approach is not just about creating visually
          stunning designs; it's about delivering functional, user-centered experiences
          that drive results and embody the vibrant spirit of our city.`,
      },
      {
        id: 4,
        question: "What is the process?",
        answer: `Webrise™ stands out through our unique fusion of Berlin's artistic heritage
          with modern digital innovation. Our approach is not just about creating visually
          stunning designs; it's about delivering functional, user-centered experiences
          that drive results and embody the vibrant spirit of our city.`,
      },
    ],
  },
};

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
    AutoScroll({ speed: 2, direction: "backward" }),
  ]);

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

      <AnimateCursor />
      <LenisScroll />

      <section className={styles.home_container}>
        <section className={styles.hero_container}>
          <div className={styles.hero_content}>
            <div className={styles.hero_textfield}>
              <div style={{ overflow: "hidden" }}>
                <motion.h3
                  initial={{ y: "9vh", skewY: 5 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  customer satisfaction guarantee
                  <BsPatchCheckFill />
                </motion.h3>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "23.5vh", skewY: 10 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  MEMORABLE
                </motion.h1>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  className={styles.hero_styler}
                  initial={{ y: "23.2vh", skewY: 10 }}
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
                  initial={{ y: "23.5vh", skewY: 10 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  THAT SELL.
                </motion.h2>
              </div>
              <div className={styles.subHero_group}>
                <div style={{ overflow: "hidden" }}>
                  <motion.p
                    initial={{ y: "9vh", skewY: 1 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ ease: "easeIn", duration: 0.6 }}
                  >
                    Want a website that<span> customers love</span>? We build
                    reliable, <span>highly functional</span> and of course multi
                    device
                    <span> responsive</span> websites
                    <span> for brands like yours</span>.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ y: "15.05vh" }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
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
                        Book a call
                      </button>
                    </Link>
                    <Link href={"/projects"}>
                      <button className={styles.hero_subBtn}>
                        Our Portfolio
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              className={styles.hero_image_section}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              <Image
                src={homePage_data.heroSection.imageurl}
                width={450}
                height={663.2}
                alt={homePage_data.heroSection.imageAlt}
              />
            </motion.div>
          </div>
          <div className={styles.hero_slider}>
            <div className={styles.embla} ref={emblaRef2}>
              <div className={styles.embla__container}>
                {homePage_data.heroSection.brandSlider.map((slider, i) => (
                  <div className={styles.embla__slide} key={i}>
                    <Image
                      src={slider.imageurl}
                      width={200}
                      height={60}
                      alt="image of one of our clients logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.about_container}>
          <div className={styles.about_content_left}>
            <motion.div
              ref={ref}
              style={{ scale: scrollYProgress, opacity: scrollYProgress }}
              className={styles.image_container}
            >
              <Image
                src={homePage_data.aboutSection.imageurl}
                width={400}
                height={450}
                alt={homePage_data.aboutSection.imageAlt}
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
            transition={{ ease: "easeIn", duration: 0.6 }}
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
          <div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "12vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                LATEST
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                animate={{ y: "12vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                ARTICLES
              </motion.h2>
            </div>
          </div>
          <div className={styles.article_content}>
            {homePage_data.articleSection.map((article, i) => (
              <div className={styles.single_article} key={i}>
                <motion.h3
                  animate={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {article.subtittle}
                </motion.h3>
                <motion.span
                  animate={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {article.title}
                </motion.span>
                <div className={styles.image_container}>
                  <Image
                    src={article.imageurl}
                    width={204}
                    height={306}
                    alt={article.imageAlt}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.feedback_container}>
          <div className={styles.feedback_content}>
            <div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  animate={{ y: "35vh", skewY: 20 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  HAPPY
                </motion.h2>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  animate={{ y: "35vh", skewY: 20 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                >
                  CLIENTS
                </motion.h2>
              </div>
            </div>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>
                {homePage_data.feedbackSection.map((info, i) => (
                  <div className={styles.embla__slide} key={i}>
                    <h3>{info.client}</h3>
                    <p>{info.review}</p>
                  </div>
                ))}
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
                animate={{ y: "13.3vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                YOU ASK
              </motion.h3>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                animate={{ y: "13.3vh", skewY: 15 }}
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
