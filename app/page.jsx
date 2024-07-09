"use client";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from "@mantine/core";

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
        <section className={styles.project_container}></section>
        <section className={styles.social_container}></section>
        <section className={styles.article_container}></section>
        <section className={styles.feedback_container}></section>
        <section className={styles.hire_container}></section>
        <section className={styles.info_container}>
          <div>
            <span>YOU ASK</span>
            <span>WE ANSWER</span>
          </div>
          <div>
            {QuestionAndAnswer_data.map((data) => {
              console.log(data.value);
              return (
                <Accordion key={data.key} radius="xs" chevronPosition="left">
                  <Accordion.Item value={data.value}>
                    <Accordion.Control>{data.value}</Accordion.Control>
                    <Accordion.Panel>{data.description}</Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
