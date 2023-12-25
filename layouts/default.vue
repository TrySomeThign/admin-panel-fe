<template>
  <div class="position-relative w-screen h-screen">
    <div class="wrapper" v-if="!loading && user">
      <Header />
      <div class="children px-xxl-20 px-xl-20 px-lg-16 px-md-4 px-4">
        <slot />
      </div>
      <div class="position-fixed right-4 bottom-4">
        <SoundWave />
      </div>
    </div>
    <div
      :style="{
        opacity: loading ? 1 : 0,
        transition: 'all 0.25s ease-out',
        transform: 'translate(-50%,-50%)',
        background: '#ECE8E1',
        zIndex: loading ? 2000000 : -2,
      }"
      class="position-absolute top-1/2 left-1/2"
    >
      <Loading />
    </div>
  </div>
</template>

<script setup lang="ts">
import { pagePaths } from "~/constant/paths";
import { useAuthStore } from "~/store/auth";
const localePath = useLocalePath();
const loading = ref<boolean>(true);
const authStore = useAuthStore();

const user = computed(() => {
  return authStore.user;
});
const handleGetCurrentUser = async () => {
  try {
    loading.value = true;
    await authStore.getCurrentUser();
    loading.value = false;
  } catch (error) {
    loading.value = false;
    navigateTo({ path: localePath(pagePaths.signIn) });
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
