import React from "react";
import styles from "@/styles/Home.module.scss";

function Header() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_logo}>
        <span>WEBRISE</span>
      </div>
      <div className={styles.nav_links}>
        <ul>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Book a call</button>
      </div>
    </div>
  );
}

export default Header;
