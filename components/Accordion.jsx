import styles from "@/styles/Home.module.scss";
import { useState } from "react";

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
            className={styles.single_accordion}
            key={info.id}
            onClick={() => toggle(i)}
          >
            <div className={styles.single_accordion_tittle}>
              <span>{selected === i ? "-" : "+"}</span>
              <h2>{info.question}</h2>
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
    answer:
      "Strobe™ stands out through our unique fusion of Berlin's artistic heritage with modern digital innovation. Our approach is not just about creating visually stunning designs; it's about delivering functional, user-centered experiences that drive results and embody the vibrant spirit of our city.",
  },
  {
    id: 2,
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget sem facilisis aliquam vitae eu erat. Donec pulvinar pharetra neque imperdiet aliquam. Donec ultrices mauris sed ante varius viverra. Aliquam semper ullamcorper ex, et lobortis diam semper vel. In felis ex, aliquam aliquet pharetra eget, condimentum eget sem. Nam auctor tellus ac ligula egestas molestie. Etiam congue velit ut nisi cursus vehicula. Vestibulum in blandit arcu. Aenean eu.",
  },
  {
    id: 3,
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget sem facilisis aliquam vitae eu erat. Donec pulvinar pharetra neque imperdiet aliquam. Donec ultrices mauris sed ante varius viverra. Aliquam semper ullamcorper ex, et lobortis diam semper vel. In felis ex, aliquam aliquet pharetra eget, condimentum eget sem. Nam auctor tellus ac ligula egestas molestie. Etiam congue velit ut nisi cursus vehicula. Vestibulum in blandit arcu. Aenean eu.",
  },
  {
    id: 4,
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue lacus eget sem facilisis aliquam vitae eu erat. Donec pulvinar pharetra neque imperdiet aliquam. Donec ultrices mauris sed ante varius viverra. Aliquam semper ullamcorper ex, et lobortis diam semper vel. In felis ex, aliquam aliquet pharetra eget, condimentum eget sem. Nam auctor tellus ac ligula egestas molestie. Etiam congue velit ut nisi cursus vehicula. Vestibulum in blandit arcu. Aenean eu.",
  },
];

export default Accordion;