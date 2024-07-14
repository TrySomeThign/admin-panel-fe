<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="tw-flex tw-items-center tw-justify-center tw-flex-col tw-gap-14 tw-py-20"
  >
    <div class="skill-item" v-for="(skill, i) in skills" :key="skill.id">
      <SkillItem :skill="skill" :index="i + 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "guest-layout",
});

const skills: { id: number; title: string }[] = [
  {
    id: 1,
    title: "ReactJS",
  },
  {
    id: 2,
    title: "NextJS",
  },
  {
    id: 3,
    title: "ExpressJS",
  },
  {
    id: 4,
    title: "NestJS",
  },
  {
    id: 5,
    title: "SQL",
  },
  {
    id: Math.random(),
    title: "MONGODB",
  },
  {
    id: Math.random(),
    title: "FIRESTORE",
  },
  {
    id: 6,
    title: "AMAZON WEB SERVICE",
  },
  {
    id: 7,
    title: "ADOBE PHOTOSHOP",
  },
  {
    id: 8,
    title: "ADOBE ILLUSTRATOR",
  },
  {
    id: 9,
    title: "FIGMA",
  },
  {
    id: 10,
    title: "TYPESCRIPT",
  },
  {
    id: 11,
    title: "GOOGLE CLOUD",
  },
  {
    id: 10,
    title: "NGINX",
  },
  {
    id: 10,
    title: "DOCKER & DOCKER COMPOSE",
  },
  {
    id: Math.random(),
    title: "GITHUB AND BITBUCKET",
  },
];
</script>

<style scoped></style>
