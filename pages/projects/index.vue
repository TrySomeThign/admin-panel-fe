<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NestedLayoutProjectLayout tLayout>
    <div
      class="flex items-center justify-between w-full 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mt-5 gap-4"
    >
      <h1
        class="title 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold text-black"
      >
        >>>Develop Coding
      </h1>
      <ButtonNewProject />
    </div>
    <ProjectCodeList />
  </NestedLayoutProjectLayout>
</template>

<script setup lang="ts"></script>

<style scoped>
.title {
  font-family: "Syne", sans-serif;
}
</style>
