"use client";
import styles from "../styles/Home.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

export function SliderClients({ data }) {
  const [emblaRef2] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 0.75, direction: "backward" }),
  ]);

  return (
    <>
      <div className={styles.embla} ref={emblaRef2}>
        <div className={styles.embla__container}>
          {data.heroSection.brandSlider.map((slider, i) => (
            <div className={styles.embla__slide} key={i}>
              <Image
                src={slider.imageurl}
                width={200}
                height={60}
                alt="image of one of clients logo"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function SliderReview({ data }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      delay: 3500,
      stopOnMouseEnter: false,
      watchDrag: false,
    }),
  ]);

  return (
    <>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {data.feedbackSection.map(({ id, client, review }) => (
            <div className={styles.embla__slide} key={id}>
              <h3>{client}</h3>
              <p>{review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function SliderService({ data }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 1.25, direction: "backward" }),
  ]);

  return (
    <>
      <div className={styles.services_slider_section}>
        <p>We got the right tools for the job!</p>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {data.sliderSection.images.map(({ imageurl }, index) => (
              <div className={styles.embla__slide} key={index}>
                <Image
                  src={imageurl}
                  height={200}
                  width={200}
                  alt="Logo of one of the tech stacks that we use"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
