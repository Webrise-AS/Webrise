import React from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

function Footer() {
  return (
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
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_logo}>
          <Link href={"/"}>
            <span>Webrise</span>
          </Link>
        </div>
        <div className={styles.footer_bottom_info}>
          <Link href={"#"}>
            <span>Privacy Policy</span>
          </Link>
          <span>Design & Development by Webrise</span>
          <span>©2024 Webrise</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
