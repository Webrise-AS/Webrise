"use client";
import styles from "../styles/Home.module.scss";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import useDimensions from "@/app/hooks/useDimension";

const images = [
  "https://placehold.jp/640x701.png",
  "https://placehold.jp/640x702.png",
  "https://placehold.jp/640x703.png",
  "https://placehold.jp/640x704.png",
  "https://placehold.jp/640x705.png",
  "https://placehold.jp/640x706.png",
  "https://placehold.jp/640x707.png",
  "https://placehold.jp/640x708.png",
  "https://placehold.jp/640x709.png",
  "https://placehold.jp/640x710.png",
  "https://placehold.jp/640x711.png",
  "https://placehold.jp/640x712.png",
];

export default function Gallery() {
  const container = useRef(null);
  const { height } = useDimensions();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <>
      <Parallax speed={-4.3}>
        <div className={styles.project_hero_textfield}>
          <div>
            <motion.h2
              animate={{ y: "30vh", skewY: 8 }}
              whileInView={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
            >
              Recent
            </motion.h2>
          </div>
          <div>
            <motion.h2
              animate={{ y: "30vh", skewY: 8 }}
              whileInView={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
            >
              Projects
            </motion.h2>
          </div>
        </div>
      </Parallax>
      <div ref={container} className={styles.project_gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.gallery_content}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.image_container}>
            <Image src={src} alt="image of the project" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
