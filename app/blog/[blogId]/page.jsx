import styles from "../../../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LenisScroll from "@/components/LenisScroll";
import AnimateCursor from "@/components/AnimateCursor";
import { database } from "@/app/utils/database";

const blogPage_data = database.blogPage_data;

export default async function BlogDetails(props) {
  const params = await props.params;
  const id = Number(params.blogId);

  function filterBlog(dataToFilter, prop) {
    return dataToFilter.filter((item) => item.id === prop);
  }
  function filterRelatedArticles(dataToFilter, id) {
    return dataToFilter.filter((item) => item.id != id).slice(2, 5);
  }
  const singleArticle = filterBlog(blogPage_data, id);
  const OtherArticlesData = filterRelatedArticles(blogPage_data, id);

  return (
    <>
      <Head>
        <title>{singleArticle[0].title} | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimateCursor />
      <LenisScroll />

      <section className={styles.blogDetails_container}>
        <div
          className={styles.blogDetails_hero_section}
          style={{
            backgroundImage: `url(${singleArticle[0].heroImage})`,
          }}
        >
          <div className={styles.hero_content}>
            <h3>{singleArticle[0].date}</h3>
            <div style={{ overflow: "hidden" }}>
              <h1>{singleArticle[0].slogan}</h1>
            </div>
          </div>
          <div className={styles.hero_overlay}></div>
        </div>
        <div className={styles.blogDetails_info_section}>
          <div className={styles.blogDetails_info_content}>
            <h4>{singleArticle[0].intro}</h4>
            <div className={styles.info_block}>
              <h2>{singleArticle[0].actOne.title}</h2>
              <p>{singleArticle[0].actOne.description}</p>
            </div>
            <div className={styles.info_image_container}>
              <Image
                src={`${singleArticle[0].actOne.imageurl}`}
                width={866}
                height={480}
                alt={"Image for the specified blog card"}
                loading="lazy"
              />
            </div>
            <div className={styles.info_block}>
              <h2>{singleArticle[0].actTwo.title}</h2>
              <p>{singleArticle[0].actTwo.description}</p>
            </div>
            <h5>{singleArticle[0].actTwo.quotation}</h5>
            <div className={styles.info_block}>
              <h2>{singleArticle[0].actThree.title}</h2>
              <p>{singleArticle[0].actThree.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.blogDetails_related_section}>
          <div style={{ overflow: "hidden" }}>
            <h2>RELATED</h2>
          </div>
          <div className={styles.related_cards_container}>
            {OtherArticlesData.map(({ id, heroImage, date, slogan }) => (
              <Link href={"http://localhost:3000/blog/" + id} key={id}>
                <div className={styles.single_card}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src={heroImage}
                      width={500}
                      height={700}
                      alt={"image for the specified blog card"}
                      loading="lazy"
                    />
                  </div>
                  <h3>{date}</h3>
                  <h4>{slogan}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
