import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.about_container}>
        <div className={styles.about_hero_section}>
          <div className={styles.hero_section_top}>
            <div>
              <div className={styles.image_wrapper}>
                <Image
                  src={
                    "https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723aa9b8b7fc64fc7bf9a_Cons-p-500.webp"
                  }
                  width={299}
                  height={160}
                  alt={"image of a woman in an office useing a pc for work"}
                />
              </div>
              <span>(About)</span>
            </div>

            <Image
              src={
                "https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723aa97aa99be5469fa63_About%20-%20Image-p-500.webp"
              }
              width={310}
              height={454}
              alt={"image of a woman in an office useing a pc for work"}
            />
          </div>
          <div className={styles.hero_section_bottom}>
            <h1>DIGITAL</h1>
            <h2>PIONEERS</h2>
          </div>
        </div>
        <div className={styles.about_content_section}>content</div>
        <div className={styles.about_talent_section}>talent</div>
      </section>
    </>
  );
}
