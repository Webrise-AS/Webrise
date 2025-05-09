"use client";
import React from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <div className={styles.footer_top_links}>
            <ul>
              <Link href={"/services"}>
                <li>Services</li>
              </Link>
              <Link href={"/projects"}>
                <li>Projects</li>
              </Link>
              <Link href={"/blog"}>
                <li>Blog</li>
              </Link>
              <Link href={"/about"}>
                <li>About</li>
              </Link>
              <Link href={"/contact"}>
                <li>Contact</li>
              </Link>
            </ul>
            <ul>
              <Link href={"#"}>
                <li>Linkedin</li>
              </Link>
              <Link href={"#"}>
                <li>Tiktok</li>
              </Link>
              <Link href={"#"}>
                <li>Instagram</li>
              </Link>
            </ul>
          </div>
          <div className={styles.footer_top_newsletter}>
            <p>Join our newsletter and get notified!</p>
            <input placeholder="Email" type="email"></input>
            <BsArrowRightShort id="email" />
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_bottom_logo_container}>
            <Link href={"/"}>
              <Image
                src="/logoDark.png"
                width={1370}
                height={260}
                alt="image of the webrise logo"
              />
            </Link>
          </div>
          <div className={styles.footer_bottom_info}>
            <motion.div
              animate={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              <Link href={"#"}>
                <span>Privacy Policy</span>
              </Link>
            </motion.div>
            <motion.span
              animate={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              Design & Development by Webrise
            </motion.span>
            <motion.span
              animate={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              ©2025 Webrise
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
