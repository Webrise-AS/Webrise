"use client";
import React, { useState } from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsList } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
                <Image src="/logoDark.png" width={140} height={30} alt="logo" />
              </Link>
            </div>
            <div className={styles.nav_dark_links}>
              <ul>
                {navLinks.map(({ id, href, name }) => {
                  const isActive = pathname.startsWith(href);

                  return (
                    <li
                      key={id}
                      className={isActive ? styles.isActive_dark : ""}
                    >
                      <Link href={href}>{name}</Link>
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
                className={styles.toggleMenu_dark}
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className={styles.toggleMenu_dark_content}>
                  <div className={styles.toggleMenu_dark_nav}>
                    <div className={styles.toggleMenu_dark_logo}>
                      <Link href={"/"}>
                        <Image
                          src="/logoDark.png"
                          width={140}
                          height={30}
                          alt="logo"
                          onClick={toggleMenu}
                        />
                      </Link>
                    </div>
                    <BsList onClick={toggleMenu} />
                  </div>
                  <div className={styles.toggleMenu_dark_links}>
                    <motion.ul
                      variants={containerVars}
                      initial="initial"
                      animate="open"
                      exit="initial"
                    >
                      {navLinks.map(({ id, href, name }) => {
                        const isActive = pathname.startsWith(href);

                        return (
                          <div key={id} style={{ overflow: "hidden" }}>
                            <motion.li
                              className={isActive ? styles.isActive_dark : ""}
                              variants={linksVars}
                              onClick={toggleMenu}
                            >
                              <Link href={href}>{name}</Link>
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
      ) : (
        <div className={styles.nav_container}>
          <div className={styles.nav_content}>
            <div className={styles.nav_logo}>
              <Link href={"/"}>
                <Image
                  src="/logoLight.png"
                  width={140}
                  height={30}
                  alt="logo"
                />
              </Link>
            </div>
            <div className={styles.nav_links}>
              <ul>
                {navLinks.map(({ id, href, name }) => {
                  const isActive = pathname.startsWith(href);

                  return (
                    <li key={id} className={isActive ? styles.isActive : ""}>
                      <Link href={href}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
              <Link href={"/contact"}>
                <button>Let&apos;s chat</button>
              </Link>
              <BsList className={styles.toggleMenu_icon} onClick={toggleMenu} />
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
                    <div className={styles.toggleMenu_logo}>
                      <Link href={"/"}>
                        <Image
                          src="/logoLight.png"
                          width={140}
                          height={30}
                          alt="logo"
                          onClick={toggleMenu}
                        />
                      </Link>
                    </div>
                    <BsList onClick={toggleMenu} />
                  </div>
                  <div className={styles.toggleMenu_links}>
                    <motion.ul
                      variants={containerVars}
                      initial="initial"
                      animate="open"
                      exit="initial"
                    >
                      {navLinks.map(({ id, href, name }) => {
                        const isActive = pathname.startsWith(href);

                        return (
                          <div key={id} style={{ overflow: "hidden" }}>
                            <motion.li
                              className={isActive ? styles.isActive : ""}
                              variants={linksVars}
                              onClick={toggleMenu}
                            >
                              <Link href={href}>{name}</Link>
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
