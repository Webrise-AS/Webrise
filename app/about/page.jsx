import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";

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
        <div className={styles.about_content_section}>
          <divc className={styles.content_section_story}>
            <p>
              Situated in the pulsating heart of Berlin, Strobe™ thrives on the
              island’s eclectic energy and rich cultural tapestry.
            </p>
            <p>
              Our holistic, collaborative approach is tailored to navigate the
              challenges and opportunities of our era. Experience transformative
              digital solutions that captivate and engage.
            </p>
          </divc>
          <divc className={styles.content_section_sliders}></divc>
          <divc className={styles.content_section_info}></divc>
        </div>
        <div className={styles.about_talent_section}>
          <div>
            <p>
              Be part of the innovation journey with Webrise. Our monthly
              insights showcase the cutting-edge trends, technologies, and
              creative strategies shaping the future. Stay informed, inspired,
              and ahead of the curve with Webrise
            </p>
            <Link href={"http://localhost:3000/contact/"}>
              <button>Learn more</button>
            </Link>
          </div>
          <div className={styles.about_talent_overlay}></div>
        </div>
      </section>
    </>
  );
}
