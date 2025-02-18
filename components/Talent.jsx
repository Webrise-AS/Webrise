import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

export default function Talent() {
  return (
    <>
      <section className={styles.hire_container}>
        <div className={styles.hire_content}>
          <motion.p
            animate={{ y: 100, opacity: 0, skewY: 5 }}
            whileInView={{ y: 0, opacity: 1, skewY: 0 }}
            transition={{ duration: 0.6 }}
          >
            Be part of the innovation journey with Webrise. Our monthly insights
            showcase the cutting-edge trends, technologies, and creative
            strategies shaping the future. Stay informed, inspired, and ahead of
            the curve with Webrise
          </motion.p>
          <motion.div
            animate={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href={"/contact"}>
              <button>Learn more</button>
            </Link>
          </motion.div>
        </div>
        <div className={styles.hire_overlay}></div>
      </section>
    </>
  );
}
