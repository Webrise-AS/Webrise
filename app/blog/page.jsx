"use client";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import Image from "next/image";
import Link from "next/link";

const blogPage_data = [
  {
    id: 1,
    date: `March 31, 2024`,
    slogan: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a62e7562434e6b933981_Article%20Thumbnail%20%238-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 2,
    date: `April 1, 2024`,
    slogan: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 3,
    date: `july 21, 2024`,
    slogan: `Sustainable Design: Strobe™'s Approach to Eco-Friendly Digital Solutions`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a61bf5ced39c23f99a20_Article%20Thumbnail%20%237-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 4,
    date: `April 13, 2024`,
    slogan: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a605c9163707cd3907e7_Article%20Thumbnail%20%236-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 5,
    date: `April 13, 2024`,
    slogan: `Inside Strobe™: A Day in the Life of Berlin's Most Innovative Creative Team`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5f1b576d554df6331e4_Article%20Thumbnail%20%235-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 6,
    date: `April 13, 2024`,
    slogan: `Sustainable Design: Strobe™'s Approach to Eco-Friendly Digital Solutions`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5d6b8d2e2ff85eb3db4_Article%20Thumbnail%20%234-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 7,
    date: `April 13, 2024`,
    slogan: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5bbceb2ea2527a6dab2_Article%20Thumbnail%20%233-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 8,
    date: `April 13, 2024`,
    slogan: `Inside Strobe™: A Day in the Life of Berlin's Most Innovative Creative Team`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5a48ff0887dc1fe2bd6_Article%20Thumbnail%20%232-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 9,
    date: `April 13, 2024`,
    slogan: `Sustainable design: Strobe™'s approach to eco-friendly digital solutions`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 10,
    date: `April 13, 2024`,
    slogan: `Inside Strobe™: A day in the life of Berlin's most innovative creative team`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723ab81a3f7d07a7a97d1_Testimonial.webp`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimateCursor />
      <LenisScroll />

      <section className={styles.blog_container}>
        <Parallax speed={-7}>
          <div className={styles.blog_title}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "41.5vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                NEWS
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: "41.5vh", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ ease: "easeIn", duration: 0.6 }}
              >
                & BLOG
              </motion.h2>
            </div>
          </div>
        </Parallax>
        <Parallax speed={0}>
          <div className={styles.blog_content}>
            <motion.div
              className={styles.blog_cards_container}
              initial={{ y: "30vh" }}
              animate={{ y: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              {blogPage_data.slice(0, 8).map((blog) => (
                <Link
                  href={"http://localhost:3000/blog/" + blog.id}
                  key={blog.id}
                >
                  <motion.div
                    className={styles.single_card}
                    animate={{ y: "10vh", scale: 0.85 }}
                    whileInView={{ y: 0, scale: 1 }}
                    transition={{ ease: "easeIn", duration: 0.6 }}
                  >
                    <div className={styles.image_wrapper}>
                      <Image
                        src={blog.heroImage}
                        width={500}
                        height={700}
                        alt={"image for the specified blog card"}
                        loading="lazy"
                      />
                    </div>
                    <h3>{blog.date}</h3>
                    <h4>{blog.slogan}</h4>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
            {blogPage_data.length >= 6 ? (
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
        </Parallax>
      </section>
    </>
  );
}
