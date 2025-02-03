"use client";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimateCursor />
      <LenisScroll />

      <Parallax speed={-8}>
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
                    <h2>info@webrise.no</h2>
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
