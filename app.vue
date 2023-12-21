<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ofetch } from "ofetch";

if (process.client) {
  const runtimeConfig = useRuntimeConfig();
  const token = localStorage.getItem("token");
  globalThis.$fetch = ofetch.create({
    baseURL: `${runtimeConfig.public.apiUrl}`,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
</script>

<style>
/*===== DEFAULT TRANSITION PAGE ===== */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s linear;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
