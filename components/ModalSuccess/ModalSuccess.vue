<template>
  <div
    class="modal__success position-fixed left-1/2 border-2 border-solid border-black bg-white flex items-center justify-between 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-4 gap-2"
    :class="
      show
        ? '2xl:top-20 xl:top-20 lg:top-20 md:top-20 top-28 opacity-100'
        : '-top-56 opacity-0'
    "
    @click.stop="() => {}"
  >
    <div
      class="icon__fire 2xl:w-10 xl:w-10 lg:w-10 md:w-10 w-8 2xl:h-10 xl:h-10 lg:h-10 md:h-10 h-8 rounded-md flex items-center justify-center bg-red-600"
    >
      <img
        src="/icons/fire-white.svg"
        alt=""
        class="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h1
      class="message 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-medium text-black-almost flex-1"
    >
      {{ message }}
    </h1>

    <div
      class="btn__close w-6 h-6 rounded flex items-center justify-center bg-blue-royal"
      @click.stop="handleClose"
    >
      <img
        src="/icons/close-v2-white.svg"
        alt="icon-close"
        class="w-1/2 h-1/2 object-contain"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  show: boolean;
  message: string;
  handleClose: () => void;
}
const { show, message, handleClose } = defineProps<Props>();

onMounted(() => {
  window.addEventListener("click", handleClose);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClose);
});
</script>

<style scoped>
@import "./modalSuccess.scss";
</style>
