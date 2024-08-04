import styles from "/_repos/webrise/styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";

export default function blog() {
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

      <AnimatedCursor
        innerSize={12}
        outerSize={60}
        innerScale={1.5}
        outerScale={1.5}
        outerAlpha={15}
        hasBlendMode={true}
        showSystemCursor={false}
        outerStyle={{
          mixBlendMode: "plus-lighter",
          zIndex: "9999",
        }}
        innerStyle={{
          borderRadius: "0px 10px 10px 10px",
          zIndex: "9999",
          backgroundColor: "#151515",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <section className={styles.blog_container}>
        <h1>NEWS & BLOG</h1>
        <div className={styles.blog_content}>
          <div className={styles.blog_cards_container}>
            <div className={styles.single_card}>
              <Image
                src={""}
                width={308}
                height={580}
                alt={"image for the blog"}
                loading="lazy"
              />
              <h2>h2</h2>
              <h3>h3</h3>
            </div>
          </div>
          <span>NEXT</span>
        </div>
      </section>
    </>
  );
}
