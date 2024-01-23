<template>
  <div class="flex items-center justify-center h-screen">
    <form
      class="form bg-white h-fit flex items-center justify-center flex-col 2xl:w-3/12 xl:w-2/5 lg:w-3/5 md:w-3/4 w-11/12 border-2 border-white"
      :class="isEnoughField ? 'enough-field' : ''"
      @submit.prevent="handleSignIn"
    >
      <h1
        class="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-black title 2xl:mb-12 xl:mb-12 lg:mb-10 md:mb-8 mb-8"
      >
        {{ $t("form_signIn_title") }}
      </h1>
      <div class="form-group w-full">
        <input
          type="text"
          v-model="emailOrUsername"
          placeholder="admin@gmail.com"
          autofocus
          class="form-input 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-sm font-medium w-full text-emerald-900 border-2 rounded border-stone-20"
          v-bind="emailProps"
        />
        <span class="block text-sm font-medium text-red-600 mt-2">{{
          errors.emailOrUsername
        }}</span>
      </div>
      <div class="form-group w-full mt-5">
        <input
          type="password"
          v-model="password"
          placeholder="********"
          class="form-input 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-sm font-medium w-full text-emerald-900 border-2 rounded border-stone-20"
          v-bind="passwordProps"
        />
        <span class="block text-sm font-medium text-red-600 mt-2">{{
          errors.password
        }}</span>
      </div>
      <span
        class="block text-sm font-medium text-red-600 mt-2 text-left w-full"
        v-if="errorApi"
        >{{ errorApi.message }}</span
      >
      <button
        type="submit"
        class="btn-submit mt-4 w-full text-white 2xl:text-lg xl:text-lg lg:text-lg md:text-base text-sm font-bold"
      >
        Sign In
        <v-icon v-if="loading" icon="mdi-loading" class="icon__loading" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { pagePaths } from "~/constant/paths";
import { useAuthStore } from "~/store/auth";
import type { IPayloadSignIn } from "~/store/interfaces";
import type { IError } from "~/types/base";

const { defineField, handleSubmit, errors } = useForm<IPayloadSignIn>({
  validationSchema: {
    emailOrUsername: yup
      .string()
      .email("Email invalid")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  },
});

const isEnoughField = computed(() => {
  if (emailOrUsername.value && password.value) {
    return true;
  } else {
    return false;
  }
});

const [emailOrUsername, emailProps] = defineField("emailOrUsername");
const [password, passwordProps] = defineField("password");
const loading = ref<boolean>(false);
const errorApi = ref<IError | null>(null);

const { signIn, getCurrentUser } = useAuthStore();

const localePath = useLocalePath();

const handleSignIn = handleSubmit(async (values) => {
  try {
    loading.value = true;
    await signIn(values);
    navigateTo({ path: localePath(pagePaths.home) });
  } catch (error) {
    loading.value = false;
    errorApi.value = error as IError;
  }
});

const handleGetCurrentUser = async () => {
  try {
    loading.value = true;
    await getCurrentUser();
    navigateTo({ path: localePath(pagePaths.home) });
  } catch (error) {
    loading.value = false;
  }
};

onMounted(() => {
  handleGetCurrentUser();
});
</script>

<style scoped>
@import "./formSignIn.scss";
</style>
