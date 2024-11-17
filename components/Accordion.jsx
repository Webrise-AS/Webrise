import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={styles.accordion_container}>
      <div className={styles.accordion_content}>
        {data.map((info, i) => (
          <div
            className={
              info.id != 4
                ? styles.single_accordion
                : styles.single_accordion_bottom
            }
            key={info.id}
            onClick={() => toggle(i)}
          >
            <div className={styles.single_accordion_tittle}>
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
                {info.question}
              </motion.h2>
            </div>
            <div
              className={
                selected === i
                  ? styles.single_accordion_content_show
                  : styles.single_accordion_content
              }
            >
              <p>{info.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    question: "What sets Webrise apart?",
    answer: `Strobe™ stands out through our unique fusion of Berlin's artistic heritage with modern digital innovation. Our approach is not just about creating visually stunning designs; it's about delivering functional, user-centered experiences that drive results and embody the vibrant spirit of our city.`,
  },
  {
    id: 2,
    question: "How does Webrise ensure trends?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget sem facilisis aliquam vitae eu erat. Donec pulvinar pharetra neque imperdiet aliquam. Donec ultrices mauris sed ante varius viverra. Aliquam semper ullamcorper ex, et lobortis diam semper vel. In felis ex, aliquam aliquet pharetra eget, condimentum eget sem. Nam auctor tellus ac ligula egestas molestie. Etiam congue velit ut nisi cursus vehicula. Vestibulum in blandit arcu. Aenean eu.",
  },
  {
    id: 3,
    question: "Can Webrise help my brand?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget sem facilisis aliquam vitae eu erat. Donec pulvinar pharetra neque imperdiet aliquam. Donec ultrices mauris sed ante varius viverra. Aliquam semper ullamcorper ex, et lobortis diam semper vel. In felis ex, aliquam aliquet pharetra eget, condimentum eget sem. Nam auctor tellus ac ligula egestas molestie. Etiam congue velit ut nisi cursus vehicula. Vestibulum in blandit arcu. Aenean eu.",
  },
  {
    id: 4,
    question: "What is the process?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget sem facilisis aliquam vitae eu erat. Donec pulvinar pharetra neque imperdiet aliquam. Donec ultrices mauris sed ante varius viverra. Aliquam semper ullamcorper ex, et lobortis diam semper vel. In felis ex, aliquam aliquet pharetra eget, condimentum eget sem. Nam auctor tellus ac ligula egestas molestie. Etiam congue velit ut nisi cursus vehicula. Vestibulum in blandit arcu. Aenean eu.",
  },
];

export default Accordion;
