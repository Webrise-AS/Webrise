"use client"; // Error components must be Client components
import styles from "@/styles/Home.module.scss";

export default function Error({ error, reset }) {
  return (
    <div className={styles.error_container}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
