<template>
  <div class="tw-text-silver tw-w-full lg:tw-w-1/4">
    <p class="title">
      <span class="tw-text-scorpion tw-text-base tw-font-supply">tags : </span>
      <span class="tw-text-silver tw-text-base tw-font-supply"
        >select any one</span
      >
    </p>
    <ul
      class="tab-list tw-flex tw-items-center tw-justify-start tw-flex-wrap tw-w-full tw-mt-3 tw-gap-2"
    >
      <li
        class="tab-item tw-px-4 tw-py-2 tw-list-none tw-border tw-border-solid tw-rounded tw-text-sm tw-font-supply hover:tw-border-green-suckle tw-transition-all"
        :class="
          tabActiveValue === tab.title
            ? 'tw-text-green-suckle tw-border-green-suckle'
            : 'tw-text-scorpion tw-border-silver'
        "
        v-for="tab in tabs"
        :key="tab.id"
        @click="() => handleChangeTab(tab.title)"
      >
        {{ tab.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ETypeFeatureWork } from "~/store/interfaces";
const emits = defineEmits(["updateTabActive"]);

const { tabActive } = defineProps<{ tabActive: Ref<string> }>();
const tabActiveValue = ref(tabActive);

const handleChangeTab = (tab: string) => {
  tabActiveValue.value = tab;
  emits("updateTabActive", tabActiveValue.value);
};

const tabs: { id: number; title: string; type: ETypeFeatureWork }[] = [
  {
    id: 1,
    title: "ui/ux design",
    type: ETypeFeatureWork.UIUX,
  },
  {
    id: 2,
    title: "system design",
    type: ETypeFeatureWork.Design,
  },
  {
    id: 3,
    title: "coding",
    type: ETypeFeatureWork.Coding,
  },
  {
    id: 4,
    title: "content-creator",
    type: ETypeFeatureWork.ContentCreator,
  },
];
</script>

<style lang="scss" scoped></style>
