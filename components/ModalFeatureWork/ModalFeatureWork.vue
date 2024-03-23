<template>
  <div class="">
    <ImageCustom
      :src="featureWork.image"
      :alt="`feature-image-${featureWork.id}`"
      class="tw-w-full tw-h-full tw-object-cover"
      @click="show = true"
    />
    <v-dialog
      v-model="show"
      scrollable
      class="tw-w-full lg:tw-w-4/5 xl:tw-w-1/2"
    >
      <div class="tw-bg-white tw-p-2 md:tw-p-6 tw-w-full tw-overflow-auto">
        <div
          class="tw-size-8 lg:tw-size-12 tw-p-2 lg:tw-p-3 tw-flex tw-items-center tw-justify-center tw-border md:tw-border-2 tw-rounded-full tw-border-black tw-border-solid tw-float-end"
          @click="show = false"
        >
          <ImageCustom
            :src="'/icons/close-v2.svg'"
            alt="close-icon"
            class="tw-size-full object-fit-cover"
          />
        </div>
        <TitleAnimation
          :letters="titleAnimation"
          :classNameCharacter="'tw-text-black tw-text-[40px] md:tw-text-[80px]'"
        />
        <ImageCustom
          :src="featureWork.image"
          :alt="`feature-image-${featureWork.id}`"
          class="tw-w-full tw-h-full tw-object-cover"
          v-motion
          :initial="{
            scale: 0,
          }"
          :enter="{
            scale: 1,
            transition: {
              duration: 400,
              type: 'keyframes',
              ease: 'easeOut',
            },
          }"
        />
      </div>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import type { IFeatureWork } from "~/store/interfaces";
import type { ITitleCharacter } from "../TitleAnimation/TitleAnimation.vue";

interface Props {
  featureWork: IFeatureWork;
}
const { featureWork } = defineProps<Props>();
const show = ref<boolean>(false);

const featureTitle = featureWork.title.split("");
const titleAnimation: ITitleCharacter[] = [...featureTitle].map(
  (item, index) => ({
    id: index,
    text: item,
  }),
);
</script>

<style scoped></style>
