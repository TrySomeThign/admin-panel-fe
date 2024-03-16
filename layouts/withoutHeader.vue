<template>
  <div class="wrapper">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <slot />
  </div>
</template>

<script setup lang="ts">
const title = ref("Tyler Tran");
</script>

<style scoped></style>
