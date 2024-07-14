<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tw-relative tw-h-full tw-pt-20 md:tw-pt-20">
    <div class="dashboard-description tw-mt-4">
      <span class="page-title tw-text-sm">{{
        $t("dashboardPage.dashboardPage")
      }}</span>
      <span class="page-description tw-text-sm">{{
        $t("dashboardPage.clickTheTabToView")
      }}</span>
    </div>

    <DashboardTitle />
    <ClientOnly><DashboardTabs /></ClientOnly>

    <div
      class="contact-section tw-relative md:tw-absolute md:tw-bottom-[8%] md:tw-right-[2%]"
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
