<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-100 h-screen bg-cod-gray home-page">
    <div class="wrapper">
      <LogoApp />
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

.wrapper {
  padding: 16px;
  border: 1px solid var(--color-scorpion);
  border-radius: 10px;
  height: calc(100vh - 48px);
}
</style>
