<template>
  <img
    :src="src"
    :alt="alt"
    v-bind="props"
    @error="
      (e) => {
        const event = e.target as HTMLImageElement;
        event.src = '/images/image-error.png';
      }
    "
  />
</template>

<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
}
const { src, alt, ...props } = defineProps<Props>();
</script>
