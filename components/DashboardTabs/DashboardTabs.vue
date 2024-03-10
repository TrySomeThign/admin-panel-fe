<template>
  <div class="dashboard-tabs">
    <div class="dashboard-tab-item" v-for="(tab, i) in tabs" :key="i">
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
    </div>
  </div>
</template>
<script lang="ts" setup>
interface ITab {
  id: number;
  characters: { id: number | null; text: string }[];
}
const tabUIUX = [
  "U",
  "I",
  "/",
  "U",
  "X",
  " ",
  " ",
  "D",
  "E",
  "S",
  "I",
  "G",
  "N",
];
const tabs: ITab[] = [
  {
    id: 1,
    characters: tabUIUX.map((item, i) => ({
      id: item.startsWith(" ") ? null : i + 1,
      text: item,
    })),
  },
];
</script>
<style scoped src="./dashboardTabs.scss"></style>
