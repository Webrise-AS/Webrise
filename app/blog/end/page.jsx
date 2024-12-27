"use client";
import styles from "../../../styles/Home.module.scss";
import Head from "next/head";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import Link from "next/link";
import Image from "next/image";
import { database } from "@/app/utils/database";

const blogPage_data = database.blogPage_data;

export default function BlogEnd() {
  return (
    <>
      <Head>
        <title>Blog | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimateCursor />
      <LenisScroll />

      <section className={styles.blog_container}>
        <Parallax speed={-7}>
          <div className={styles.blog_title}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "41.5vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                NEWS
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "41.5vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
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
            >
              {blogPage_data
                .slice(8, 10)
                .map(({ id, heroImage, date, slogan }) => (
                  <Link href={"http://localhost:3000/blog/" + id} key={id}>
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
              <Link href={"http://localhost:3000/blog/"}>
                <h5 className={styles.prev_btn}>PREVIOUS</h5>
              </Link>
            </div>
          </div>
        </Parallax>
      </section>
    </>
  );
}
