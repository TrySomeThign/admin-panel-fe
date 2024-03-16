<template>
  <div class="wrapper text-silver">
    <div
      class="header w-full flex items-start md:items-center justify-between flex-col md:flex-row"
    >
      <div class=""></div>
      <div class="email">
        <span class="text-base font-medium font-supply text-scorpion"
          >copy :
        </span>
        <span class="text-green-suckle text-base font-medium font-supply">{{
          email
        }}</span>
      </div>
      <div class="book">
        <span class="text-base font-medium font-supply text-scorpion"
          >click :
        </span>
        <NuxtLink
          :to="pagePaths.contact"
          class="text-base font-medium font-supply text-green-suckle"
          >book call</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { pagePaths } from "~/constant/paths";

definePageMeta({
  layout: "guest-layout",
});

const email = process.env.NUXT_PUBLIC_EMAIL_MYSELF;
</script>

<style scoped>
.wrapper {
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
}
</style>
