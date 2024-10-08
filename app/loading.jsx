"use client";
import "ldrs/hatch";
import styles from "../styles/Home.module.scss";

export default function loading() {
  return (
    <div className={styles.loader_container}>
      <l-hatch size="120" stroke="28" speed="3.5" color="black"></l-hatch>
    </div>
  );
}
