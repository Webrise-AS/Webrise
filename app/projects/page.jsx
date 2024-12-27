"use client";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import Image from "next/image";
import Link from "next/link";
import { database } from "@/app/utils/database";

const projectsPage_data = database.projectsPage_data;

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
                initial={{ y: "39.2vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                OUR WORK
              </motion.h1>
            </div>
          </Parallax>
        </div>
        <div className={styles.projects_content}>
          <div className={styles.projects_cards_container}>
            {projectsPage_data
              .slice(0, 8)
              .map(({ id, image, brandName, slogan }) => (
                <Link href={"http://localhost:3000/projects/" + id} key={id}>
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
          {projectsPage_data.length >= 8 ? (
            <Link href={"http://localhost:3000/projects/end"}>
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
