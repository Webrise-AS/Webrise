"use client";
import React, { useState } from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsList } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Services", href: "/services", id: 1 },
  { name: "Projects", href: "/projects", id: 2 },
  { name: "Blog", href: "/blog", id: 3 },
  { name: "About", href: "/about", id: 4 },
  { name: "Contact", href: "/contact", id: 5 },
];

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linksVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

function Header({ color }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      {color === "dark" ? (
        <div className={styles.nav_dark_container}>
          <div className={styles.nav_dark_content}>
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
        </div>
      ) : (
        <div className={styles.nav_container}>
          <div className={styles.nav_content}>
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
                    <li
                      key={link.id}
                      className={isActive ? styles.isActive : ""}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
              <Link href={"/contact"}>
                <button>Book a call</button>
              </Link>
              <BsList onClick={toggleMenu} />
            </div>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                className={styles.toggleMenu}
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className={styles.toggleMenu_content}>
                  <div className={styles.toggleMenu_nav}>
                    <Link href={"/"}>
                      <span onClick={toggleMenu}>WEBRISE</span>
                    </Link>
                    <BsList onClick={toggleMenu} />
                  </div>
                  <div className={styles.toggleMenu_links}>
                    <motion.ul
                      variants={containerVars}
                      initial="initial"
                      animate="open"
                      exit="initial"
                    >
                      {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);

                        return (
                          <div key={link.id} style={{ overflow: "hidden" }}>
                            <motion.li
                              className={isActive ? styles.isActive : ""}
                              variants={linksVars}
                              onClick={toggleMenu}
                            >
                              <Link href={link.href}>{link.name}</Link>
                            </motion.li>
                          </div>
                        );
                      })}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default Header;
