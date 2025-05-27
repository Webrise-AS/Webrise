"use client";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";

function Accordion({ data }) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={styles.accordion_container}>
      {data.map(({ id, question, answer }, i) => (
        <div
          className={styles.single_accordion}
          key={id}
          onClick={() => toggle(i)}
        >
          <div className={styles.single_accordion_title}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", transition: 0.6 }}
            >
              {selected === i ? "-" : "+"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", transition: 0.6 }}
            >
              {question}
            </motion.h2>
          </div>
          <div
            className={
              selected === i
                ? styles.single_accordion_content_show
                : styles.single_accordion_content
            }
          >
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
