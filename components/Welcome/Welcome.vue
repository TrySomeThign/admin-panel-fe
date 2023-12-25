<template>
  <div class="welcome__wrapper position-relative w-fit h-fit">
    <h1
      class="title 2x:text-5xl xl:text-5xl lg:text-3xl md:text-2xl text-xl font-extrabold 2xl:py-6 xl:py-6 lg:py-4 md:py-4 px-10 2xl:px-10 xl:px-10 lg:px-8 md:px-8 w-fit text-center"
    >
      Welcome back!
    </h1>
    <div
      class="user__name 2x:text-5xl xl:text-5xl lg:text-4xl md:text-3xl text-xl font-extrabold text-white"
    >
      {{ user?.name ?? "ConianGuys" }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();

const user = computed(() => {
  return authStore.user;
});
</script>

<style scoped>
@import "./welcome.scss";
</style>
