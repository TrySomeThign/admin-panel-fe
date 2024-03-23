<template>
  <div class="tw-w-full lg:tw-w-[75%]">
    <TitleAnimation
      :letters="titleCharacters"
      :classNameCharacter="'tw-text-silver'"
    />
    <TitleAnimation
      :letters="myFeatureCharacters"
      :classNameCharacter="'tw-text-silver'"
    />

    <div
      class="tw-text-silver tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8"
    >
      <div
        class="feature-work-item"
        v-for="feature in featureWorkList"
        :key="feature.id"
      >
        <FeatureWorkItem :feature-work="feature" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { ETypeFeatureWork, type IFeatureWork } from "~/store/interfaces";
import type { ITitleCharacter } from "../TitleAnimation/TitleAnimation.vue";

const featureWorkList: IFeatureWork[] = [
  {
    id: uuidv4(),
    title: "Project 01",
    image: "/images/project-image-1.png",
    type: ETypeFeatureWork.Coding,
    link: "",
  },
  {
    id: uuidv4(),
    title: "Project 02",
    image: "/images/project-image-2.png",
    type: ETypeFeatureWork.UIUX,
    link: "",
  },
  {
    id: uuidv4(),
    title: "Project 03",
    image: "/images/project-image-3.png",
    type: ETypeFeatureWork.ContentCreator,
    link: "",
  },
  {
    id: uuidv4(),
    title: "Project 04",
    image: "/images/project-image-4.jpeg",
    type: ETypeFeatureWork.Design,
    link: "",
  },
  {
    id: uuidv4(),
    title: "Portfolio Website",
    image: "/images/project-image-5.png",
    type: ETypeFeatureWork.Coding,
    link: "https://conianguys.vercel.app/",
  },
];

const titleCharacters: ITitleCharacter[] = [
  {
    id: 1,
    text: "T",
  },
  {
    id: 2,
    text: "A",
  },
  {
    id: 3,
    text: "K",
  },
  {
    id: 4,
    text: "E",
  },
  {
    id: 5,
    text: "A",
  },
  {
    id: 6,
    text: "L",
  },
  {
    id: 7,
    text: "O",
  },
  {
    id: 8,
    text: "O",
  },
  {
    id: 9,
    text: "K",
  },
];

const myFeatureCharacters: ITitleCharacter[] = [
  {
    id: 1,
    text: "M",
  },
  {
    id: 2,
    text: "Y",
  },
  {
    id: null,
    text: " ",
  },
  {
    id: null,
    text: " ",
  },
  {
    id: 3,
    text: "F",
  },
  {
    id: 4,
    text: "E",
  },
  {
    id: 5,
    text: "A",
  },
  {
    id: 6,
    text: "T",
  },
  {
    id: 7,
    text: "U",
  },
  {
    id: 8,
    text: "R",
  },
  {
    id: 9,
    text: "E",
  },
  {
    id: null,
    text: " ",
  },
  {
    id: null,
    text: " ",
  },
  {
    id: 10,
    text: "W",
  },
  {
    id: 11,
    text: "O",
  },
  {
    id: 12,
    text: "R",
  },
  {
    id: 13,
    text: "K",
  },
];
</script>

<style lang="scss" scoped src="./featureWorkList.scss"></style>
