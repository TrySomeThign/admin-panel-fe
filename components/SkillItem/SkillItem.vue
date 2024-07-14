<template>
  <div
    class="skill-word skill-item tw-flex tw-items-end tw-justify-start tw-relative"
  >
    <div class="tw-text-sm tw-text-scorpion tw-font-supply tw-mr-1">
      {{ `#/ ${index}` }}
    </div>
    <span
      class="skill-title tw-text-silver tw-text-[120px] tw-font-flexible"
      :class="`${character.id ? `item-${character.id}` : ''}`"
      v-for="(character, i) in letters"
      :key="i"
    >
      {{ character.text }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { ITitleCharacter } from "../TitleAnimation/TitleAnimation.vue";

interface Props {
  skill: {
    id: number;
    title: string;
  };
  index: number;
}
const { skill, index } = defineProps<Props>();
const letters: ITitleCharacter[] = skill.title.split("").map((item, index) => ({
  id: index,
  text: item,
}));

onMounted(() => {
  const textContainers =
    document.querySelectorAll<HTMLSpanElement>(".skill-word");

  const defaultVariation = 1000;
  const minVariation = 350;
  const neighborVariation = minVariation + 250;

  textContainers.forEach((textContainer) => {
    const spans = document.querySelectorAll<HTMLSpanElement>(".skill-title");
    textContainer.addEventListener("mousemove", (e: MouseEvent) => {
      const target = e.target as HTMLSpanElement;
      const index = Array.from(spans).indexOf(target);
      const amountChildren = textContainer.childNodes.length - 3;
      spans.forEach((span, i) => {
        let variation = defaultVariation;
        if (i === index) {
          variation = minVariation;
        } else if (i === index - 1 || i === index + 1) {
          variation = neighborVariation;
        } else if (
          (i === index - 2 || i === index + 2) &&
          amountChildren >= 6
        ) {
          variation = minVariation + 250;
        } else if (
          (i === index - 3 || i === index + 3) &&
          amountChildren >= 10
        ) {
          variation = minVariation + 350;
        }
        span.style.fontVariationSettings = `"wdth" 200, "HGHT" ${variation}`;
      });
    });

    textContainer.addEventListener("mouseleave", () => {
      spans.forEach((span) => {
        span.style.fontVariationSettings = `"wdth" 200, "HGHT" ${defaultVariation}`;
      });
    });
  });
});
</script>

<style scoped src="./skillItem.scss"></style>
