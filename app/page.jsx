"use client";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsLinkedin, BsTiktok, BsInstagram } from "react-icons/bs";
import Accordion from "@/components/accordion";
import AnimatedCursor from "react-animated-cursor";

const ProjectsData = [
  {
    id: 1,
    name: "Sand & Witch",
    slogan: "The crunchier the butter",
    image_url: "https://placehold.jp/640x700.png",
    image_desc: "Picture of the project",
  },
  {
    id: 2,
    name: "Sweet Lorens",
    slogan: "Cookies made of dreams",
    image_url: "https://placehold.jp/640x700.png",
    image_desc: "Picture of the project",
  },
  {
    id: 3,
    name: "Caffeine Coders",
    slogan: "Code flows as smooth as our coffee",
    image_url: "https://placehold.jp/640x700.png",
    image_desc: "Picture of the project",
  },
  {
    id: 4,
    name: "Pasta Palette",
    slogan: "Every flavor tells a tale",
    image_url: "https://placehold.jp/640x700.png",
    image_desc: "Picture of the project",
  },
];

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      delay: 3000,
      stopOnMouseEnter: true,
      watchDrag: false,
    }),
  ]);

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
            <h4>(Who we are)</h4>
            <Image
              src="https://placehold.jp/400x450.png"
              width={400}
              height={450}
              alt=""
            />
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
          <div className={styles.project_hero_textfield}>
            <h2>Recent</h2>
            <h2>Projects</h2>
          </div>
          <div className={styles.project_work_section}>
            {ProjectsData.map((project) => (
              <div className={styles.works_content} key={project.id}>
                <div className={styles.content_image_container}>
                  <Image
                    src={project.image_url}
                    width={640}
                    height={650}
                    alt={project.image_desc}
                  />
                </div>
                <span className={styles.works_content_span}>
                  {project.name}
                </span>
                <span>{project.slogan}</span>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.social_container}>
          <h2>Follow our journey to PROPEL BRANDS TO all NEW HEIGHTS</h2>
          <div>
            <BsLinkedin fontSize={60} color="white" cursor={"pointer"} />
            <BsTiktok fontSize={60} color="white" cursor={"pointer"} />
            <BsInstagram fontSize={60} color="white" cursor={"pointer"} />
          </div>
          <Image
            src="https://placehold.jp/1318x350.png"
            width={1318}
            height={350}
            alt=""
          />
        </section>
        <section className={styles.article_container}>
          <h2>LATEST ARTICLES</h2>
          <div className={styles.article_content}>
            <div className={styles.article_content_top}>
              <h3>(01)</h3>
              <span>
                Unveiling the Future of Web Design: Trends to Watch in
                Berlin&apos;s Digital Scene
              </span>
              <Image
                src="https://placehold.jp/204x306.png"
                width={204}
                height={306}
                alt=""
              />
            </div>
            <div className={styles.article_content_bottom}>
              <h3>(02)</h3>
              <span>
                Inside Strobe™: A Day in the Life of Berlin&apos;s Most
                Innovative Creative Team
              </span>
              <Image
                src="https://placehold.jp/204x306.png"
                width={204}
                height={306}
                alt=""
              />
            </div>
            <div className={styles.article_content_bottom}>
              <h3>(03)</h3>
              <span>
                Sustainable Design: Strobe™&apos;s Approach to Eco-Friendly
                Digital Solutions
              </span>
              <Image
                src="https://placehold.jp/204x306.png"
                width={204}
                height={306}
                alt=""
              />
            </div>
            <div className={styles.article_content_bottom}>
              <h3>(04)</h3>
              <span>
                Unveiling the Future of Web Design: Trends to Watch in
                Berlin&apos;s Digital Scene
              </span>
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
            <h2>HAPPY CLIENTS</h2>
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
            <p>
              Be part of the innovation journey with Webrise. Our monthly
              insights showcase the cutting-edge trends, technologies, and
              creative strategies shaping the future. Stay informed, inspired,
              and ahead of the curve with Webrise
            </p>
            <button>Learn more</button>
          </div>
          <div className={styles.hire_overlay}></div>
        </section>
        <section className={styles.info_container}>
          <div className={styles.info_title}>
            <span>YOU ASK</span>
            <span>WE ANSWER</span>
          </div>
          <div style={styles.info_accordion}>
            <Accordion />
          </div>
        </section>
      </div>
    </>
  );
}
