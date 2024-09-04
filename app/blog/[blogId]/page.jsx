import styles from "/_repos/webrise/styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedCursor from "react-animated-cursor";
import { getSingleData } from "@/app/helpers/page";
import LenisScroll from "@/components/LenisScroll";
import { motion } from "framer-motion";

export default async function BlogDetails({ params }) {
  const id = Number(params.blogId);
  const blogData = await getSingleData(id);

  async function getRelatedData() {
    const res = await fetch("https://fakestoreapi.com/products?limit=10");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const dataRelated = await getRelatedData();

  function filterRelatedPosts(dataToFilter, id) {
    return dataToFilter.filter((item) => item.id != id).slice(2, 5);
  }

  return (
    <>
      <Head>
        <title>{blogData.title} | Webrise</title>
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

      <LenisScroll />

      <section className={styles.blogDetails_container}>
        <div
          className={styles.blogDetails_hero_section}
          style={{
            backgroundImage: `url(${blogData.image})`,
          }}
        >
          <div className={styles.hero_content}>
            <h3
              initial={{ y: "30vh", skewY: 15 }}
              animate={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              {blogData.price}
            </h3>
            <h1
              initial={{ y: "30vh", skewY: 15 }}
              animate={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              {blogData.title}
            </h1>
          </div>
          <div className={styles.hero_overlay}></div>
        </div>
        <div className={styles.blogDetails_info_section}>
          <div className={styles.blogDetails_info_content}>
            <h4>{blogData.description}</h4>
            <div className={styles.info_block}>
              <h2>{blogData.title}</h2>
              <p>{blogData.description}</p>
            </div>
            <Image
              src={`${blogData.image}`}
              width={866}
              height={480}
              alt={"image for the specified blog card"}
              loading="lazy"
            />
            <div className={styles.info_block}>
              <h2>{blogData.title}</h2>
              <p>{blogData.description}</p>
            </div>
            <h5>“{blogData.description}”</h5>
            <div className={styles.info_block}>
              <h2>{blogData.title}</h2>
              <p>{blogData.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.blogDetails_related_section}>
          <span>RELATED</span>
          <div className={styles.related_cards_container}>
            {filterRelatedPosts(dataRelated, id).map((card) => (
              <Link
                href={"http://localhost:3000/blog/" + card.id}
                key={card.id}
              >
                <div className={styles.single_card}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src={card.image}
                      width={500}
                      height={700}
                      alt={"image for the specified blog card"}
                      loading="lazy"
                    />
                  </div>
                  <h2>{card.price}</h2>
                  <h3>{card.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
