import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default async function BlogData({ apiLength }) {
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
      <div className={styles.blog_content}>
        <motion.div
          className={styles.blog_cards_container}
          initial={{ y: "30vh" }}
          animate={{ y: 0 }}
          transition={{ ease: "easeIn", duration: 0.6 }}
        >
          {data.slice(0, 8).map((blog) => (
            <Link href={"http://localhost:3000/blog/" + blog.id} key={blog.id}>
              <motion.div
                className={styles.single_card}
                animate={{ y: "10vh", scale: 0.85 }}
                whileInView={{ y: 0, scale: 1 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                <div className={styles.image_wrapper}>
                  <Image
                    src={blog.image}
                    width={500}
                    height={700}
                    alt={"image for the specified blog card"}
                    loading="lazy"
                  />
                </div>
                <h3>{blog.price}</h3>
                <h4>{blog.title}</h4>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        {data.length >= 6 ? (
          <div style={{ overflow: "hidden" }}>
            <Link href={"http://localhost:3000/blog/end"}>
              <h5>NEXT</h5>
            </Link>
          </div>
        ) : (
          <div style={{ overflow: "hidden" }}>
            <h5 className={styles.btn_effect}>NEXT</h5>
          </div>
        )}
      </div>
    </>
  );
}
