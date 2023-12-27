<template>
  <div>
    <ul class="project__list grid grid-cols-4 gap-4 auto-rows-fr">
      <li
        class="project__item w-full h-full bg-white border-2 border-solid border-black"
        v-for="project in projectData.projects"
        :key="project.id"
      >
        <div class="project__image w-full aspect-square">
          <img
            :src="project.image"
            alt="project-image"
            class="size-full object-cover"
          />
        </div>
        <div class="project__info">
          <h1 class="project__title text-2xl font-extrabold">
            {{ project.title }}
          </h1>
          <p class="project__description" v-if="project.description">
            {{ project.description }}
          </p>
          <ul
            class="project__tech-list flex align-items justify-start flex-wrap gap-3"
            v-if="project.technologies?.length > 0"
          >
            <li
              class="project__tech-item w-fit text-sm font-medium text-center whitespace-nowrap"
              v-for="(tech, i) in project.technologies"
              :key="i"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <PaginationProject :limit="filter.limit" />
  </div>
</template>

<script setup lang="ts">
import { ETypeCategory } from "~/store/interfaces";
import { useProjectStore } from "~/store/project";

const loadingGetAllProject = ref<boolean>(false);
const projectStore = useProjectStore();

const projectData = computed(() => ({
  projects: projectStore.projects,
  page: projectStore.page,
  totalPage: projectStore.totalPage,
}));

const filter = ref<{ limit: number; page: number }>({ limit: 4, page: 1 });

const handleGetAllProjects = async () => {
  try {
    loadingGetAllProject.value = true;
    const categories = await projectStore.getAllCategories();
    const categoryId = categories.filter(
      (item) => item.type === ETypeCategory.Web,
    )[0].id;

    await projectStore.getAllProjects({
      limit: filter.value.limit,
      page: filter.value.page,
      categoryId: categoryId,
    });
    loadingGetAllProject.value = false;
  } catch (error) {
    loadingGetAllProject.value = false;
    console.log("Error", error);
  }
};

onMounted(() => {
  handleGetAllProjects();
});
</script>

<style scoped>
@import "./projectCodeList.scss";
</style>
