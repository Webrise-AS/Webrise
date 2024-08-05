import styles from "/_repos/webrise/styles/Home.module.scss";
import Head from "next/head";

export default function BlogDetails({ params }) {
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

      <section className={styles.blogDetails_container}>
        BlogDetails{params.blogId}
      </section>
    </>
  );
}
