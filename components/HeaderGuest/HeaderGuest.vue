<template>
  <div
    class="header tw-w-full tw-flex tw-items-start md:tw-items-center tw-justify-between tw-flex-col md:tw-flex-row"
  >
    <div class=""></div>
    <div class="email">
      <span class="tw-text-base tw-font-medium tw-font-supply tw-text-scorpion"
        >copy :
      </span>
      <span
        class="tw-text-green-suckle tw-text-base tw-font-medium tw-font-supply"
        >{{ email }}</span
      >
    </div>
    <div class="book">
      <span class="tw-text-base tw-font-medium tw-font-supply tw-text-scorpion"
        >click :
      </span>
      <NuxtLink
        :to="'tel:+84908773057'"
        class="tw-text-base tw-font-medium tw-font-supply tw-text-green-suckle"
        >book call</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const email = runtimeConfig.public.email;
</script>

<style lang="scss" scoped></style>
