<template>
  <div class="tw-flex tw-items-center tw-justify-start tw-gap-1">
    <div
      class="letters tw-text-[50px] md:tw-text-[100px] tw-font-flexible tw-font-medium"
      :class="`${isTallText ? 'pull' : ''} ${
        character.id ? `character-${character.id}` : ''
      } ${classNameCharacter}`"
      v-for="(character, i) in letters"
      :key="i"
      :style="{ transitionDelay: `calc(0s + 0.05s * ${character.id})` }"
    >
      {{ character.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
export interface ITitleCharacter {
  id: number | null;
  text: string;
}
const { letters, classNameCharacter } = defineProps<{
  letters: ITitleCharacter[];
  classNameCharacter?: string;
}>();

const isTallText = ref<boolean>(false);
onMounted(() => {
  setTimeout(() => {
    isTallText.value = true;
  }, 100);
});
</script>

<style lang="scss" scoped src="./titleAnimation.scss"></style>
