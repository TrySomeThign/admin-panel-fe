<template>
  <footer
    class="footer tw-fixed tw-bottom-4 tw-left-0 tw-right-0 tw-mx-5 tw-text-white tw-bg-cod-gray tw-z-50 tw-overflow-hidden"
  >
    <div
      class="tw-flex tw-items-center tw-justify-between tw-w-full tw-relative tw-z-20"
    >
      <div class="content-left text-sm text-silver font-medium font-supply">
        @2024, trysomethign
      </div>
      <div
        class="content-right text-sm text-green-suckle font-medium font-supply"
      >
        {{ fullPath }}
      </div>
    </div>

    <div
      class="background tw-absolute tw-left-0 tw-top-0 tw-bg-scorpion tw-h-full tw-z-10 tw-opacity-50"
      :style="{
        width: `${percentageScroll}%`,
      }"
    ></div>
  </footer>
</template>

<script setup lang="ts">
const { fullPath } = useRoute();
const { percentageScroll } = defineProps<{ percentageScroll: number }>();
</script>

<style lang="scss" scoped>
.footer {
  border: 0.1px solid var(--color-scorpion);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 16px;
}
.content-left,
.content-right {
  font-family: "supply", sans-serif;
}
.background {
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
