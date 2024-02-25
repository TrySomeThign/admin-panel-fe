<template>
  <div class="flex items-center justify-start gap-2">
    <ImageCustom :src="'/'" />
    <p class="title">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}
const { title } = defineProps<Props>();
</script>

<style scoped></style>
