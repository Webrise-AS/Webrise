import styles from "/_repos/webrise/styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedCursor from "react-animated-cursor";

export default async function BlogDetails({ params }) {
  const id = params.blogId;

  async function getData() {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const data = await Object.assign(getData());

  console.log("data======[", data.price, "]=======");

  async function getRelatedData() {
    const res = await fetch("https://fakestoreapi.com/products?limit=10");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const dataRelated = await getRelatedData();

  function filterRelatedPosts(dataToFilter, id) {
    return dataToFilter.filter((item) => item.id != id).slice(0, 3);
  }

  return (
    <>
      <Head>
        <title>BlogDetails | Webrise</title>
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

      <section className={styles.blogDetails_container}>
        <div
          className={styles.blogDetails_hero_section}
          style={{
            backgroundImage:
              "url(https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a4da3ad06dd143d13e06_Article%20Main.png)",
          }}
        >
          <div className={styles.hero_content}>
            <h3>March 31, 2024</h3>
            <h1>
              Inside Webrise: A Day in the Life of Berlin&apos;s Most Innovative
              Creative Team
            </h1>
          </div>
          <div className={styles.hero_overlay}></div>
        </div>
        <div className={styles.blogDetails_info_section}>
          <div className={styles.blogDetails_info_content}>
            <h4>
              In an era where digital technology and social media are integral
              parts of our daily lives, modern couples face unique challenges.
              This article explores how couples can navigate relationships in
              the digital age, striking a balance between the online world and
              their personal connection.
            </h4>
            <div className={styles.info_block}>
              <h2>Communication Dynamics</h2>
              <p>
                Adapting to Communication Styles: Digital communication varies
                greatly from traditional methods. Couples need to adapt and
                understand each other’s preferred styles, whether it’s texting,
                emailing, or video calls. This helps in reducing
                misunderstandings and fostering better communication. Balancing
                Online Interaction: Digital age relationships often involve an
                online component. Couples should discuss and agree on their
                digital interaction levels, including social media usage, online
                friendships, and digital footprints that they are comfortable
                with.
              </p>
            </div>
            <Image
              src={"https://placehold.jp/866x480.png"}
              width={866}
              height={480}
              alt={"image for the specified blog card"}
              loading="lazy"
            />
            <div className={styles.info_block}>
              <h2>Digital communication varies</h2>
              <p>
                Adapting to Communication Styles: Digital communication varies
                greatly from traditional methods. Couples need to adapt and
                understand each other’s preferred styles, whether it’s texting,
                emailing, or video calls. This helps in reducing
                misunderstandings and fostering better communication. Balancing
                Online Interaction: Digital age relationships often involve an
                online component. Couples should discuss and agree on their
                digital interaction levels, including social media usage, online
                friendships, and digital footprints that they are comfortable
                with.
              </p>
            </div>
            <h5>
              “Couples should find a balance where they feel comfortable sharing
              online passwords or friend lists without feeling obligated or
              pressured.”
            </h5>
            <div className={styles.info_block}>
              <h2>Balancing Online Interaction</h2>
              <p>
                Adapting to Communication Styles: Digital communication varies
                greatly from traditional methods. Couples need to adapt and
                understand each other’s preferred styles, whether it’s texting,
                emailing, or video calls. This helps in reducing
                misunderstandings and fostering better communication. Balancing
                Online Interaction: Digital age relationships often involve an
                online component. Couples should discuss and agree on their
                digital interaction levels, including social media usage, online
                friendships, and digital footprints that they are comfortable
                with.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.blogDetails_related_section}>
          <span>RELATED</span>
          <div className={styles.related_cards_container}>
            {filterRelatedPosts(dataRelated, id).map((card) => (
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
        </div>
      </section>
    </>
  );
}
