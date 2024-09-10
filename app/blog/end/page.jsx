"use client";
import BlogDataEnd from "@/components/BlogDataEnd";
import styles from "/_repos/webrise/styles/Home.module.scss";
import Head from "next/head";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";
import AnimateCursor from "@/components/AnimateCursor";

export default function BlogEnd() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
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
          <BlogDataEnd apiLength={"10"} />
        </Parallax>
      </section>
    </>
  );
}
