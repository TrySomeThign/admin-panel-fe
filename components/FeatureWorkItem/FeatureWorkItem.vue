<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
    }"
    :visible="{
      opacity: 1,
      transition: {
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
      },
    }"
  >
    <ModalFeatureWork :featureWork="featureWork" />

    <div class="tw-flex tw-items-center tw-justify-between tw-mt-3">
      <p
        class="tw-text-xs md:tw-text-sm tw-text-silver tw-font-supply tw-px-2 tw-py-1 tw-border tw-border-solid tw-border-silver tw-rounded"
      >
        {{ featureWork.type }}
      </p>
      <NuxtLink
        :to="featureWork.link"
        target="_blank"
        class="tw-no-underline tw-text-sm md:tw-text-base tw-text-green-suckle tw-font-supply"
        >→ link</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFeatureWork } from "~/store/interfaces";

interface Props {
  featureWork: IFeatureWork;
}
const { featureWork } = defineProps<Props>();
</script>

<style lang="scss" scoped></style>
