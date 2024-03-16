<template>
  <div
    class="dashboard-tabs mt-9 flex items-center justify-start gap-5 flex-wrap"
  >
    <NuxtLink
      :to="localePath(tab.link)"
      class="dashboard-tab-item"
      v-for="(tab, i) in tabs"
      :key="i"
    >
      <div class="dashboard-tab-number">0{{ i + 1 }}:</div>
      <div class="character-list flex items-center justify-center gap-1">
        <div
          class="character-item"
          :class="`${character.id ? `item-${character.id}` : ''}`"
          v-for="(character, i) in tab.characters"
          :key="i"
          :style="{ transitionDelay: `calc(0s + 0.05s * ${character.id})` }"
        >
          {{ character.text }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import { pagePaths } from "~/constant/paths";
const localePath = useLocalePath();

interface ITab {
  id: number;
  characters: { id: number | null; text: string }[];
  link: string;
}
const textFeatureWork = "F E A T U R E    W O R K";
const textSkills = "S K I L L S";
const textContact = "C O N T A C T";
const tabs: ITab[] = [
  {
    id: 1,
    characters: textFeatureWork.split(" ").map((item, i) => ({
      id: item.startsWith(" ") ? null : i + 1,
      text: item,
    })),
    link: pagePaths.featureWork,
  },

  {
    id: 2,
    characters: textSkills.split(" ").map((item, i) => ({
      id: item.startsWith(" ") ? null : i + 1,
      text: item,
    })),
    link: pagePaths.skills,
  },

  {
    id: 3,
    characters: textContact.split(" ").map((item, i) => ({
      id: item.startsWith(" ") ? null : i + 1,
      text: item,
    })),
    link: pagePaths.contact,
  },
];
</script>
<style scoped src="./dashboardTabs.scss"></style>
