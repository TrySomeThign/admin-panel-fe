<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="tw-flex tw-items-center tw-justify-center tw-flex-col tw-gap-14 tw-py-20"
  >
    <div class="skill-item" v-for="skill in skills" :key="skill.id">
      <SkillItem :skill="skill" />
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
    id: 6,
    title: "AWS",
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
    title: "MONGODB",
  },
  {
    id: 10,
    title: "TYPESCRIPT",
  },
];
</script>

<style scoped></style>
