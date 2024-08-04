import Head from "next/head";
import styles from "/_repos/webrise/styles/Home.module.scss";
import AnimatedCursor from "react-animated-cursor";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Webrise</title>
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
        showSystemCursor={false}
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

      <section className={styles.contact_container}>
        <div className={styles.contact_content}>
          <h3>(Contact)</h3>
          <ul>
            <Link href={"tel:+4799592853"}>
              <li>
                <BsArrowRightShort
                  fontSize={40}
                  color="#151515"
                  fontWeight={400}
                />
                <h2>+47 995 928 53</h2>
              </li>
            </Link>
            <Link href={"mailto:info@webrise.no"}>
              <li>
                <BsArrowRightShort
                  fontSize={40}
                  color="#151515"
                  fontWeight={400}
                />
                <h2>info@webrise.no</h2>
              </li>
            </Link>
            <Link
              href={
                "https://www.google.com/maps/place/Oslo/@59.8937521,10.6203131,11z/data=!3m1!4b1!4m6!3m5!1s0x46416e61f267f039:0x7e92605fd3231e9a!8m2!3d59.9138688!4d10.7522454!16zL20vMDVsNjQ?entry=ttu"
              }
            >
              <li>
                <BsArrowRightShort
                  fontSize={40}
                  color="#151515"
                  fontWeight={400}
                />
                <h2>Oslo, Norway</h2>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.contact_tittle}>
          <h1>GET IN TOUCH</h1>
        </div>
      </section>
    </>
  );
}
