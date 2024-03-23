<template>
  <div
    class="skill-item tw-flex tw-items-end tw-justify-start tw-gap-1 tw-relative"
  >
    <span class="tw-text-sm tw-text-scorpion tw-font-supply">{{
      `#/ ${skill.id}`
    }}</span>
    <div
      class="skill-title tw-text-silver tw-text-[120px] tw-font-flexible"
      :class="`${character.id ? `item-${character.id}` : ''}`"
      v-for="(character, i) in letters"
      :key="i"
      :style="{ transitionDelay: `calc(0s + 0.05s * ${character.id})` }"
    >
      {{ character.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITitleCharacter } from "../TitleAnimation/TitleAnimation.vue";

interface Props {
  skill: {
    id: number;
    title: string;
  };
}
const { skill } = defineProps<Props>();
const letters: ITitleCharacter[] = skill.title.split("").map((item, index) => ({
  id: index,
  text: item,
}));
</script>

<style scoped src="./skillItem.scss"></style>
