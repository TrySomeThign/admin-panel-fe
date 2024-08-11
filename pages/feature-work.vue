<template>
  <div class="wrapper tw-text-silver tw-pb-20">
    <HeaderGuest />
    <div
      class="tw-flex tw-flex-col lg:tw-flex-row tw-mt-10 lg:tw-mt-20 tw-gap-10 lg:tw-gap-20"
    >
      <TabsFeatureWork
        :tab-active="tabActive"
        @update-tab-active="updateTabActive"
      />
      <FeatureWorkList />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "guest-layout",
});

const tabActive = ref<string>("d");
const updateTabActive = (newValue: string) => {
  tabActive.value = newValue;
};
</script>

<style scoped>
.wrapper {
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
}
</style>
