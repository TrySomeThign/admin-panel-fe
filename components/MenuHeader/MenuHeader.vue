<template>
  <div class="menu__wrapper">
    <slot :handleShowMenu="handleShowMenu" />
    <v-overlay
      v-model="show"
      class="transition-all items-center justify-center overlay-container hidden 2xl:block xl:block lg:block md:block"
      contentClass="flex items-center justify-center 2xl:w-3/4 xl:w-4/5 lg:w-3/4 md:w-11/12 w-full  lg:h-fit md:h-fit h-full"
    >
      <div
        class="body-container p-2 2xl:p-12 xl:p-12 lg:p-12 md:p-8 2xl:rounded-3xl xl:rounded-2xl lg:rounded-xl md:rounded-lg 2xl:w-3/4 xl:w-4/5 lg:w-3/4 md:w-11/12 w-full lg:h-fit md:h-fit h-full"
      >
        <div class="flex items-center justify-between w-full w">
          <h1
            class="menu__title text-xl 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl font-bold"
          >
            &lt;{{ user?.name ?? "ConianGuys" }} />
          </h1>
          <div
            class="btn__close w-12 h-12 p-3 flex items-center justify-center rounded-full"
            @click="handleCloseMenu()"
            @mouseenter="isHoverBtnClose = true"
            @mouseleave="isHoverBtnClose = false"
          >
            <nuxt-img
              :src="
                isHoverBtnClose ? '/icons/close.svg' : '/icons/close-white.svg'
              "
              class="w-full h-full"
            />
          </div>
        </div>

        <v-list class="menu__list list-none mt-24 bg-transparent">
          <nuxt-link
            :to="localePath(menu.to)"
            v-for="(menu, i) in menuList"
            :key="menu.id"
            class="menu__item mt-4 block"
          >
            <p
              class="menu__item-title text-5xl font-extrabold hover:text-white transition-all"
              @click="show = false"
            >
              {{ menu.title }}
              <span class="text-xs font-medium text-gray-500 italic"
                >/0{{ i }}</span
              >
            </p>
          </nuxt-link>
        </v-list>

        <div class="bg-black opacity-100 text-black h-0.5 mt-10 mb-10" />

        <div class="introduction flex items-center justify-between">
          <div
            class="btnPlay py-2 pl-4 pr-2 bg-gray-50 rounded-full flex items-center justify-between"
          >
            <span class="text-sm font-bold text-black">Play introduction</span>
            <div
              class="w-10 h-10 rounded-full bg-black flex items-center justify-center ml-4 icon__play hover:bg-transparent"
            >
              <img src="/icons/play.svg" alt="" />
            </div>
          </div>

          <ul class="social__list flex items-center justify-start gap-4">
            <li class="social__item">
              <nuxt-link
                class="social__link text-base font-bold hover:text-white transition-all"
                >Github</nuxt-link
              >
            </li>
            <li class="social__item">
              <nuxt-link
                class="social__link text-base font-bold hover:text-white transition-all"
                >Linkedin</nuxt-link
              >
            </li>
          </ul>
        </div>

        <button
          type="button"
          @click="handleLogout"
          class="btn__logout bg-red-500 text-slate-50 float-start mt-10 py-3 px-28 text-md font-bold hover:bg-transparent border-2 border-solid border-transparent hover:border-red-500 hover:text-red-500 transition-all"
        >
          Logout
        </button>
      </div>
    </v-overlay>
    <div
      class="menu__header-mobile position-fixed left-0 right-0 top-0 w-full overflow-scroll no-scrollbar"
      :class="showMobile ? 'h-full' : 'h-0'"
    >
      <div
        :class="showMobile ? 'h-full' : 'h-0'"
        class="body-container overflow-scroll no-scrollbar px-4 py-4 2xl:p-12 xl:p-12 lg:p-12 md:p-8 2xl:w-3/4 xl:w-4/5 lg:w-3/4 md:w-11/12 w-full lg:h-fit md:h-fit h-full"
      >
        <div class="flex items-center justify-between w-full">
          <h1 class="menu__title text-xl font-bold">ConianGuys</h1>
          <div
            class="btn__close mobile w-7 h-7 p-1 flex items-center justify-center rounded-full"
            @click="handleCloseMenu"
            @mouseenter="isHoverBtnClose = true"
            @mouseleave="isHoverBtnClose = false"
          >
            <nuxt-img
              :src="
                isHoverBtnClose ? '/icons/close.svg' : '/icons/close-white.svg'
              "
              class="w-full h-full"
            />
          </div>
        </div>

        <v-list class="menu__list list-none mt-14 bg-transparent">
          <nuxt-link
            :to="localePath(menu.to)"
            v-for="(menu, i) in menuList"
            :key="menu.id"
            class="menu__item mt-4 block"
          >
            <p
              class="menu__item-title text-2xl font-extrabold hover:text-white transition-all"
              @click="showMobile = false"
            >
              {{ menu.title }}
              <span class="text-xs font-medium text-gray-500 italic"
                >/0{{ i }}</span
              >
            </p>
          </nuxt-link>
        </v-list>

        <div class="bg-black opacity-100 text-black h-px mt-6 mb-6" />

        <div
          class="btnPlay py-2 pl-4 pr-2 bg-gray-50 rounded-full flex items-center justify-between w-fit my-0 mx-auto flex-1"
        >
          <span class="text-xs font-bold text-black whitespace-nowrap"
            >Play introduction</span
          >
          <div
            class="w-8 h-8 rounded-full bg-black flex items-center justify-center ml-3 icon__play hover:bg-transparent"
          >
            <img src="/icons/play.svg" alt="" />
          </div>
        </div>
        <div class="bg-black opacity-100 text-black h-px mt-6 mb-6" />

        <ul
          class="social__list flex items-center justify-center flex-col gap-3"
        >
          <li class="social__item">
            <nuxt-link
              class="social__link text-xs font-bold hover:text-white transition-all tracking-widest"
              >Github</nuxt-link
            >
          </li>
          <li class="social__item">
            <nuxt-link
              class="social__link text-xs font-bold hover:text-white transition-all tracking-widest"
              >Linkedin</nuxt-link
            >
          </li>
        </ul>

        <button
          type="button"
          @click="handleLogout"
          class="btn__logout w-full bg-red-500 text-slate-50 mt-24 py-3 px-28 text-sm font-bold hover:bg-transparent border-2 border-solid border-transparent hover:border-red-500 hover:text-red-500 transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { pagePaths } from "~/constant/paths";
