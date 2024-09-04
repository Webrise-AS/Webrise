import Link from "next/link";
import styles from "/_repos/webrise/styles/Home.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default async function BlogDataEnd({ apiLength }) {
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
      <div className={styles.blog_content}>
        <div className={styles.blog_cards_container}>
          {data.slice(8, 10).map((card) => (
            <Link href={"http://localhost:3000/blog/" + card.id} key={card.id}>
              <div className={styles.single_card}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={card.image}
                    width={500}
                    height={700}
                    alt={"image for the specified blog card"}
                    loading="lazy"
                  />
                </div>
                <h2>{card.price}</h2>
                <h3>{card.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <Link href={"http://localhost:3000/blog/"}>
          <span className={styles.prev_button}>PREVIOUS</span>
        </Link>
      </div>
    </>
  );
}
