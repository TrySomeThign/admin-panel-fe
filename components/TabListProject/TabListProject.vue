<template>
  <ul
    class="tab__list position-fixed top-1/2 right-14 bg-white border-2 border-solid border-black rounded-md"
  >
    <li
      class="tab__item flex items-center justify-end gap-2 overflow-hidden"
      v-for="tab in tabs"
      :key="tab.id"
      :class="fullTab ? 'open' : ''"
    >
      <nuxt-link
        :to="localPath(tab.path)"
        class="tab__link flex items-center justify-end gap-2"
        :class="
          fullPath === localPath(tab.path).toString()
            ? 'text-red-600'
            : 'text-black'
        "
      >
        <span class="text text-lg font-medium text-black">{{ tab.title }}</span>
        <div class="tab__icon w-full h-full flex items-center justify-center">
          <div
            class="position-relative icon flex items-center justify-center w-8 h-8 rounded-sm"
            :class="
              fullPath === localPath(tab.path).toString() ? 'bg-blue-royal' : ''
            "
          >
            <div
              class="ping position-absolute -top-1 -right-1 animate-ping h-3 w-3 rounded-full bg-green-lime opacity-100"
              v-if="fullPath === localPath(tab.path).toString()"
            ></div>
            <img
              :src="
                fullPath === localPath(tab.path).toString()
                  ? tab.iconActive
                  : tab.icon
              "
              alt="tab-icon"
              class="w-3/4 h-3/4 object-contain"
            />
          </div>
        </div>
      </nuxt-link>
    </li>

    <div
      class="icon__arrow w-6 h-6 rounded-full bg-blue-royal flex items-center justify-center position-absolute top-1/2 -left-3"
      @click="fullTab = !fullTab"
    >
      <img
        src="/icons/arrow-right-white.svg"
        alt="icon-arrow"
        class="w-2/5 h-2/5 object-contain transition-all"
        :class="fullTab ? '' : 'rotate-180'"
      />
    </div>
  </ul>
</template>

<script setup lang="ts">
import { ETypeTabProject } from "~/components/interfaces/tabProject.interface";
import { pagePaths } from "~/constant/paths";

const localPath = useLocalePath();
const { fullPath } = useRoute();

const tabs: {
  id: number;
  title: string;
  type: ETypeTabProject;
  path: string;
  icon: string;
  iconActive: string;
}[] = [
  {
    id: 1,
    title: "Dev",
    type: ETypeTabProject.Web,
    path: pagePaths.projects,
    icon: "/icons/code-programming-black.svg",
    iconActive: "/icons/code-programming-white.svg",
  },
  {
    id: 2,
    title: "Design",
    type: ETypeTabProject.Design,
    path: pagePaths.projectDesign,
    icon: "/icons/pinterest.svg",
    iconActive: "/icons/pinterest-white.svg",
  },
  {
    id: 3,
    title: "UI/UX",
    type: ETypeTabProject.UIUX,
    path: pagePaths.projectUIUX,
    icon: "/icons/device-laptop.svg",
    iconActive: "/icons/device-laptop-white.svg",
  },
];
const fullTab = ref<boolean>(false);
</script>

<style scoped>
@import "./tabListProject.scss";
</style>
