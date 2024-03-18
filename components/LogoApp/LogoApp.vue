<template>
  <NuxtLink
    :to="localePath(`${pagePaths.home}`)"
    class="logo tw-fixed tw-top-10 tw-left-10 tw-mb-4 tw-lg:mb-20 tw-z-[2000]"
    href="/"
  >
    <div
      v-for="(character, i) in logoCharacters"
      :key="i"
      class="tw-overflow-hidden tw-flex tw-items-center tw-justify-center"
    >
      <div
        class="tw-position-relative tw-text-silver logo-item"
        :class="`${character.id ? `logo-${character.id}` : ''}`"
      >
        {{ character.title }}
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import { pagePaths } from "~/constant/paths";

const localePath = useLocalePath();
const logoCharacters: { id: number | null; title: string }[] = [
  { id: 1, title: "T" },
  { id: 2, title: "Y" },
  { id: 3, title: "L" },
  { id: 4, title: "E" },
  { id: 5, title: "R" },
  { id: null, title: " " },
  { id: null, title: " " },
  { id: null, title: " " },
  { id: null, title: " " },
  { id: 6, title: "T" },
  { id: 7, title: "R" },
  { id: 8, title: "A" },
  { id: 9, title: "N" },
];
</script>
<style lang="scss" src="./logoApp.scss" scoped></style>
