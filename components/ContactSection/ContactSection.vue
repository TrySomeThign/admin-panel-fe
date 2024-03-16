<template>
  <div class="text-silver mt-40 pb-20 md:mt-0">
    <div class="item-email flex items-center justify-end gap-3 flex-wrap">
      <span class="text-sm contact-item text-scorpion">email :</span>
      <span
        class="text-sm contact-item color-silver"
        @mouseover="(e: MouseEvent) => startAnimation(e, email)"
        :data-value="email"
        >{{ email }}</span
      >
    </div>

    <div class="line-divide my-6"></div>

    <div class="flex items-center justify-end gap-3 lg:gap-10 flex-wrap">
      <NuxtLink
        :to="contact.url"
        target="_blank"
        class="contact-item font-supply hover:text-green-suckle"
        v-for="contact in contactList"
        :key="contact.id"
      >
        →
        <span
          class="text-sm color-silver font-normal font-supply letter tracking-widest"
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
