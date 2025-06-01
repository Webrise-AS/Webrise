"use client";
import React from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

function Footer() {
  const mainLinks = [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/webrise-no/about/?viewAsMember=true",
      label: "Linkedin",
    },
    { href: "https://www.tiktok.com/", label: "Tiktok" },
    { href: "https://www.instagram.com/", label: "Instagram" },
  ];

  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <div className={styles.footer_top_links}>
            <ul>
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footer_link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.footer_link}
                    aria-label={`${link.label} (opens in new tab)`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
                alt="Image of the webrise logo"
              />
            </Link>
          </div>
          <div className={styles.footer_bottom_info}>
            <motion.div
              animate={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={"#"}>
                <span>Privacy Policy</span>
              </Link>
            </motion.div>
            <motion.span
              animate={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              viewport={{ once: true }}
            >
              Design & Development by WEBRISE
            </motion.span>
            <motion.span
              animate={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              viewport={{ once: true }}
            >
              ©2025 WEBRISE
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
