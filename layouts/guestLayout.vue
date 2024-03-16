<template>
  <div
    class="w-100 h-screen bg-cod-gray home-page flex items-center justify-center px-5"
  >
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div
      class="wrapper relative w-full"
      :ref="refWrapper"
      @scroll="handleScrollWrapper"
    >
      <LogoApp />
      <slot />

      <FooterGuest :percentage-scroll="percentageScrollWrapper" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import calcPercentageScrollEl from "~/utils/calcPercentageScrollEl";
const percentageScrollWrapper = ref<number>(0);
const handleScrollWrapper = (e: UIEvent) => {
  const { percentage } = calcPercentageScrollEl(e);
  percentageScrollWrapper.value = percentage;
};

const title = ref("Tyler Tran");
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 16px;
  padding-bottom: 0;
  border: 1px solid var(--color-scorpion);
  border-radius: 10px;
  height: calc(100vh - 48px);
  overflow: auto;
  scrollbar-width: 0;
}
.wrapper::-webkit-scrollbar {
  display: none;
}
</style>
