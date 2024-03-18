<template>
  <div class="tw-text-silver tw-mt-40 tw-pb-20 md:tw-pb-0 md:tw-mt-0">
    <div
      class="item-email tw-flex tw-items-center tw-justify-end tw-gap-3 tw-flex-wrap"
    >
      <span class="tw-text-sm tw-font-supply contact-item tw-text-scorpion"
        >email :</span
      >
      <span
        class="tw-text-sm contact-item tw-font-supply tw-color-silver"
        @mouseover="(e: MouseEvent) => startAnimation(e, email)"
        :data-value="email"
        >{{ email }}</span
      >
    </div>

    <div class="line-divide tw-my-6"></div>

    <div
      class="tw-flex tw-items-center tw-justify-end tw-gap-3 lg:tw-gap-10 tw-flex-wrap"
    >
      <NuxtLink
        :to="contact.url"
        target="_blank"
        class="contact-item tw-font-supply tw-no-underline tw-text-silver hover:tw-text-green-suckle"
        v-for="contact in contactList"
        :key="contact.id"
      >
        →
        <span
          class="tw-text-sm tw-text-silver tw-font-normal tw-font-supply letter tw-tracking-widest hover:tw-text-green-suckle"
        >
          {{ contact.title }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const email = runtimeConfig.public.email;
const contactList: { id: number; title: string; url: string }[] = [
  {
    id: 1,
    title: "linkedIn",
    url: "https://linkedin.com",
  },
  {
    id: 1,
    title: "github",
    url: "https://github.com",
  },
  {
    id: 1,
    title: "instagram",
    url: "https://instagram.com",
  },
  {
    id: 1,
    title: "behance",
    url: "https://behance.com",
  },
];

let interval: any = null;
const startAnimation = (event: any, letters: string) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = letters
      .split("")
      .map((letter: string, index: number) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iteration >= letters.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 50);
};
</script>

<style lang="scss" scoped src="./contactSection.scss"></style>
