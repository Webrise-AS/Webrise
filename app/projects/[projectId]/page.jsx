import styles from "/_repos/webrise/styles/Home.module.scss";
import { getSingleData } from "@/app/helpers/page";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProjectDetails({ params }) {
  const id = Number(params.projectId);
  const projectData = await getSingleData(id);

  console.log("data======|", projectData.title, "|=======");

  async function getOtherProjectsData() {
    const res = await fetch("https://fakestoreapi.com/products?limit=10");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const OtherProjectsData = await getOtherProjectsData();

  function filterOtherProjects(dataToFilter, id) {
    return dataToFilter.filter((item) => item.id != id).slice(0, 4);
  }

  return (
    <>
      <Head>
        <title>{projectData.title} | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.projectsDetails_container}>
        <div className={styles.projectsDetails_title}>
          <span>{projectData.category}</span>
          <h1>{projectData.title}</h1>
        </div>
        <div className={styles.projectsDetails_content}>
          <h3>{projectData.description}</h3>
          <Image
            src={projectData.image}
            width={864}
            height={864}
            alt={"image for the specified blog card"}
            loading="lazy"
          />
          <h2>Challenge</h2>
          <p>{projectData.description}</p>
          <div className={styles.duo_images}>
            <Image
              src={projectData.image}
              width={500}
              height={500}
              alt={"image for the specified blog card"}
              loading="lazy"
            />
            <Image
              src={projectData.image}
              width={500}
              height={500}
              alt={"image for the specified blog card"}
              loading="lazy"
            />
          </div>
          <h2>Strategy</h2>
          <p>{projectData.description}</p>
          <Image
            src={projectData.image}
            width={864}
            height={864}
            alt={"image for the specified blog card"}
            loading="lazy"
            className={styles.single_image}
          />
          <h2>Result</h2>
          <p>{projectData.description}</p>
          <div className={styles.result_images}>
            <div className={styles.duo_images}>
              <Image
                src={projectData.image}
                width={500}
                height={500}
                alt={"image for the specified blog card"}
                loading="lazy"
              />
              <Image
                src={projectData.image}
                width={500}
                height={500}
                alt={"image for the specified blog card"}
                loading="lazy"
              />
            </div>
            <Image
              src={projectData.image}
              width={864}
              height={864}
              alt={"image for the specified blog card"}
              loading="lazy"
              className={styles.single_image}
            />
          </div>
        </div>
        <div className={styles.projectsDetails_otherProjects_container}>
          <span>OTHER PROJECTS</span>
          <div className={styles.otherProjects_content}>
            {filterOtherProjects(OtherProjectsData, id).map((card) => (
              <Link
                href={"http://localhost:3000/projects/" + card.id}
                key={card.id}
              >
                <div className={styles.single_project}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src={card.image}
                      width={500}
                      height={700}
                      alt={"image for the specified blog card"}
                      loading="lazy"
                    />
                  </div>
                  <h4>{card.price}</h4>
                  <h5>{card.title}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
