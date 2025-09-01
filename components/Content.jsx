"use client";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Talent from "./Talent";
import Image from "next/image";
import { BsArrowUpRight, BsCheck, BsPatchCheckFill } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import Accordion from "@/components/Accordion";
import Gallery from "@/components/gallery";
import MediaIcons from "@/components/MediaIcons";
import { Typewriter } from "react-simple-typewriter";
import { SliderClients, SliderReview } from "@/components/Sliders";

export function HomeContent({ data }) {
  const {
    heroSection,
    aboutSection,
    socialSection,
    articleSection,
    infoSection,
  } = data;

  const textReveal = {
    hidden: { y: "160%", skewY: 10 },
    visible: { y: 0, skewY: 0, transition: { ease: "easeIn", duration: 0.6 } },
  };

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className={styles.home_container}>
        <section
          className={styles.hero_container}
          aria-labelledby="hero-heading"
        >
          <div className={styles.hero_content}>
            <div className={styles.hero_textfield}>
              <div>
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
                <div>
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
                    {[
                      "earn more customers",
                      "sell more products",
                      "outshine competitors",
                      "recruit more talent",
                    ].map((item) => (
                      <li key={item}>
                        <BsCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.hero_action_buttons}>
                    <Link href={"/contact"}>
                      <button className={styles.hero_mainBtn}>
                        Let&apos;s chat <IoIosChatbubbles aria-hidden="true" />
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
                src={heroSection.imageurl}
                width={450}
                height={663.2}
                alt={heroSection.imageAlt}
                priority
              />
            </div>
          </div>
          <div className={styles.hero_slider}>
            <p>Meet our clients</p>
            <SliderClients data={data} />
          </div>
        </section>
        <section
          className={styles.about_container}
          aria-labelledby="about-heading"
        >
          <div className={styles.about_content_left}>
            <div className={styles.image_container}>
              <Image
                src={aboutSection.imageurl}
                width={400}
                height={450}
                alt={aboutSection.imageAlt}
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
        <section
          className={styles.project_container}
          aria-labelledby="project-heading"
        >
          <Gallery />
          <motion.div
            className={styles.project_button_container}
            animate={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href={"/projects"}>
              <button className={styles.project_button}>
                Case studies <BsArrowUpRight aria-hidden="true" />
              </button>
            </Link>
          </motion.div>
        </section>
        <section
          className={styles.social_container}
          aria-labelledby="social-heading"
        >
          <div>
            {[
              "Follow our",
              "journey to",
              "PROPEL BRANDS",
              "TO all NEW",
              "HEIGHTS",
            ].map((text) => (
              <div key={text} style={{ overflow: "hidden" }}>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  variants={textReveal}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.h2>
              </div>
            ))}
          </div>
          <MediaIcons />
          <div className={styles.social_image_container}>
            <Image
              src={socialSection.imageurl}
              width={1318}
              height={350}
              alt={socialSection.imageAlt}
            />
          </div>
        </section>
        <section
          className={styles.article_container}
          aria-labelledby="articles-heading"
        >
          {["LATEST", "ARTICLES"].map((text) => (
            <div key={text} style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: "100%", skewY: 9 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.h2>
            </div>
          ))}
          <div className={styles.article_content}>
            {articleSection.map(
              ({ id, subtittle, title, imageurl, imageAlt }) => (
                <Link key={id} href={`/blog/${id}`} passHref>
                  <div className={styles.single_article}>
                    <motion.h3
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeUp}
                      viewport={{ once: true }}
                    >
                      {subtittle}
                    </motion.h3>
                    <motion.span
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeUp}
                      viewport={{ once: true }}
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
        <section
          className={styles.feedback_container}
          aria-labelledby="feedback-heading"
        >
          <div className={styles.feedback_content}>
            <div>
              {["HAPPY", "CLIENTS"].map((text) => (
                <div key={text} style={{ overflow: "hidden" }}>
                  <motion.h2
                    initial={{ y: "153%", skewY: 9 }}
                    whileInView={{ y: 0, skewY: 0 }}
                    transition={{ ease: "easeIn", duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {text}
                  </motion.h2>
                </div>
              ))}
            </div>
            <SliderReview data={data} />
          </div>
        </section>
        <Talent />
        <section
          className={styles.info_container}
          aria-labelledby="info-heading"
        >
          <div className={styles.info_title}>
            {["YOU ASK", "WE ANSWER"].map((text) => (
              <div key={text} style={{ overflow: "hidden" }}>
                <motion.h3
                  initial={{ y: "130%", skewY: 11 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.h3>
              </div>
            ))}
          </div>
          <div style={styles.info_accordion}>
            <Accordion data={infoSection.accordion} />
          </div>
        </section>
      </section>
    </>
  );
}

export function ProjectContent({ data }) {
  return (
    <>
      <section className={styles.projects_container}>
        <div className={styles.projects_title}>
          <Parallax speed={-8.5}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "39.2vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
                viewport={{ once: true }}
              >
                OUR WORK
              </motion.h1>
            </div>
          </Parallax>
        </div>
        <div className={styles.projects_content}>
          <motion.div
            className={styles.projects_cards_container}
            initial={{ y: "30vh" }}
            animate={{ y: 0 }}
            transition={{ ease: "easeIn", duration: 0.6 }}
          >
            {data.slice(0, 8).map(({ id, image, brandName, slogan }) => (
              <Link href={"/projects/" + id} key={id}>
                <motion.div
                  className={styles.single_card}
                  animate={{ y: "10vh", scale: 0.95 }}
                  whileInView={{ y: 0, scale: 1 }}
                  transition={{ ease: "easeIn", duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.image_wrapper}>
                    <Image
                      src={image}
                      width={500}
                      height={700}
                      alt={"image for the specified blog card"}
                    />
                  </div>
                  <h2>{brandName}</h2>
                  <h3>{slogan}</h3>
                </motion.div>
              </Link>
            ))}
          </motion.div>
          {data.length >= 8 ? (
            <Link href={"/projects/end"}>
              <div style={{ overflow: "hidden" }}>
                <h4>NEXT</h4>
              </div>
            </Link>
          ) : (
            <div style={{ overflow: "hidden" }}>
              <h4 className={styles.prev_btn}>NEXT</h4>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export function ProjectEndContent({ data }) {
  return (
    <>
      <section className={styles.projects_container}>
        <div className={styles.projects_title}>
          <Parallax speed={-8.5}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "40vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
                viewport={{ once: true }}
              >
                OUR WORK
              </motion.h1>
            </div>
          </Parallax>
        </div>
        <div className={styles.projects_content}>
          <div className={styles.projects_cards_container}>
            {data.slice(8, 10).map(({ id, image, brandName, slogan }) => (
              <Link href={"/projects/" + id} key={id}>
                <div className={styles.single_card}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src={image}
                      width={500}
                      height={700}
                      alt={"image for the specified blog card"}
                      loading="lazy"
                    />
                  </div>
                  <h2>{brandName}</h2>
                  <h3>{slogan}</h3>
                </div>
              </Link>
            ))}
          </div>
          <Link href={"/projects"}>
            <div style={{ overflow: "hidden" }}>
              <h4>PREVIOUS</h4>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export function BlogContent({ data }) {
  return (
    <>
      <section className={styles.blog_container}>
        <Parallax speed={-7}>
          <div className={styles.blog_title}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "41.5vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
                viewport={{ once: true }}
              >
                NEWS
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: "41.5vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
                viewport={{ once: true }}
              >
                & BLOG
              </motion.h2>
            </div>
          </div>
        </Parallax>
        <Parallax speed={0}>
          <div className={styles.blog_content}>
            <motion.div
              className={styles.blog_cards_container}
              initial={{ y: "30vh" }}
              animate={{ y: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              viewport={{ once: true }}
            >
              {data.slice(0, 8).map(({ id, heroImage, date, slogan }) => (
                <Link href={"/blog/" + id} key={id}>
                  <motion.div
                    className={styles.single_card}
                    animate={{ y: "10vh", scale: 0.95 }}
                    whileInView={{ y: 0, scale: 1 }}
                    transition={{ ease: "easeIn", duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.image_wrapper}>
                      <Image
                        src={heroImage}
                        width={500}
                        height={700}
                        alt={"image for the specified blog card"}
                        loading="lazy"
                      />
                    </div>
                    <h3>{date}</h3>
                    <h4>{slogan}</h4>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
            {data.length >= 6 ? (
              <div style={{ overflow: "hidden" }}>
                <Link href={"/blog/end"}>
                  <h5>NEXT</h5>
                </Link>
              </div>
            ) : (
              <div style={{ overflow: "hidden" }}>
                <h5 className={styles.btn_effect}>NEXT</h5>
              </div>
            )}
          </div>
        </Parallax>
      </section>
    </>
  );
}

export function BlogEndContent({ data }) {
  return (
    <>
      <section className={styles.blog_container}>
        <Parallax speed={-7}>
          <div className={styles.blog_title}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "41.5vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
                viewport={{ once: true }}
              >
                NEWS
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "41.5vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
                viewport={{ once: true }}
              >
                & BLOG
              </motion.h1>
            </div>
          </div>
        </Parallax>
        <Parallax speed={0}>
          <div className={styles.blog_content}>
            <motion.div
              className={styles.blog_cards_container}
              initial={{ y: "27vh" }}
              animate={{ y: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              viewport={{ once: true }}
            >
              {data.slice(8, 10).map(({ id, heroImage, date, slogan }) => (
                <Link href={"/blog/" + id} key={id}>
                  <motion.div
                    className={styles.single_card}
                    animate={{ y: "10vh", scale: 0.85 }}
                    whileInView={{ y: 0, scale: 1 }}
                    transition={{ ease: "easeIn", duration: 0.6 }}
                  >
                    <div className={styles.image_wrapper}>
                      <Image
                        src={heroImage}
                        width={500}
                        height={700}
                        alt={"image for the specified blog card"}
                        loading="lazy"
                      />
                    </div>
                    <h3>{date}</h3>
                    <h4>{slogan}</h4>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <Link href={"/blog/"}>
                <h5 className={styles.prev_btn}>PREVIOUS</h5>
              </Link>
            </div>
          </div>
        </Parallax>
      </section>
    </>
  );
}

export function AboutMainContent({ data }) {
  const [emblaRef] = useEmblaCarousel({ watchDrag: false, loop: true }, [
    AutoScroll({ speed: 0.6 }),
  ]);

  const [emblaRef2] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 1.1, direction: "backward" }),
  ]);
  return (
    <>
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
                  src={data.heroSection.imageOne}
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
                src={data.heroSection.imageTwo}
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
              viewport={{ once: true }}
            >
              We’re a small web development team based in Oslo, Norway,
              dedicated to building tailored websites for small to medium-sized
              businesses.
            </motion.p>
            <motion.p
              animate={{ y: 100, skewY: 10, opacity: 0 }}
              whileInView={{ y: 0, skewY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
                {data.sliderSection.images.map(({ imageurl }, index) => (
                  <div key={index} className={styles.embla__slide}>
                    <Image
                      src={imageurl}
                      width={640}
                      height={880}
                      alt="image desplaying one of our project"
                    />
                  </div>
                ))}
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
                src={data.infoSection.image}
                width={640}
                height={880}
                alt={"image of a woman in an office useing a pc for work"}
              />
            </div>
            <div className={styles.section_info_container}>
              <h2>OUR CORE VALUES</h2>
              <div className={styles.values_container}>
                {data.infoSection.values.map(({ number, title }, index) => (
                  <div className={styles.single_value} key={index}>
                    <motion.h4
                      animate={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {number}
                    </motion.h4>
                    <motion.h3
                      animate={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {title}
                    </motion.h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Talent />
      </section>
    </>
  );
}

export function ContactContent() {
  return (
    <>
      <Parallax speed={0}>
        <section className={styles.contact_container}>
          <div className={styles.contact_content}>
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                initial={{ y: "10vh", skewY: 8 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                (Contact)
              </motion.h3>
            </div>
            <ul>
              <div style={{ overflow: "hidden" }}>
                <Link href={"tel:+4799592853"}>
                  <motion.li
                    initial={{ y: "10vh", skewY: 8 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ ease: "easeIn", duration: 0.6 }}
                  >
                    <BsArrowRightShort
                      fontSize={40}
                      color="#151515"
                      fontWeight={400}
                    />
                    <h2>+47 995 928 53</h2>
                  </motion.li>
                </Link>
              </div>
              <div style={{ overflow: "hidden" }}>
                <Link href={"mailto:info@webrise.no"}>
                  <motion.li
                    initial={{ y: "10vh", skewY: 8 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ ease: "easeIn", duration: 0.6 }}
                  >
                    <BsArrowRightShort
                      fontSize={40}
                      color="#151515"
                      fontWeight={400}
                    />
                    <h2>Info@webrise.dev</h2>
                  </motion.li>
                </Link>
              </div>
              <div style={{ overflow: "hidden" }}>
                <Link
                  href={
                    "https://www.google.com/maps/place/Oslo/@59.8937521,10.6203131,11z/data=!3m1!4b1!4m6!3m5!1s0x46416e61f267f039:0x7e92605fd3231e9a!8m2!3d59.9138688!4d10.7522454!16zL20vMDVsNjQ?entry=ttu"
                  }
                >
                  <motion.li
                    initial={{ y: "10vh", skewY: 8 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{ ease: "easeIn", duration: 0.6 }}
                  >
                    <BsArrowRightShort
                      fontSize={40}
                      color="#151515"
                      fontWeight={400}
                    />
                    <h2>Oslo, Norway</h2>
                  </motion.li>
                </Link>
              </div>
            </ul>
          </div>
          <div className={styles.contact_tittle}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "132%", skewY: 12 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                GET IN
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "132%", skewY: 12 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                TOUCH
              </motion.h1>
            </div>
          </div>
        </section>
      </Parallax>
    </>
  );
}
