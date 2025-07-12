<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="tw-relative tw-pt-10 tw-pb-10 md:tw-pb-20 tw-flex tw-items-center tw-justify-center tw-flex-col tw-text-white"
  >
    <div class="about-me__welcome">
      <div
        class="about-me__welcome--item"
        :class="`${isTallText ? 'pull' : ''} ${
          character.id ? `character-${character.id}` : ''
        }`"
        v-for="(character, i) in titleCharacters"
        :key="i"
        :style="{ transitionDelay: `calc(0s + 0.05s * ${character.id})` }"
      >
        {{ character.text }}
      </div>
      <p :class="`icon-hand tw-ml-2.5 ${isTallText ? 'pull' : ''}`">👋</p>
    </div>

    <h2
      class="tw-text-center tw-mt-2.5 md:tw-mt-5 tw-mb-4 md:tw-mb-8 tw-text-[40px] md:tw-text-[40px] lg:tw-text-[60px] tw-font-supply"
      v-motion
      :initial="{
        opacity: 0,
        translateY: 200,
      }"
      :visible="{
        translateY: 0,
        opacity: 1,
        transition: {
          duration: 450,
          type: 'keyframes',
          ease: 'easeOut',
        },
      }"
    >
      I'm
      <span
        class="tw-block md:tw-inline-block tw-font-supply tw-text-green-lime"
        >TYLER TRAN</span
      >
    </h2>
    <p
      class="tw-text-center tw-text-base md:tw-text-xl lg:tw-text-2xl tw-max-w-full lg:tw-max-w-[80%] 2xl:tw-max-w-[60%] tw-font-bold tw-font-supply tw-text-white"
    >
      I'm a software engineer from Viet Nam, With 1 year of experience,
      specializing in back-end development with Node.js and front-end
      technolcogies including React, Vue, and TypeScript. <br />
      <br />
      I excel at building efficient, scalable web applications, with a strong
      focus on clean code and modern development practices. I am committed to
      delivering high-quality solutions and continuously enhancing my skills in
      a dynamic, collaborative environment.
    </p>
    <TabLink
      :tab="{
        link: '#',
        characters: '<< Experience__more__awesome__now! />>',
      }"
      v-if="!isMobile"
      v-motion
      :initial="{
        opacity: 0,
      }"
      :visible="{
        opacity: 1,
        transition: {
          duration: 500,
          type: 'keyframes',
          ease: 'easeOut',
        },
      }"
    />

    <TabLink
      :tab="{
        link: '#',
        characters: '<< More__awesome />>',
      }"
      v-if="isMobile"
      v-motion
      :initial="{
        opacity: 0,
      }"
      :visible="{
        opacity: 1,
        transition: {
          duration: 500,
          type: 'keyframes',
          ease: 'easeOut',
        },
      }"
    />
  </div>
</template>

<script setup lang="ts">
const { isMobile } = useDevice();

definePageMeta({
  layout: "guest-layout",
});
const titleCharacters: { id: number | null; text: string }[] = [
  {
    id: 1,
    text: "H",
  },
  {
    id: 2,
    text: "I",
  },
  {
    id: null,
    text: " ",
  },
  {
    id: null,
    text: " ",
  },
  {
    id: 3,
    text: "T",
  },
  {
    id: 4,
    text: "H",
  },
  {
    id: 5,
    text: "E",
  },
  {
    id: 6,
    text: "R",
  },
  {
    id: 7,
    text: "E",
  },
  {
    id: null,
    text: "",
  },
];
const isTallText = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => {
    isTallText.value = true;
  }, 200);
});
</script>

<style scoped src="./me.scss">
.info-description {
  margin-top: 60px;
  font-size: 30px;
  font-weight: 500;
  color: var(--color-silver);
  font-family: "supply", sans-serif;
}
.line-divide {
  width: 100%;
  height: 1px;
  background-color: var(--color-silver);
  margin: 50px 0;
}
</style>
