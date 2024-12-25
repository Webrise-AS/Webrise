import styles from "../../../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LenisScroll from "@/components/LenisScroll";
import AnimateCursor from "@/components/AnimateCursor";

const blogPage_data = [
  {
    id: 1,
    date: `March 31, 2024`,
    slogan: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a62e7562434e6b933981_Article%20Thumbnail%20%238-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 2,
    date: `April 1, 2024`,
    slogan: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 3,
    date: `july 21, 2024`,
    slogan: `Sustainable Design: Strobe™'s Approach to Eco-Friendly Digital Solutions`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a61bf5ced39c23f99a20_Article%20Thumbnail%20%237-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 4,
    date: `April 13, 2024`,
    slogan: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a605c9163707cd3907e7_Article%20Thumbnail%20%236-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 5,
    date: `April 13, 2024`,
    slogan: `Inside Strobe™: A Day in the Life of Berlin's Most Innovative Creative Team`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5f1b576d554df6331e4_Article%20Thumbnail%20%235-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 6,
    date: `April 13, 2024`,
    slogan: `Sustainable Design: Strobe™'s Approach to Eco-Friendly Digital Solutions`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5d6b8d2e2ff85eb3db4_Article%20Thumbnail%20%234-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 7,
    date: `April 13, 2024`,
    slogan: `Unveiling the Future of Web Design: Trends to Watch in Berlin's Digital Scene`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5bbceb2ea2527a6dab2_Article%20Thumbnail%20%233-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 8,
    date: `April 13, 2024`,
    slogan: `Inside Strobe™: A Day in the Life of Berlin's Most Innovative Creative Team`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5a48ff0887dc1fe2bd6_Article%20Thumbnail%20%232-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 9,
    date: `April 13, 2024`,
    slogan: `Sustainable design: Strobe™'s approach to eco-friendly digital solutions`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
  {
    id: 10,
    date: `April 13, 2024`,
    slogan: `Inside Strobe™: A day in the life of Berlin's most innovative creative team`,
    intro: `In an era where digital technology and social media are integral parts of our daily lives,
      modern couples face unique challenges. This article explores how couples can navigate relationships
      in the digital age, striking a balance between the online world and their personal connection.`,
    heroImage: `https://assets-global.website-files.com/6606f0f658b42ca7220e3695/660723ab81a3f7d07a7a97d1_Testimonial.webp`,

    actOne: {
      title: `Communication Dynamics`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a511d3a32bb0fd0f8bc4_Article%20Body.png`,
    },

    actTwo: {
      title: `Digital communication varies`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
      quotation: `“Couples should find a balance where they feel comfortable sharing online passwords or
      friend lists without feeling obligated or pressured.”`,
    },

    actThree: {
      title: `Balancing Online Interaction`,
      description: `Adapting to Communication Styles: Digital communication varies greatly from traditional
        methods. Couples need to adapt and understand each other’s preferred styles, whether it’s texting,
        emailing, or video calls. This helps in reducing misunderstandings and fostering better communication.
        Balancing Online Interaction: Digital age relationships often involve an online component.
        Couples should discuss and agree on their digital interaction levels, including social media usage,
        online friendships, and digital footprints that they are comfortable with.`,
    },
  },
];

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
