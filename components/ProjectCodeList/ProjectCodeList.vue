<template>
  <div class="project__list">
    <div
      v-if="loadingGetAllProject"
      class="project__list--loading grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 auto-rows-fr"
    >
      <div v-for="(loading, i) in skeletons" :key="i">
        <v-skeleton-loader
          type="image,heading, list-item-two-line, actions"
          max-width="100%"
        ></v-skeleton-loader>
      </div>
    </div>
    <div v-else>
      <div v-if="projectData.projects.length > 0">
        <ul
          class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 auto-rows-fr"
        >
          <li
            class="project__item flex items-center justify-between flex-col position-relative w-full h-full bg-white border-2 border-solid border-black"
            v-for="project in projectData.projects"
            :key="project.id"
          >
            <div class="w-full">
              <div class="project__image w-full aspect-square">
                <img
                  :src="project.image"
                  alt="project-image"
                  class="size-full object-cover"
                />
              </div>
              <div class="project__info">
                <h1
                  class="project__title 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl text-xs font-extrabold"
                >
                  {{ project.title }}
                </h1>
                <p class="project__description" v-if="project.description">
                  {{ project.description }}
                </p>
                <ul
                  class="project__tech-list flex align-items justify-start flex-wrap 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-2 gap-2"
                  v-if="project.technologies?.length > 0"
                >
                  <li
                    class="project__tech-item w-fit 2xl:text-sm xl:text-sm lg:text-sm md:text-xs font-medium text-center whitespace-nowrap"
                    v-for="(tech, i) in project.technologies"
                    :key="i"
                  >
                    {{ tech }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="project__manage w-full">
              <nuxt-link
                :to="localePath(`${pagePaths.projects}/${project.id}`)"
                class="w-full h-fit project__manage-link block 2xl:text-xl xl:text-base lg:text-base md:text-base text-sm font-medium"
                >Manage</nuxt-link
              >
            </div>
          </li>
        </ul>
        <PaginationProject :limit="filter.limit" />
      </div>
      <NoneData
        v-else
        :message="`Opps! you don't have any project`"
        :description="`Create new project to enhance your portfolio more cold now!`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { pagePaths } from "~/constant/paths";
import { ETypeCategory } from "~/store/interfaces";
import { useProjectStore } from "~/store/project";

const loadingGetAllProject = ref<boolean>(false);
const projectStore = useProjectStore();
const localePath = useLocalePath();

const skeletons = new Array(8);

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
