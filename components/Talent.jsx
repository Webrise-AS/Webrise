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
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            Ready to create stunning websites that set the standard? Work with
            the latest tech, tackle exciting projects, and grow in a team that
            values excellence. If you’re among the best, we want you!
          </motion.p>
          <motion.div
            animate={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <Link href={"/contact"}>
              <button>Join us</button>
            </Link>
          </motion.div>
        </div>
        <div className={styles.hire_overlay}></div>
      </section>
    </>
  );
}
