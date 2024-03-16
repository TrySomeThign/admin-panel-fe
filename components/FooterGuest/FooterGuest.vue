<template>
  <footer
    class="footer fixed bottom-4 left-0 right-0 mx-5 text-white bg-cod-gray z-50"
  >
    <div class="flex items-center justify-between w-full relative z-20">
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
      class="background absolute left-0 top-0 bg-scorpion h-full z-10 opacity-50"
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
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
