<template>
  <div class="wrapper flex items-center justify-center flex-col gap-4">
    <h1
      class="title 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-center font-black text-white"
    >
      Custom Your portfolio following things you want!
    </h1>
    <p
      class="description text-base text-center italic font-medium text-gray-400 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-4 mt-0"
    >
      Greetings! I'm {{ user?.name ?? "MinhTai" }}, and this virtual space is
      where my journey, skills, and creativity converge
    </p>

    <form
      class="form__search flex items-center justify-center gap-4 w-full 2xl:mt-10 xl:mt-10 lg:mt-10 md:mt-8 mt-6"
      @submit.prevent="handleSearch"
    >
      <div class="form__group 2xl:w-3/4 xl:w-4/5 lg:w-11/12 md:w-11/12 w-full">
        <div class="form__input-group">
          <input
            type="text"
            placeholder="Enter a your project or skill..."
            v-model="keyword"
            v-bind="keywordAttrs"
            autofocus
            class="2xl:text-xl xl:text-base lg:text-base md:text-base text-xs font-bold text-black"
          />
          <button
            type="submit"
            class="form__btn-search text-white h-full w-fit rounded-full 2xl:text-base xl:text-base lg:text-base md:text-base text-xs font-medium"
            :class="values.keyword ? 'bg-black' : 'bg-gray-500'"
          >
            Search now
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
import * as yup from "yup";

const authStore = useAuthStore();
const user = computed(() => {
  return authStore.user;
});

const { defineField, errors, handleSubmit, values } = useForm({
  initialValues: {
    keyword: "",
  },
  validationSchema: {
    keyword: yup.string().required("Enter your keyword first!"),
  },
});

const [keyword, keywordAttrs] = defineField("keyword");

const handleSearch = handleSubmit(async (values) => {
  try {
    console.log(values);
  } catch (error) {}
});
</script>

<style scoped>
@import "./searchDashboard.scss";
</style>
