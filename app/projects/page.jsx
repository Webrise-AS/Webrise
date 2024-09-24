"use client";
import Head from "next/head";
import styles from "/_repos/webrise/styles/Home.module.scss";
import ProjectsData from "@/components/ProjectsData";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";

export default function Projects() {
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

      <section className={styles.projects_container}>
        <div className={styles.projects_title}>
          <Parallax speed={-8.5}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "40vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                OUR WORK
              </motion.h1>
            </div>
          </Parallax>
        </div>
        <ProjectsData apiLength={"10"} />
      </section>
    </>
  );
}
