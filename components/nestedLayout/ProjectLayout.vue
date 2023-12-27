<template>
  <div>
    <TabListProject />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from "~/store/project";

const projectStore = useProjectStore();
const getAllCategories = async () => {
  try {
    await projectStore.getAllCategories();
  } catch (error) {
    return error;
  }
};

onMounted(() => {
  getAllCategories();
});
</script>

<style lang="scss" scoped></style>
