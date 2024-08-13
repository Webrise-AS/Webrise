import Link from "next/link";
import styles from "/_repos/webrise/styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";

export default async function ProjectsEnd() {
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

      <section className={styles.projects_container}>
        <div className={styles.projects_title}>
          <h1>OUR WORK</h1>
          <span>(Transformative digital solutions)</span>
        </div>
        <div className={styles.projects_content}>
          <div className={styles.projects_cards_container}>
            {data.slice(8, 10).map((card) => (
              <Link
                href={"http://localhost:3000/projects/" + card.id}
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

          <Link href={"http://localhost:3000/projects"}>
            <span>PREVIOUS</span>
          </Link>
        </div>
      </section>
    </>
  );
}
