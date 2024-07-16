"use client";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Accordion } from "@mantine/core";
import { BsLinkedin, BsTiktok, BsInstagram } from "react-icons/bs";

const QuestionAndAnswer_data = [
  {
    key: 1,
    value: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    key: 2,
    value: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    key: 3,
    value: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
  {
    key: 4,
    value: "Orange",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
];

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

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

      <div className={styles.home_container}>
        <section className={styles.hero_container}></section>
        <section className={styles.about_container}></section>
        <section className={styles.project_container}>
          <div className={styles.project_hero_textfield}>
            <h2>Recent</h2>
            <h2>Projects</h2>
          </div>
          <div className={styles.project_work_section}>
            <div className={styles.works_content}>
              <div className={styles.content_image_container}>
                <Image
                  src="https://placehold.jp/640x700.png"
                  width={640}
                  height={650}
                  alt="Picture of the author"
                />
              </div>
              <span className={styles.works_content_span}>Sand & Witch</span>
              <span>The crunchier the butter</span>
            </div>
            <div className={styles.works_content}>
              <Image
                src="https://placehold.jp/640x700.png"
                width={640}
                height={650}
                alt="Picture of the author"
              />
              <span className={styles.works_content_span}>Sand & Witch</span>
              <span>The crunchier the butter</span>
            </div>
            <div className={styles.works_content}>
              <Image
                src="https://placehold.jp/640x700.png"
                width={640}
                height={650}
                alt="Picture of the author"
              />
              <span className={styles.works_content_span}>Sand & Witch</span>
              <span>The crunchier the butter</span>
            </div>
            <div className={styles.works_content}>
              <Image
                src="https://placehold.jp/640x700.png"
                width={640}
                height={650}
                alt="Picture of the author"
              />
              <span className={styles.works_content_span}>Sand & Witch</span>
              <span>The crunchier the butter</span>
            </div>
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
                <div className={styles.embla__slide}>Slide 1</div>
                <div className={styles.embla__slide}>Slide 2</div>
                <div className={styles.embla__slide}>Slide 3</div>
                <div className={styles.embla__slide}>Slide 4</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.hire_container}></section>
        <section className={styles.info_container}>
          <div>
            <span>YOU ASK</span>
            <span>WE ANSWER</span>
          </div>
          <div>
            {/* {QuestionAndAnswer_data.map((data) => {
              return (
                <Accordion key={data.key} radius="xs" chevronPosition="left">
                  <Accordion.Item value={data.value}>
                    <Accordion.Control>{data.value}</Accordion.Control>
                    <Accordion.Panel>{data.description}</Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              );
            })} */}
          </div>
        </section>
      </div>
    </>
  );
}
