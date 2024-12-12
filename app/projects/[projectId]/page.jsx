import styles from "../../../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";

const projectsPage_data = [
  {
    id: 1,
    brandName: `Sand & Witch`,
    slogan: `The crunchier the butter`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
  {
    id: 2,
    brandName: `Sweet Lorens`,
    slogan: `Cookies made of dreams`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
  {
    id: 3,
    brandName: `Caffeine Coders`,
    slogan: `Code Flows as Smooth as Our Coffee`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5bbceb2ea2527a6dab2_Article%20Thumbnail%20%233-p-500.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5bbceb2ea2527a6dab2_Article%20Thumbnail%20%233-p-500.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
  {
    id: 4,
    brandName: `Pasta Palette`,
    slogan: `Every Flavor Tells a Tale`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5a48ff0887dc1fe2bd6_Article%20Thumbnail%20%232-p-500.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5a48ff0887dc1fe2bd6_Article%20Thumbnail%20%232-p-500.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
  {
    id: 5,
    brandName: `Webrise`,
    slogan: `Make you're brand rise with webrise`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a61bf5ced39c23f99a20_Article%20Thumbnail%20%237-p-500.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a61bf5ced39c23f99a20_Article%20Thumbnail%20%237-p-500.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
  {
    id: 6,
    brandName: `High Art`,
    slogan: `The Highest Quality Art`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5f1b576d554df6331e4_Article%20Thumbnail%20%235-p-500.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5f1b576d554df6331e4_Article%20Thumbnail%20%235-p-500.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
  {
    id: 7,
    brandName: `Sand & Witch`,
    slogan: `The crunchier the butter`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
  {
    id: 8,
    brandName: `Sweet Lorens`,
    slogan: `Cookies made of dreams`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
  {
    id: 9,
    brandName: `Caffeine Coders`,
    slogan: `Code Flows as Smooth as Our Coffee`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5bbceb2ea2527a6dab2_Article%20Thumbnail%20%233-p-500.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5bbceb2ea2527a6dab2_Article%20Thumbnail%20%233-p-500.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
  {
    id: 10,
    brandName: `Pasta Palette`,
    slogan: `Every Flavor Tells a Tale`,
    image: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5a48ff0887dc1fe2bd6_Article%20Thumbnail%20%232-p-500.png`,

    clientVision: {
      description: `Sweet Lorens approached Strobe™ with a vision to position their brand as a top contender
        in the gourmet cookie market. They wanted their brand to evoke warmth, happiness, and the magic
        of childhood dreams, all while emphasizing the quality and uniqueness of their product.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a5a48ff0887dc1fe2bd6_Article%20Thumbnail%20%232-p-500.png`,
    },

    projectChallenges: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
      ],
    },

    projectStrategy: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
    },

    projectResults: {
      description: `The challenge was to create a brand identity and online presence that encapsulated the
        essence of Sweet Lorens - a brand that crafts cookies not just from ingredients, but from dreams.
        The aim was to tell a compelling story that would resonate with consumers, making Sweet Lorens
        synonymous with the joy and wonder of the most delicious, dream-like cookies.`,
      images: [
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e55e9084457b17f3ec_Article%20Image%20%236-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7e5ceb2ea2527a89915_Article%20Image%20%234-p-500.png`,
        },
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a7598dae61ccc0191f22_Article%20Image%20%233.png`,
        },
      ],
    },
  },
];

export default async function ProjectDetails(props) {
  const params = await props.params;
  const id = Number(params.projectId);
  function filterdata(dataToFilter, id) {
    return dataToFilter.filter((item) => item.id === id);
  }

  const filteredData = filterdata(projectsPage_data, id);

  // const project = await getSingleData(id);

  // async function getOtherProjectsData() {
  //   const res = await fetch("https://fakestoreapi.com/products?limit=10");

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch data");
  //   }

  //   return res.json();
  // }
  // const OtherProjectsData = await getOtherProjectsData();

  // function filterOtherProjects(dataToFilter, id) {
  //   return dataToFilter.filter((item) => item.id != id).slice(0, 4);
  // }

  return (
    <>
      <Head>
        <title>works | Webrise</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimateCursor />
      <LenisScroll />

      {filteredData.map((project) => {
        {
          console.log(id, "id");
          console.log(project.id, "data");
          <section className={styles.projectsDetails_container}>
            <div className={styles.projectsDetails_title}>
              <div style={{ overflow: "hidden" }}>
                <h6>{project.brandName}</h6>
              </div>
              <div style={{ overflow: "hidden" }}>
                <h1>{project.slogan}</h1>
              </div>
            </div>
            <div className={styles.projectsDetails_content}>
              <h3>{project.clientVision.description}</h3>
              <Image
                src={project.clientVision.imageurl}
                width={864}
                height={864}
                alt={"Image desplaying the before side of the clients site"}
                loading="lazy"
              />
              <h2>Challenge</h2>
              <p>{project.projectChallenges.description}</p>
              <div className={styles.duo_images}>
                {project.projectChallenges.images.map((image, i) => (
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
              <p>{project.projectStrategy.description}</p>
              <Image
                src={project.projectStrategy.imageurl}
                width={864}
                height={864}
                alt={"Image desplaying the strategy of the project"}
                loading="lazy"
                className={styles.single_image}
              />
              <h2>Result</h2>
              <p>{project.projectResults.description}</p>
              <div className={styles.result_images}>
                {project.projectResults.images.map((image, i) => (
                  <div className={styles.duo_images} key={i}>
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

            {/* <div className={styles.projectsDetails_otherProjects_container}>
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
                      alt={"Image desplaying one of our other projects"}
                      loading="lazy"
                    />
                  </div>
                  <h4>{card.price}</h4>
                  <h5>{card.title}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
          </section>;
        }
      })}
    </>
  );
}
