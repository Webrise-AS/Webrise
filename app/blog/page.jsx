"use client";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import Image from "next/image";
import Link from "next/link";
import { database } from "@/app/utils/database";

const blogPage_data = database.blogPage_data;

export default function Blog() {
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
              <motion.h2
                initial={{ y: "41.5vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
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
            >
              {blogPage_data
                .slice(0, 8)
                .map(({ id, heroImage, date, slogan }) => (
                  <Link href={"/blog/" + id} key={id}>
                    <motion.div
                      className={styles.single_card}
                      animate={{ y: "10vh", scale: 0.95 }}
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
            {blogPage_data.length >= 6 ? (
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
