<template>
  <div class="wrapper tw-text-silver tw-pb-20">
    <HeaderGuest />
    <!-- **** Disabled Now **** -->
    <!-- <div
      class="tw-flex tw-flex-col lg:tw-flex-row tw-mt-10 lg:tw-mt-20 tw-gap-10 lg:tw-gap-20"
    >
      <TabsFeatureWork
        :tab-active="tabActive"
        @update-tab-active="updateTabActive"
      />
      <FeatureWorkList />
    </div> -->
    <div class="info-description">
      I’m a passionate software engineer Developer with over a year of hands-on
      experience in building dynamic and responsive web applications. My
      expertise spans across various modern technologies including Node.js,
      Express.js, TypeScript, React, Next.js, Vue, and Nuxt.
      <div class="line-divide"></div>
      🌟 Programming Languages: JavaScript (ES6, Node.js), TypeScript
      <br />🌟 Frontend Development: HTML/CSS/SCSS <br />🌟 Frameworks and
      Libraries: Next.js, React.js Vue.js (Vue 3), Nuxt, Express.js <br />🌟
      CI/CD: Bitbucket pipeline, GitHub pipeline, Docker and Docker Compose
      <br />🌟 Databases: PostgreSQL, MySQL, MongoDB, Firestore <br />🌟
      Deployment: Google Cloud Service, Amazon Web Service, Heroku, Vercel,
      Railway, fly.io
      <br />
      <div class="line-divide"></div>
      Other Skills: <br />
      🚀 RESTful APIs, SendGrid, Brevo, Elastic, Twilio, Stripe, OAuth2, Google
      Cloud Function, SocketIO, In-depth git knowledge, <br />
      🚀 Frontend Libraries: Bootstrap, Tailwind, AntDesign, Quasar, VueX,
      Redux, Material UI, ChakraUI Testing: JestJS <br />
      🚀 Responsive Development: Expert in responsive, mobile-first development
      and mindset
      <br />
      🚀 Design (UI/UX) : Photoshtop, Adobe Illustrator, Figma <br />
      🚀 Language Skills: Intermediate English (Good reading/writing skills,
      basic verbal communication)
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "guest-layout",
});

// const tabActive = ref<string>("d");
// const updateTabActive = (newValue: string) => {
//   tabActive.value = newValue;
// };
</script>

<style scoped>
.wrapper {
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
}
.info-description {
  margin-top: 60px;
  font-size: 30px;
  font-weight: 500;
  color: var(--color-silver);
  font-family: "supply", sans-serif;
}
.line-divide {
  width: 100%;
  height: 1px;
  background-color: var(--color-silver);
  margin: 50px 0;
}
</style>
