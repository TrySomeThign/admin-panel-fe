<template>
  <div class="wrapper">
    <Header />
    <div class="children px-xxl-20 px-xl-20 px-lg-16 px-md-4 px-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { pagePaths } from "~/constant/paths";
import { useAuthStore } from "~/store/auth";
const localePath = useLocalePath();

const { getCurrentUser } = useAuthStore();
const handleGetCurrentUser = async () => {
  try {
    await getCurrentUser();
  } catch (error) {
    return error;
  }
};

onMounted(() => {
  handleGetCurrentUser();
});
</script>

<style scoped>
@import "./styles/default.scss";
</style>
