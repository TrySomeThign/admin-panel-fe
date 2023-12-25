<template>
  <div class="profile__wrapper">
    <div
      class="2xl:mt-10 xl:mt-10 lg:mt-10 md:mt-10 mt-4 flex items-center justify-between 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col"
    >
      <div
        class="flex items-center justify-start 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-4 gap-2"
      >
        <div
          class="avatar__preview 2xl:w-64 xl:w-64 lg:w-60 md:w-56 w-52 2xl:h-64 xl:h-64 lg:h-60 md:h-56 h-52 rounded-full position-relative 2xl:border-2 xl:border-2 lg:border-2 md:border-2 border-black border-solid"
        >
          <img
            :src="user?.avatar ?? '/images/avatar-placeholder.gif'"
            alt="avatar"
            class="w-full h-full object-cover rounded-full transition-all"
          />
          <img
            src="/icons/tick-blue.png"
            alt="icon_blue"
            class="icon__plus position-absolute w-10 h-10 object-cover"
          />
        </div>

        <div class="user__info">
          <h1
            class="name 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl text-xl font-bold text-white"
          >
            {{ user?.name ?? "MinhTai" }}
          </h1>
          <p
            class="description 2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-sm font-medium italic text-gray-500"
          >
            &lt;{{ user?.role }} />
          </p>
        </div>
      </div>

      <div
        class="buttons__action   2xl:w-fit xl:w-fit lg:w-fit md:w-fit w-full flex items-center justify-end 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-4 gap-4"
      >
        <nuxt-link
          :to="localePath(pagePaths.editProfile)"
          class="btn__item 2xl:w-fit xl:w-fit lg:w-fit md:w-fit w-full edit border-2 2xl:text-base xl:text-base lg:text-sm md:text-sm text-xs font-bold border-black border-solid hover:border-blue-500 hover:text-white hover:bg-blue-500 transition-all"
        >
          Edit
        </nuxt-link>
        <div
          @click="handleLogout"
          class="btn__item 2xl:w-fit xl:w-fit lg:w-fit md:w-fit w-full logout border-2 2xl:text-base xl:text-base lg:text-sm md:text-sm text-xs font-bold border-black border-solid hover:border-red-500 hover:text-white hover:bg-red-500 transition-all"
        >
          Logout
        </div>
      </div>
    </div>

    <div
      class="section__info-list grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 2xl:mt-20 xl:mt-20 lg:mt-16 md:mt-14 mt-10 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-4 gap-2"
    >
      <div
        class="section__info-item bg-white 2xl:border-2 xl:border-2 lg:border-2 md:border-2 border-solid border-black"
      >
        <div
          class="mb-6 flex items-center justify-start 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 gap-2"
        >
          <div
            class="icon 2xl:w-12 xl:w-12 lg:w-10 md:w-10 w-8 2xl:h-12 xl:h-12 lg:h-10 md:h-10 h-8 rounded-lg bg-blue-500 flex items-center justify-center"
          >
            <img
              src="/icons/money-cashier-code-qr-white.svg"
              alt="icon-info"
              class="w-1/2 h-1/2"
            />
          </div>
          <h4 class="section__info-title 2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-lg font-bold">Visibility</h4>
        </div>

        <div class="section__info-detail mb-2">
          <p
            class="section__info-subtitle mb-1 uppercase 2xl:text-lg xl:text-lg lg:text-lg md:text:lg text-sm font-medium text-gray-700"
          >
            Display name
          </p>
          <p class="section__info-value 2xl:text-sm xl:text-sm lg:text-sm md:text-sm text-xs font-medium text-black">
            {{ user?.displayName ?? "N/A" }}
          </p>
        </div>

        <div class="section__info-detail mb-2">
          <p
            class="section__info-subtitle mb-1 uppercase 2xl:text-lg xl:text-lg lg:text-lg md:text:lg text-sm font-medium text-gray-700"
          >
            Introduction
          </p>
          <p class="section__info-value 2xl:text-sm xl:text-sm lg:text-sm md:text-sm text-xs font-medium text-black">
            {{ user?.introduction ?? "N/A" }}
          </p>
        </div>
      </div>

      <div
        class="section__info-item bg-white 2xl:border-2 xl:border-2 lg:border-2 md:border-2 border-solid border-black"
      >
        <div
          class="mb-6 flex items-center justify-start 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 gap-2"
        >
          <div
            class="icon 2xl:w-12 xl:w-12 lg:w-10 md:w-10 w-8 2xl:h-12 xl:h-12 lg:h-10 md:h-10 h-8 rounded-lg bg-blue-500 flex items-center justify-center"
          >
            <img
              src="/icons/email-paper-airplane-white.svg"
              alt="icon-info"
              class="w-1/2 h-1/2"
            />
          </div>
          <h4 class="section__info-title 2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-lg font-bold">Contact</h4>
        </div>

        <div class="section__info-detail mb-2">
          <p
            class="section__info-subtitle mb-1 uppercase 2xl:text-lg xl:text-lg lg:text-lg md:text:lg text-sm font-medium text-gray-700"
          >
            Mail
          </p>
          <p class="section__info-value 2xl:text-sm xl:text-sm lg:text-sm md:text-sm text-xs font-medium text-black">
            {{ user?.email ?? "N/A" }}
          </p>
        </div>

        <div class="section__info-detail mb-2">
          <p
            class="section__info-subtitle mb-1 uppercase 2xl:text-lg xl:text-lg lg:text-lg md:text:lg text-sm font-medium text-gray-700"
          >
            Social links
          </p>
          <p
            class="section__info-value 2xl:text-sm xl:text-sm lg:text-sm md:text-sm text-xs font-medium text-black"
            v-for="social in user?.socials"
            v-if="Number(user?.socials?.length) > 0"
          >
            {{ social.title ?? "N/A" }}
          </p>
          <p class="section__info-value 2xl:text-sm xl:text-sm lg:text-sm md:text-sm text-xs font-medium text-black">N/A</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { pagePaths } from "~/constant/paths";
import { useAuthStore } from "~/store/auth";
const localePath = useLocalePath();
const authStore = useAuthStore();
const user = computed(() => {
  return authStore.user;
});

const handleLogout = () => {
  localStorage.removeItem("token");
  navigateTo({ path: localePath(pagePaths.signIn) });
};
</script>

<style scoped lang="scss">
@import "./profile.scss";
</style>
