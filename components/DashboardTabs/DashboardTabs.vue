<template>
  <div
    class="dashboard-tabs tw-mt-9 tw-flex tw-items-center tw-justify-start tw-gap-5 tw-flex-wrap"
  >
    <NuxtLink
      :to="localePath(word?.link ?? '')"
      v-for="(word, i) in words"
      :key="i"
      class="word dashboard-tab-item tw-no-underline"
    >
      <div class="dashboard-tab-number">0{{ i + 1 }}:</div>
      <span
        class="character-item"
        v-for="(character, i) in word.characters"
        :key="i"
        >{{ character }}</span
      >
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import { pagePaths } from "~/constant/paths";
const localePath = useLocalePath();
import { onMounted } from "vue";

interface ITab {
  id: number;
  characters: string;
  link?: string;
}

const words = ref<ITab[]>([
  // {
  //   id: 1,
  //   characters: "ABOUT ME",
  //   link: pagePaths.featureWork,
  // },
  {
    id: 1,
    characters: "ABOUT ME",
    link: pagePaths.aboutMe,
  },

  {
    id: 2,
    characters: "SKILLS",
    link: pagePaths.skills,
  },

  {
    id: 3,
    characters: "CONTACT",
    // link: pagePaths.contact,
  },

  {
    id: 3,
    characters: "EXPERIENCE",
    link: pagePaths.experience,
  },
]);
onMounted(() => {
  const textContainers = document.querySelectorAll<HTMLSpanElement>(".word");

  const defaultVariation = 1000;
  const minVariation = 350;
  const neighborVariation = minVariation + 150;

  textContainers.forEach((textContainer) => {
    const spans =
      textContainer.querySelectorAll<HTMLSpanElement>(".character-item");
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
<style scoped src="./dashboardTabs.scss"></style>
