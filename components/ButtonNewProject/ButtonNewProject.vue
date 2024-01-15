import type { pagePaths } from '~/constant/paths';
<template>
  <div class="">
    <nuxt-link
      :to="localePath(pagePaths.newProject)"
      class="link block 2xl:text-base base:text-base lg:text-base md:text-sm text-xs font-medium"
      >New project</nuxt-link
    >
  </div>
</template>

<script setup lang="ts">
import { pagePaths } from "~/constant/paths";

const localePath = useLocalePath();
</script>

<style scoped>
@import "./buttonNewProject.scss";
</style>
