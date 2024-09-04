import Link from "next/link";
import styles from "/_repos/webrise/styles/Home.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default async function ProjectsData({ apiLength }) {
  async function getData() {
    const res = await fetch(
      `https://fakestoreapi.com/products?limit=${apiLength}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const data = await getData();
  return (
    <>
      <div className={styles.projects_content}>
        <div className={styles.projects_cards_container}>
          {data.slice(0, 8).map((project) => (
            <Link
              href={"http://localhost:3000/projects/" + project.id}
              key={project.id}
            >
              <div className={styles.single_card}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={project.image}
                    width={500}
                    height={700}
                    alt={"image for the specified blog card"}
                    loading="lazy"
                  />
                </div>
                <h2>{project.price}</h2>
                <h3>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        {data.length >= 6 ? (
          <Link href={"http://localhost:3000/projects/end"}>
            <div style={{ overflow: "hidden" }}>
              <motion.h4
                animate={{ y: "25vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                NEXT
              </motion.h4>
            </div>
          </Link>
        ) : (
          <div style={{ overflow: "hidden" }}>
            <motion.h4
              className={styles.prev_btn}
              animate={{ y: "25vh", skewY: 15 }}
              whileInView={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              NEXT
            </motion.h4>
          </div>
        )}
      </div>
    </>
  );
}
