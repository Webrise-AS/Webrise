import Link from "next/link";
import styles from "/_repos/webrise/styles/Home.module.scss";
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
                <h2>{blog.price}</h2>
                <h3>{blog.title}</h3>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        {data.length >= 6 ? (
          <div style={{ overflow: "hidden" }}>
            <Link href={"http://localhost:3000/blog/end"}>
              <motion.h4
                animate={{ y: "20vh", skewY: 15 }}
                whileInView={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                NEXT
              </motion.h4>
            </Link>
          </div>
        ) : (
          <div style={{ overflow: "hidden" }}>
            <motion.h4
              className={styles.prev_btn}
              animate={{ y: "20vh", skewY: 15 }}
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
