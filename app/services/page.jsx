"use client";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import AnimateCursor from "@/components/AnimateCursor";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function Services() {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 2.5, direction: "backward" }),
  ]);

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

      <AnimateCursor />

      <section className={styles.services_container}>
        <div className={styles.services_hero_section}>
          <div className={styles.hero_tittle_container}>
            <div style={{ overflow: "hidden" }}>
              <h1>WHAT</h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h2>WE</h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h2>DO</h2>
            </div>
          </div>
          <div className={styles.hero_content_container}>
            <div style={{ overflow: "hidden", textAlign: "end" }}>
              <h4>(Services)</h4>
            </div>
            <div className={styles.hero_image_container}>
              <Image
                src="https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723aa9b8b7fc64fc7bf9a_Cons-p-500.webp"
                width={900}
                height={400}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.services_slider_section}>
          <span>&quot;We got the right tools for the job!&quot;</span>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              <div className={styles.embla__slide}>—</div>
              <div className={styles.embla__slide}>Creative</div>
              <div className={styles.embla__slide}>—</div>
              <div className={styles.embla__slide}>Pioneers</div>
              <div className={styles.embla__slide}>—</div>
              <div className={styles.embla__slide}>Strategi</div>
              <div className={styles.embla__slide}>—</div>
              <div className={styles.embla__slide}>Bold</div>
            </div>
          </div>
        </div>
        <div className={styles.services_content_section}>
          <div className={styles.content_speciality_section}>
            <div>
              <h3>Webdevelopment</h3>
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
              <Link href="/contact">
                <button>Contact</button>
              </Link>
            </div>
            <div className={styles.content_speciality_image}>
              <Image
                src="https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723ab81a3f7d07a7a97d1_Testimonial.webp"
                width={600}
                height={650}
                alt=""
              />
            </div>
          </div>
          <div className={styles.content_speciality_section_two}>
            <div>
              <h3>Søkemotormarkedsføring - SEM</h3>
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
              <Link href="/contact">
                <button>Contact</button>
              </Link>
            </div>
            <div className={styles.content_speciality_image}>
              <Image
                src="https://assets-global.website-files.com/6606f0f658b42ca7220e36c3/6609a5f1b576d554df6331e4_Article%20Thumbnail%20%235-p-500.png"
                width={600}
                height={650}
                alt=""
              />
            </div>
          </div>
          <div className={styles.content_speciality_section}>
            <div>
              <h3>Søkemotor­­optimalisering – SEO</h3>
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
              <Link href="/contact">
                <button>Contact</button>
              </Link>
            </div>
            <div className={styles.content_speciality_image}>
              <Image
                src="https://assets-global.website-files.com/6606f0f658b42ca7220e36c3/6609a5bbceb2ea2527a6dab2_Article%20Thumbnail%20%233-p-500.png"
                width={600}
                height={650}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
