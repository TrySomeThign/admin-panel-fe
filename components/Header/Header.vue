<template>
  <header
    class="position-fixed z-50 px-xxl-20 px-xl-20 px-lg-16 px-md-4 px-4 py-xxl-12 py-xl-12 py-lg-10 py-md-8 py-2 w-full flex items-center justify-between"
  >
    <nuxt-link
      :to="localePath(pagePaths.home)"
      class="flex items-center justify-start gap-4"
    >
      <!-- <nuxt-img
        src="/images/T1_logo_primary_red.png"
        class="w-16 h-16 object-contain"
      /> -->
      <h1
        class="name__app font-extrabold text-white text-2xl md:text-3xl lg:text-4xl"
      >
        &lt;{{ user?.name ?? "ConianGuys" }}'s Portfolio />
      </h1>
    </nuxt-link>
    <menu-header v-slot="{ handleShowMenu }">
      <div
        class="iconMenu w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 rounded-full flex items-center justify-center"
        @click="handleShowMenu()"
      >
        <nuxt-img
          src="/icons/menu-bar.svg"
          class="image w-5 md:w-7 lg:w-7 h-7"
        />
      </div>
    </menu-header>
  </header>
</template>

<script setup lang="ts">
import { pagePaths } from "~/constant/paths";
import { useAuthStore } from "~/store/auth";

const localePath = useLocalePath();

const authStore = useAuthStore();

const user = computed(() => {
  return authStore.user;
});
</script>

<style scoped>
.iconMenu {
  background-color: rgba(255, 255, 255, 1);
  filter: drop-shadow(4px 4px 0 rgba(15, 25, 35, 1));
  transition: all 0.2s ease-out;

  &:active {
    transition: all 0.2s ease-out;
    transform: translate(6px, 6px);
  }

  @include mobile {
    filter: drop-shadow(0px 0px 0 rgba(15, 25, 35, 1));
  }
}
.name__app {
  position: relative;
  filter: drop-shadow(2px 2px 0 rgba(15, 25, 35, 1));
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 0;
    height: 1px;
    background-color: var(--black-almost-color);
    border-radius: 100rem;
    transition: all 0.4s ease-in;
  }
  &:hover {
    &::before {
      width: 100%;
      transition: all 0.5s ease-out;
    }
  }
}
</style>
