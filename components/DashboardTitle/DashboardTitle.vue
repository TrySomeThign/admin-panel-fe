<template>
  <div class="dashboard-title">
    <div
      class="dashboard-title-item"
      :class="`${isTallText ? 'pull' : ''} ${
        character.id ? `character-${character.id}` : ''
      }`"
      v-for="(character, i) in titleCharacters"
      :key="i"
      :style="{ transitionDelay: `calc(0s + 0.05s * ${character.id})` }"
    >
      {{ character.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
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
    text: "G",
  },
  {
    id: 4,
    text: "U",
  },
  {
    id: 5,
    text: "Y",
  },
  {
    id: 6,
    text: "S,",
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
    id: 7,
    text: "I'",
  },
  {
    id: 8,
    text: "M",
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
    id: 9,
    text: "T",
  },
  {
    id: 10,
    text: "Y",
  },

  {
    id: 11,
    text: "L",
  },
  {
    id: 12,
    text: "E",
  },
  {
    id: 13,
    text: "R",
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
    id: 14,
    text: "T",
  },
  {
    id: 15,
    text: "R",
  },
  {
    id: 16,
    text: "A",
  },
  {
    id: 17,
    text: "N",
  },
];
const isTallText = ref<boolean>(false);
onMounted(() => {
  setTimeout(() => {
    isTallText.value = true;
  }, 200);
});
</script>

<style scoped src="./dashboardTitle.scss"></style>