import { useAuthStore } from "~/store/auth";

const localePath = useLocalePath();
const authStore = useAuthStore();
const show = ref<boolean>(false);
const showMobile = ref<boolean>(false);
const isHoverBtnClose = ref<boolean>(false);

const user = computed(() => {
  return authStore.user;
});
const menuList = ref<{ id: number; title: string; to: string }[]>([
  {
    id: 1,
    title: "Dashboard",
    to: "/",
  },
  {
    id: 2,
    title: "Profile",
    to: "/profile",
  },
  {
    id: 3,
    title: "Projects",
    to: "/projects",
  },
  {
    id: 4,
    title: "Skills",
    to: "/skills",
  },
]);

const handleCloseMenu = () => {
  show.value = false;
  showMobile.value = false;
};
const handleShowMenu = () => {
  show.value = true;
  showMobile.value = true;
};

const handleLogout = () => {
  localStorage.removeItem("token");
  navigateTo({ path: localePath(pagePaths.signIn) });
};
</script>

<style scoped>
@import "./menuHeader.scss";

.body-container {
  position: relative;
  background-color: var(--bg-gray-light);
  z-index: 0;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
    z-index: -1;
    opacity: 0.1;
    pointer-events: none;
    background-image: url("/images/noise.png");
    background-repeat: repeat;
    background-position: 0 0;
    border-radius: 20px;
    background-size: 200px auto;
  }
}

.btn__close {
  border: 2px solid var(--black-almost-color);
  animation: Rotate 0.75s linear reverse;
  transform: rotate(45deg);
  transition: all 0.2s linear;
  background-color: var(--black-almost-color);

  &:hover {
    animation: RotateFade 0.5s linear;
    background-color: var(--white-color);
    transition: all 0.2s linear;
  }
}

.menu__item-title {
  font-family: "Syne", sans-serif;
}

.icon__play {
  border: 2px solid var(--black-almost-color);
  transition: all 0.2s linear;
  &:hover {
    transition: all 0.2s linear;
    background: transparent;

    img {
      transition: all 0.2s linear;
      transform: scale(1.4);
    }
  }
}
</style>
