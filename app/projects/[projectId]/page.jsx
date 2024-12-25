import styles from "../../../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import AnimateCursor from "@/components/AnimateCursor";
import LenisScroll from "@/components/LenisScroll";
import Link from "next/link";

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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
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
        {
          imageurl: `https://cdn.prod.website-files.com/6606f0f658b42ca7220e36c3/6609a65bb576d554df639bb3_Article%20Thumbnail%20%239-p-500.png`,
        },
      ],
    },
  },
];

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
