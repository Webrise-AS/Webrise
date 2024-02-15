"use client";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function page() {
  return (
    <div className={styles.home_container}>
      <main>
        <p>
          Webrise is a digital marketing agency consisting of several creative
          people, who can help youre business compete in the ever changeing
          digital world.
        </p>
        <h1>We are currently working on updating our website</h1>
        <div>
          <Link href="mailto:ahmed.j.jibril@hotmail.com">
            <button>Contact us</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
