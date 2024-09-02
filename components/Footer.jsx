"use client";
import React from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <div className={styles.footer_top_links}>
            <ul>
              <Link href={"/services"}>
                <motion.li
                  animate={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                >
                  Services
                </motion.li>
              </Link>
              <Link href={"/projects"}>
                <motion.li
                  animate={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                >
                  Projects
                </motion.li>
              </Link>
              <Link href={"/blog"}>
                <motion.li
                  animate={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                >
                  Blog
                </motion.li>
              </Link>
              <Link href={"/about"}>
                <motion.li
                  animate={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                >
                  About
                </motion.li>
              </Link>
              <Link href={"/contact"}>
                <motion.li
                  animate={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                >
                  Contact
                </motion.li>
              </Link>
            </ul>
            <ul>
              <Link href={"#"}>
                <motion.li
                  animate={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                >
                  Linkedin
                </motion.li>
              </Link>
              <Link href={"#"}>
                <motion.li
                  animate={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                >
                  Tiktok
                </motion.li>
              </Link>
              <Link href={"#"}>
                <motion.li
                  animate={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                >
                  Instagram
                </motion.li>
              </Link>
            </ul>
          </div>
          <div className={styles.footer_top_newsletter}>
            <p>Join our newsletter and get notified!</p>
            <input placeholder="Email" type="email"></input>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_bottom_logo}>
            <Link href={"/"}>
              <h2>Webrise</h2>
            </Link>
          </div>
          <div className={styles.footer_bottom_info}>
            <motion.div
              animate={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
            >
              <Link href={"#"}>
                <span>Privacy Policy</span>
              </Link>
            </motion.div>
            <motion.span
              animate={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
            >
              Design & Development by Webrise
            </motion.span>
            <motion.span
              animate={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
            >
              ©2024 Webrise
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
