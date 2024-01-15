<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="wrapper 2xl:mt-16 xl:mt-16 lg:mt-14 mt:mt-10 mt-8 2xl:grid xl:grid md:flex flex 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 flex-col-reverse 2xl:gap-4 xl:gap-4 lg:gap-12 md:gap-12 gap-12"
  >
    <div class="card__list flex-1">
      <div class="card__item w-full h-60 mb-4 rounded-md p-4">
        <div class="flex items-center justify-start gap-3">
          <div
            class="icon rounded-full w-12 h-12 p-3 flex items-center justify-center"
          >
            <img
              src="/icons/widows.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </div>
          <h1 class="card__title text-3xl font-bold">Projects</h1>
        </div>
      </div>
      <div
        class="flex items-center justify-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col gap-4 w-full"
      >
        <div
          class="card__item w-full h-60 2xl:mb-11 xl:mb-11 lg:mb-10 md:mb-8 mb-0 rounded-md p-4"
        >
          <div class="flex items-center justify-start gap-3">
            <div
              class="icon rounded-full w-12 h-12 p-3 flex items-center justify-center"
            >
              <img
                src="/icons/book.svg"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
            <h1 class="card__title text-3xl font-bold">Contacts</h1>
          </div>
        </div>
        <div
          class="card__item w-full h-60 2xl:mb-11 xl:mb-11 lg:mb-10 md:mb-8 mb-0 rounded-md p-4"
        >
          <div class="flex items-center justify-start gap-3">
            <div
              class="icon rounded-full w-12 h-12 p-3 flex items-center justify-center"
            >
              <img
                src="/icons/cup.svg"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
            <h1 class="card__title text-3xl font-bold">Skills</h1>
          </div>
        </div>
      </div>
    </div>
    <SearchDashboard />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "./statistic.scss";
</style>
