<template>
  <div
    class="dashboard-tabs tw-mt-9 tw-flex tw-items-center tw-justify-start tw-gap-5 tw-flex-wrap"
  >
    <NuxtLink
      :to="localePath(tab?.link ?? '')"
      class="dashboard-tab-item tw-no-underline"
      v-for="(tab, i) in tabs"
      :key="i"
    >
      <div class="dashboard-tab-number">0{{ i + 1 }}:</div>
      <div
        class="character-list tw-flex tw-items-center tw-justify-center tw-gap-1"
      >
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
  link?: string;
}
// const textFeatureWork = "F E A T U R E    W O R K";
const textAbout = "A B O U T   M E";
const textSkills = "S K I L L S";
const textContact = "C O N T A C T";
const textExperience = "E X P E R I E N C E";
const tabs: ITab[] = [
  {
    id: 1,
    characters: textAbout.split(" ").map((item, i) => ({
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
    // link: pagePaths.contact,
  },

  {
    id: 3,
    characters: textExperience.split(" ").map((item, i) => ({
      id: item.startsWith(" ") ? null : i + 1,
      text: item,
    })),
    link: pagePaths.experience,
  },
];
</script>
<style scoped src="./dashboardTabs.scss"></style>
