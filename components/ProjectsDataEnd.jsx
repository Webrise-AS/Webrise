import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default async function ProjectsDataEnd({ apiLength }) {
  async function getMoreData() {
    const res = await fetch(
      `https://fakestoreapi.com/products?limit=${apiLength}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const data = await getMoreData();
  return (
    <>
      <div className={styles.projects_content}>
        <div className={styles.projects_cards_container}>
          {data.slice(8, 10).map((project) => (
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

        <Link href={"http://localhost:3000/projects"}>
          <div style={{ overflow: "hidden" }}>
            <motion.h4
              animate={{ y: "30vh", skewY: 15 }}
              whileInView={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              PREVIOUS
            </motion.h4>
          </div>
        </Link>
      </div>
    </>
  );
}
