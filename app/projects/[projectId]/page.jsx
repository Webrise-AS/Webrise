import styles from "../../../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import Link from "next/link";
import { database } from "@/app/utils/database";

const projectsPage_data = database.projectsPage_data;

export default async function ProjectDetails(props) {
  const params = await props.params;
  const id = Number(params.projectId);

  function filterProjects(dataToFilter, prop) {
    return dataToFilter.filter((item) => item.id === prop);
  }
  function filterOtherProjects(dataToFilter, id) {
    return dataToFilter.filter((item) => item.id != id).slice(0, 4);
  }

  const singleProject = filterProjects(projectsPage_data, id);
  const OtherProjectsData = filterOtherProjects(projectsPage_data, id);

  return (
    <>
      <Head>
        <title>{singleProject[0].brandName} | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimateCursor />
      <LenisScroll />

      <section className={styles.projectsDetails_container}>
        <div className={styles.projectsDetails_title}>
          <div style={{ overflow: "hidden" }}>
            <h6>{singleProject[0].brandName}</h6>
          </div>
          <div style={{ overflow: "hidden" }}>
            <h1>{singleProject[0].slogan}</h1>
          </div>
        </div>
        <div className={styles.projectsDetails_content}>
          <h3>{singleProject[0].clientVision.description}</h3>
          <Image
            src={singleProject[0].clientVision.imageurl}
            width={864}
            height={864}
            alt={"Image desplaying the before side of the clients site"}
          />
          <h2>Challenges</h2>
          <p>{singleProject[0].projectChallenges.description}</p>
          <div className={styles.duo_images}>
            {singleProject[0].projectChallenges.images.map((image, i) => (
              <Image
                src={image.imageurl}
                width={500}
                height={500}
                alt={
                  "Image desplaying the challenge we faced while working on the project"
                }
                loading="lazy"
                key={i}
              />
            ))}
          </div>
          <h2>Strategy</h2>
          <p>{singleProject[0].projectStrategy.description}</p>
          <Image
            src={singleProject[0].projectStrategy.imageurl}
            width={864}
            height={864}
            alt={"Image desplaying the strategy of the project"}
            loading="lazy"
            className={styles.single_image}
          />
          <h2>Result</h2>
          <p>{singleProject[0].projectResults.description}</p>
          <div className={styles.result_images_container}>
            {singleProject[0].projectResults.images.map((image, i) => (
              <div className={styles.result_images} key={i}>
                <Image
                  src={image.imageurl}
                  width={500}
                  height={500}
                  alt={"Image desplaying the final result of the project"}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.projectsDetails_otherProjects_container}>
          <span>OTHER PROJECTS</span>
          <div className={styles.otherProjects_content}>
            {OtherProjectsData.map(({ id, image, brandName, slogan }) => (
              <Link href={"http://localhost:3000/projects/" + id} key={id}>
                <div className={styles.single_project}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src={image}
                      width={500}
                      height={700}
                      alt={"Image desplaying one of our other projects"}
                      loading="lazy"
                    />
                  </div>
                  <h4>{brandName}</h4>
                  <h5>{slogan}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
