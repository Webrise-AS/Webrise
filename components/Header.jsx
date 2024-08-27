import React from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.nav_logo}>
          <Link href={"/"}>
            <span>WEBRISE</span>
          </Link>
        </div>
        <div className={styles.nav_links}>
          <ul>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <Link href={"/contact"}>
            <button>Book a call</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
