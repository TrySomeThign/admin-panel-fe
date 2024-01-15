<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="mt-10 flex items-center justify-between 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col 2xl:gap-0 xl:gap-0 md:gap-0 lg:gap-0 gap-4 w-full"
  >
    <nuxt-link
      :to="`https://conianguys.com`"
      target="_blank"
      class="link__item text-sm font-medium block hover:decoration-slate-950 hover:decor"
      >@trysomethign</nuxt-link
    >
    <div class="flex items-center justify-end gap-4">
      <nuxt-link
        :to="`https://github.com/conian250501`"
        target="_blank"
        class="link__item text-sm font-medium hover:decoration-slate-950"
        block
        >Github</nuxt-link
      >
      <nuxt-link
        :to="`https://www.linkedin.com/in/minh-tai-a14134228/`"
        target="_blank"
        class="link__item text-sm font-medium block hover:decoration-slate-950 decoration-1"
        >Linkedin</nuxt-link
      >
      <nuxt-link
        :to="`https://www.behance.net/imconianguys`"
        target="_blank"
        class="link__item text-sm font-medium block hover:decoration-slate-950"
        >Behance</nuxt-link
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "./footer.scss";
</style>
