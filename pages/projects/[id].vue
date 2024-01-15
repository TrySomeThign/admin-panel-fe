<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>detail project {{ params.id }}</div>
</template>

<script setup lang="ts">
const { params } = useRoute();
</script>

<style scoped></style>
