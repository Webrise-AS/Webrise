"use client";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function About() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef2] = useEmblaCarousel({ loop: true }, [Autoplay()]);

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
      <section className={styles.about_main_container}>
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
          <div className={styles.content_section_story}>
            <p>
              Situated in the pulsating heart of Berlin, Webrise thrives on the
              island’s eclectic energy and rich cultural tapestry.
            </p>
            <p>
              Our holistic, collaborative approach is tailored to navigate the
              challenges and opportunities of our era. Experience transformative
              digital solutions that captivate and engage.
            </p>
          </div>
          <div className={styles.content_section_sliders}>
            <div className={styles.embla} ref={emblaRef}>
              {/* {data.map((slide) => {})} */}
              <div className={styles.embla__container}>
                <div className={styles.embla__slide}>Slide 1</div>
                <div className={styles.embla__slide}>Slide 2</div>
                <div className={styles.embla__slide}>Slide 3</div>
                <div className={styles.embla__slide}>Slide 4</div>
              </div>
            </div>
            <div className={styles.embla} ref={emblaRef2}>
              <div className={styles.embla__container}>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Creative</div>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Pioneers</div>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Strategi</div>
                <div className={styles.embla__slide2}>—</div>
                <div className={styles.embla__slide2}>Bold</div>
              </div>
            </div>
          </div>
          <div className={styles.content_section_info}>
            <div className={styles.section_info_image}>
              <Image
                src={
                  "https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723ab81a3f7d07a7a97d1_Testimonial.webp"
                }
                width={640}
                height={880}
                alt={"image of a woman in an office useing a pc for work"}
              />
            </div>
            <div className={styles.section_info_container}>
              <h2>OUR OFFICE IS FULL OF ENERGY</h2>
              <div className={styles.values_container}>
                <div className={styles.single_value}>
                  <h4>(01)</h4>
                  <h3>Creatively Bold</h3>
                </div>
                <div className={styles.single_value}>
                  <h4>(02)</h4>
                  <h3>Digital Pioneers</h3>
                </div>
                <div className={styles.single_value}>
                  <h4>(03)</h4>
                  <h3>Strategic Thinkers</h3>
                </div>
                <div className={styles.single_value}>
                  <h4>(04)</h4>
                  <h3>User-Centric</h3>
                </div>
                <div className={styles.single_value}>
                  <h4>(05)</h4>
                  <h3>Design Savvy</h3>
                </div>
              </div>
            </div>
          </div>
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
