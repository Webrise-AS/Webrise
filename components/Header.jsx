"use client";
import React from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Services", href: "/services", id: 1 },
  { name: "Projects", href: "/projects", id: 2 },
  { name: "Blog", href: "/blog", id: 3 },
  { name: "About", href: "/about", id: 4 },
  { name: "Contact", href: "/contact", id: 5 },
];

function Header({ color }) {
  const pathname = usePathname();
  return (
    <>
      {color === "dark" ? (
        <div className={styles.nav_dark_container}>
          <div className={styles.nav_dark_logo}>
            <Link href={"/"}>
              <span>WEBRISE</span>
            </Link>
          </div>
          <div className={styles.nav_dark_links}>
            <ul>
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                  <li
                    key={link.id}
                    className={isActive ? styles.isActive_dark : ""}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
            <Link href={"/contact"}>
              <button>Book a call</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.nav_container}>
          <div className={styles.nav_logo}>
            <Link href={"/"}>
              <span>WEBRISE</span>
            </Link>
          </div>
          <div className={styles.nav_links}>
            <ul>
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                  <li key={link.id} className={isActive ? styles.isActive : ""}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
            <Link href={"/contact"}>
              <button>Book a call</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
