<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative h-full pt-10 md:pt-20">
    <div class="dashboard-description mt-4">
      <span class="page-title text-sm">{{
        $t("dashboardPage.dashboardPage")
      }}</span>
      <span class="page-description text-sm">{{
        $t("dashboardPage.clickTheTabToView")
      }}</span>
    </div>

    <DashboardTitle />
    <DashboardTabs />

    <div
      class="contact-section relative md:absolute md:bottom-[15%] md:right-[2%]"
    >
      <ContactSection />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "guest-layout",
});
</script>

<style scoped>
.home-page {
  padding: 24px 48px;
}
.page-title {
  font-weight: 500;
  font-family: "supply", sans-serif;
  color: var(--color-scorpion);
}
.page-description {
  font-weight: 500;
  font-family: "supply", sans-serif;
  color: var(--color-silver);
  margin-left: 10px;
}
</style>
