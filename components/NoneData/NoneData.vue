<template>
  <div
    class="wrapper w-full h-full flex items-center justify-center flex-col gap-4"
  >
    <nuxt-img
      src="/images/empty-data.svg"
      alt="image-empty"
      class="2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/5 w-full 2xl:h-2/5 xl:h-2/5 lg:h-2/5 md:h-2/5 h-full object-cover"
    />

    <div class="info text-center flex items-center justify-center flex-col">
      <h1
        class="message 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-sm font-bold text-red-500"
      >
        {{ props.message }}
      </h1>
      <p
        class="description 2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-xs font-medium italic text-gray-500"
        v-if="props.description"
      >
        {{ props.description }}
      </p>
    </div>

    <nuxt-link
      :to="localePath(pagePaths.newProject)"
      class="new___project-link w-fit h-fit 2xl:text-base xl:text-base lg:text-base md:text-sm text-xs font-semibold"
      >New project</nuxt-link
    >
  </div>
</template>

<script setup lang="ts">
import { pagePaths } from "~/constant/paths";

interface Props {
  message: string;
  description?: string;
}
const localePath = useLocalePath();
const props = defineProps<Props>();
</script>

<style scoped>
@import "./noneData.scss";
</style>
