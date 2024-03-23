<template>
  <div class="tw-w-100 tw-h-screen tw-bg-cod-gray tw-px-5 tw-overflow-hidden">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div
      class="wrapper tw-relative tw-w-full tw-mx-auto tw-my-0 tw-mt-5 tw-p-4"
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
