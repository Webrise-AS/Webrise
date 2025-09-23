"use client";
import { useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import useDimensions from "@/app/hooks/useDimension";
import { database } from "@/app/utils/database";
import styles from "../styles/Home.module.scss";

const projectsPage_data = database.projectsPage_data;

export default function Gallery() {
  const containerRef = useRef(null);
  const { height } = useDimensions();

  // Memoize the projects data to prevent unnecessary re-renders
  const displayedProjects = useMemo(() => projectsPage_data.slice(0, 3), []);

  // Scroll effects at the top level
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values at the top level
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.9]);

  // Memoize the transforms array
  const columnTransforms = useMemo(() => [y1, y2, y3, y4], [y1, y2, y3, y4]);

  const parallaxConfig = useMemo(
    () => ({
      speed: -4,
      easing: [0.42, 0, 0.58, 1],
    }),
    []
  );

  return (
    <section aria-labelledby="gallery-heading">
      <Parallax speed={parallaxConfig.speed}>
        <div className={styles.project_hero_textfield}>
          <AnimatedText
            text="Recent"
            animation={{ initialY: "130%", skewY: 13 }}
          />
          <AnimatedText
            text="Projects"
            animation={{ initialY: "130%", skewY: 13 }}
          />
        </div>
      </Parallax>

      <div ref={containerRef} className={styles.project_gallery}>
        {columnTransforms.map((y, index) => (
          <Column key={`column-${index}`} projects={displayedProjects} y={y} />
        ))}
      </div>
    </section>
  );
}

// Extracted AnimatedText component
const AnimatedText = ({ text, id, animation }) => (
  <div style={{ overflow: "hidden" }}>
    <motion.h2
      id={id}
      initial={{ y: animation.initialY, skewY: animation.skewY }}
      whileInView={{ y: 0, skewY: 0 }}
      transition={{ ease: "easeIn", duration: 0.6 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {text}
    </motion.h2>
  </div>
);

// Column component
const Column = ({ projects, y }) => {
  return (
    <motion.div
      style={{ y }}
      className={styles.gallery_content}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {projects.map(({ id, image, title }) => (
        <div key={id} className={styles.image_container}>
          <Link
            href={`/projects/${id}`}
            passHref
            aria-label={`View ${title || "project"} details`}
          >
            <Image
              src={image}
              alt={`Screenshot of ${title || "our project"}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              loading="lazy"
            />
          </Link>
        </div>
      ))}
    </motion.div>
  );
};
