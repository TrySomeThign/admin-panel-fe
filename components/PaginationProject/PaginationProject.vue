<!-- eslint-disable vue/no-mutating-props -->

<template>
  <div class="mt-8">
    <v-pagination
      v-model="page"
      :length="totalPage"
      :total-visible="5"
      @update:model-value="handleChangePage"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
interface Props {
  limit: number;
}
import { ETypeCategory } from "~/store/interfaces";
import { useProjectStore } from "~/store/project";

const { limit } = defineProps<Props>();
const projectStore = useProjectStore();

const { page, totalPage, getCategoryForWebType } = storeToRefs(projectStore);

const handleChangePage = async (page: number) => {
  try {
    await projectStore.getAllProjects({
      page: page,
      limit: limit,
      categoryId: getCategoryForWebType.value.id,
    });
  } catch (error) {
    return error;
  }
};

onMounted(() => {
  console.log(123);
});
</script>

<style scoped>
@import "./paginationProject.scss";
</style>
