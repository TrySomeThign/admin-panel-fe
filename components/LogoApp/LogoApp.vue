<template>
  <NuxtLink
    :to="localePath(`${pagePaths.home}`)"
    class="logo fixed top-10 left-10 mb-4 lg:mb-20 z-[2000]"
    href="/"
  >
    <div
      v-for="(character, i) in logoCharacters"
      :key="i"
      class="overflow-hidden flex items-center justify-center"
    >
      <div
        class="position-relative text-silver logo-item"
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
