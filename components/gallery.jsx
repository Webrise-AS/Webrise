"use client";
import styles from "../styles/Home.module.scss";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import useDimensions from "@/app/hooks/useDimension";
import Link from "next/link";

const images = [
  "https://placehold.jp/640x701.png",
  "https://placehold.jp/640x702.png",
  "https://placehold.jp/640x703.png",
  "https://placehold.jp/640x704.png",
  "https://placehold.jp/640x705.png",
  "https://placehold.jp/640x706.png",
  "https://placehold.jp/640x707.png",
  "https://placehold.jp/640x708.png",
  "https://placehold.jp/640x709.png",
  "https://placehold.jp/640x710.png",
  "https://placehold.jp/640x711.png",
  "https://placehold.jp/640x712.png",
];

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

export default function Gallery() {
  const container = useRef(null);
  const { height } = useDimensions();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.1]);

  return (
    <>
      <Parallax speed={-4.3}>
        <div className={styles.project_hero_textfield}>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              animate={{ y: "30vh", skewY: 10 }}
              whileInView={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              Recent
            </motion.h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              animate={{ y: "30vh", skewY: 10 }}
              whileInView={{ y: 0, skewY: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
            >
              Projects
            </motion.h2>
          </div>
        </div>
      </Parallax>
      <div ref={container} className={styles.project_gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[0], images[1]]} y={y4} />
      </div>
    </>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.gallery_content}>
      {projectsPage_data.map((project) => {
        return (
          <div key={project.id} className={styles.image_container}>
            <Link href={"http://localhost:3000/projects/" + project.id}>
              <Image src={project.image} alt="Image of the project" fill />
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
};
