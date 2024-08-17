import styles from "/_repos/webrise/styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedCursor from "react-animated-cursor";

export default async function BlogEnd() {
  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products?limit=10");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const data = await getData();

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
        showSystemCursor={true}
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
        <div className={styles.blog_title}>
          <h1>NEWS & BLOG</h1>
          <span>(Blog)</span>
        </div>
        <div className={styles.blog_content}>
          <div className={styles.blog_cards_container}>
            {data.slice(8, 10).map((card) => (
              <Link
                href={"http://localhost:3000/blog/" + card.id}
                key={card.id}
              >
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
      </section>
    </>
  );
}
