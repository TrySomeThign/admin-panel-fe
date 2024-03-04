<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-100 h-screen bg-cod-gray home-page">
    <div class="wrapper">
      <div class="logo">
        <div class="overflow-hidden">
          <div class="position-relative text-silver logo-item logo-1">T</div>
        </div>
        <div class="overflow-hidden">
          <div class="position-relative text-silver logo-item logo-2">Y</div>
        </div>
        <div class="overflow-hidden">
          <div class="position-relative text-silver logo-item logo-3">L</div>
        </div>
        <div class="overflow-hidden">
          <div class="position-relative text-silver logo-item logo-4">E</div>
        </div>
        <div class="overflow-hidden">
          <div class="position-relative text-silver logo-item logo-5">R</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "without-header",
});
</script>

<style scoped>
.home-page {
  padding: 24px 48px;
}
.wrapper {
}
.logo {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
}
.logo:hover .logo-item {
  color: var(--color-green-suckle);
  translate: 0% 0%;
  transition: translate 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.logo:hover .logo-1 {
  transition-delay: 0.35s;
}

.logo:hover .logo-2 {
  transition-delay: 0.25s;
}
.logo:hover .logo-3 {
  transition-delay: 0.2s;
}
.logo:hover .logo-4 {
  transition-delay: 0.15s;
}
.logo:hover .logo-5 {
  transition-delay: 0.1s;
}
.logo-item {
  font-size: 48px;
  font-weight: 300;
  font-family: "flexible", sans-serif;
  line-height: 1;
  transition: translate 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  translate: -100% 0%;
  overflow: hidden;
}
.logo-1 {
  transition-delay: 0.05s;
  translate: 0% 0%;
}
.logo-2 {
  transition-delay: 0.1s;
}
.logo-3 {
  transition-delay: 0.15s;
}
.logo-4 {
  transition-delay: 0.2s;
}
.logo-5 {
  transition-delay: 0.25s;
}
.wrapper {
  padding: 16px;
  border: 1px solid var(--color-scorpion);
  border-radius: 10px;
  height: calc(100vh - 48px);
}
</style>
