import styles from "../../styles/services.module.scss";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.services_container}>services</section>
    </>
  );
}
