<template>
  <div class="tw-pb-20">
    <div class="tw-flex tw-items-center tw-justify-center">
      <div class="experience__title">
        <div
          class="experience__title--item"
          :class="`${isTallText ? 'pull' : ''} ${i ? `character-${i}` : ''}`"
          v-for="(character, i) in titleCharacters"
          :key="i"
          :style="{ transitionDelay: `calc(0s + 0.05s * ${i})` }"
        >
          {{ character }}
        </div>
      </div>
    </div>

    <div
      class="tw-my-0 tw-mx-auto tw-mt-6"
      :class="experiences.length <= 1 ? 'tw-max-w-[50%]' : 'tw-max-w-full'"
    >
      <v-timeline align="start" line-color="#e0f954" truncate-line="start">
        <v-timeline-item
          v-for="(item, i) in experiences"
          :key="i"
          :dot-color="item.color"
          fill-dot
        >
          <template v-slot:icon>
            <v-avatar
              image="../../public/images/nus-technology-logo.png"
              class="tw-object-cover"
            ></v-avatar>
          </template>
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 250 * (i + 2),
                type: 'keyframes',
                ease: 'easeOut',
              },
            }"
            class="!tw-bg-transparent tw-text-white tw-border-[2px] tw-border-solid tw-border-green-lime"
          >
            <div
              :class="[
                'tw-text-lg tw-font-bold tw-font-supply tw-bg-white tw-py-2.5 tw-px-4 tw-text-black-almost',
              ]"
            >
              NUS Technology ( ~1,5 year experience)
            </div>
            <div class="text--primary tw-bg-transparent tw-p-4">
              <div class="tw-space-y-2.5">
                <li>
                  <strong> Diverse Project Experience: </strong>Contributed to
                  over 6 projects across various industries, including
                  E-commerce, Travel, Education, CMS, Security, Payment, Social,
                  Content Creator,...
                </li>
                <li>
                  <strong> Deployment Integration: </strong>
                  Proficient in deploying frontend applications on Vercel,
                  backend services on AWS, and MVC frameworks on Fly.io.
                  Additionally, skilled in utilizing Railway for streamlined
                  deployment and management of multiple services.
                </li>

                <li>
                  <strong> Database Experience: </strong>
                  Experienced in database management through various projects,
                  including designing and optimizing relational databases using
                  SQL and PostgreSQL, implementing scalable NoSQL solutions with
                  MongoDB, and leveraging Firebase for real-time data
                  synchronization in cloud-based applications.
                </li>

                <li>
                  <strong> CI/CD System Construction: </strong>Established a
                  CI/CD system on GitHub, streamlining code quality analysis and
                  saving significant development time by assisting teammates in
                  code quality evaluation and improvement strategies
                </li>

                <li>
                  <strong>Payment System Integration:</strong> Integrated
                  feature payment from basic to complex by Stripe: Checkout
                  session, Subscription, Setup card, Customer, Account
                  connected,...
                </li>

                <li>
                  <strong>Manage Task Experience:</strong>
                  Self-manage,Discussion, Clear requirement tasks for customer
                  requests, from simple to complex issues, with proficiency in
                  tools like Slack, Trello, Linear, Notion, and Jira.
                </li>
              </div>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IExperience {
  color: string;
  companyName: string;
}
definePageMeta({
  layout: "guest-layout",
});

const titleCharacters = "EXPERIENCE   WORK";

const isTallText = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => {
    isTallText.value = true;
  }, 200);
});

const experiences: IExperience[] = [
  {
    color: "#fff",
    companyName: "NUS Technology",
  },
];
</script>

<style scoped src="./experience.scss"></style>
