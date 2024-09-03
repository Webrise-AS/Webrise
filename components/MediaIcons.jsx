import React from "react";
import styles from "../styles/Home.module.scss";
import { useAnimate } from "framer-motion";
import { BsLinkedin, BsTiktok, BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function MediaIcons() {
  return (
    <>
      <div className={styles.icons_container}>
        <LinkBox Icon={BsLinkedin} href={"#"} />
        <LinkBox Icon={BsTiktok} href={"#"} />
        <LinkBox Icon={BsInstagram} href={"#"} />
      </div>
    </>
  );
}

const LinkBox = ({ Icon, href }) => {
  return (
    <>
      <div className={styles.neutral_link}>
        <Link href={href}>
          <Icon />
        </Link>
      </div>
    </>
  );
};
