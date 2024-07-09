import React from "react";
import styles from "@/styles/Home.module.scss";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top_links}>
          <ul>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Linkedin</li>
            <li>Tiktok</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className={styles.footer_top_newsletter}>
          <p>Join our newsletter and get notified!</p>
          <input placeholder="Email" type="email"></input>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_logo}>
          <span>Webrise</span>
        </div>
        <div className={styles.footer_bottom_info}>
          <span>Privacy Policy</span>
          <span>Design & Development by Webrise</span>
          <span>©2024 Webrise</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
