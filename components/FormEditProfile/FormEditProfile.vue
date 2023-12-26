<template>
  <form
    class="form__edit-profile flex items-center justify-center flex-col gap-10 w-full"
    @submit.prevent="handleUpdateProfile"
  >
    <div class="form__group">
      <label
        for="input-avatar"
        class="avatar__preview block position-relative 2xl:w-80 xl:w-80 lg:w-80 md:w-80 w-52 2xl:h-80 xl:h-80 lg:h-80 md:h-80 h-52 rounded-full border-2 border-black border-solid cursor-pointer"
      >
        <img
          :src="
            avatarPreview
              ? avatarPreview
              : user?.avatar || avatarPlaceholderPath
          "
          alt="avatar"
          class="size-full object-cover rounded-full"
        />
        <div
          class="icon__camera position-absolute 2xl:w-10 xl:w-10 lg:w-10 md:w-10 w-8 2xl:h-10 xl:h-10 lg:h-10 md:h-10 h-8"
        >
          <img
            src="/icons/camera.svg"
            alt="icon-camera"
            class="size-full object-contain"
          />
        </div>
      </label>
      <input
        type="file"
        hidden
        id="input-avatar"
        accept="image/*"
        @change="handleChangeAvatar"
      />
    </div>

    <div
      class="form__field-wrapper position-relative 2xl:w-1/2 xl:w-1/2 lg:w-3/4 md:w-3/4 w-full bg-white border-2 border-solid border-black"
    >
      <h1
        class="form__title text-center 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-2xl font-black text-black tracking-wide"
      >
        General information
      </h1>

      <!-- ====== EMAIL ====== -->
      <div class="form__group">
        <div
          class="form__label 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-medium text-zinc-500"
        >
          Email
        </div>
        <div
          class="form__input-group flex items-stretch justify-between 2xl:mt-2 xl:mt-2 lg:mt-2 md:mt-2 mt-2"
        >
          <input
            class="form__input flex-1 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-normal text-black"
            type="text"
            placeholder="conianguys@gmail.com"
            disabled
            v-model="email"
            v-bind="emailProps"
          />
          <div class="icon__edit">
            <img
              src="/icons/edit-pen-white.svg"
              alt=""
              class="size-full object-contain"
            />
          </div>
        </div>
      </div>

      <!-- ====== PASSWORD ====== -->
      <div class="form__group 2xl:mt-6 xl:mt-6 lg:mt-4 md:mt-2">
        <div
          class="form__label 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-medium text-zinc-500"
        >
          Password
        </div>
        <div
          class="form__input-group flex items-stretch justify-between 2xl:mt-2 xl:mt-2 lg:mt-2 md:mt-2 mt-2"
        >
          <input
            class="form__input flex-1 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-normal text-black"
            type="text"
            value="*********"
            placeholder="conianguys@gmail.com"
            disabled
          />
          <div class="icon__edit">
            <img
              src="/icons/edit-pen-white.svg"
              alt=""
              class="size-full object-contain"
            />
          </div>
        </div>
      </div>

      <!-- ====== NAME ====== -->
      <div class="form__group 2xl:mt-6 xl:mt-6 lg:mt-4 md:mt-2">
        <div
          class="form__label 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-medium text-zinc-500"
        >
          Name
        </div>
        <input
          class="form__input 2xl:mt-2 xl:mt-2 lg:mt-2 md:mt-2 mt-2 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-normal text-black"
          type="text"
          placeholder="Enter your name..."
          v-model="name"
          v-bind="nameProps"
        />
      </div>

      <!-- ====== DISPLAY NAME ====== -->
      <div class="form__group 2xl:mt-6 xl:mt-6 lg:mt-4 md:mt-2">
        <div
          class="form__label 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-medium text-zinc-500"
        >
          Display Name
        </div>
        <input
          class="form__input 2xl:mt-2 xl:mt-2 lg:mt-2 md:mt-2 mt-2 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-normal text-black"
          type="text"
          placeholder="Enter your display name..."
          v-model="displayName"
          v-bind="displayNameProps"
        />
      </div>

      <!-- ====== INTRODUCTION ====== -->
      <div class="form__group 2xl:mt-6 xl:mt-6 lg:mt-4 md:mt-2">
        <div
          class="form__label 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-medium text-zinc-500"
        >
          Introduction
        </div>
        <input
          class="form__input 2xl:mt-2 xl:mt-2 lg:mt-2 md:mt-2 mt-2 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-normal text-black"
          type="text"
          placeholder="Enter your introduction..."
          v-model="introduction"
          v-bind="introductionProps"
        />
      </div>

      <!-- ====== JOB TITLE ====== -->
      <div class="form__group 2xl:mt-6 xl:mt-6 lg:mt-4 md:mt-2">
        <div
          class="form__label 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-medium text-zinc-500"
        >
          Job title
        </div>
        <input
          class="form__input 2xl:mt-2 xl:mt-2 lg:mt-2 md:mt-2 mt-2 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm font-normal text-black"
          type="text"
          placeholder="Enter your job title..."
          v-model="jobTitle"
          v-bind="jobTitleProps"
        />
      </div>

      <div
        class="buttons__action flex items-center 2xl:justify-end xl:justify-end lg:justify-end md:justify-center w-full gap-6 mt-6"
      >
        <button
          @click="$router.back()"
          type="button"
          class="btn__item cancel text-sm 2xl:w-fit xl:w-fit lg:w-fit md:w-full w-full font-medium hover:bg-slate-100 transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          :disabled="loadingUpdateProfile"
          :class="loadingUpdateProfile ? 'bg-zinc-600' : 'bg-blue-royal'"
          class="btn__item save text-sm 2xl:w-fit xl:w-fit lg:w-fit md:w-full w-full font-medium text-white hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
        >
          Save changes
        </button>
      </div>
      <div
        class="loader position-absolute bottom-0 left-0 right-0 w-full"
        v-if="loadingUpdateProfile"
      >
        <LoadingProgress />
      </div>
    </div>

    <ModalSuccess
      :show="showModalSuccess"
      :handle-close="() => (showModalSuccess = false)"
      :message="'Profile has been updated successfully'"
    />
  </form>
</template>

<script setup lang="ts">
import { avatarPlaceholderPath } from "~/constant/paths";
import { useAuthStore } from "~/store/auth";
import { EUserRole, type IPayloadEditProfile } from "~/store/interfaces";
import { useUserStore } from "~/store/user";

const authStore = useAuthStore();
const userStore = useUserStore();
const user = computed(() => {
  return authStore.user;
});

const { defineField, errors, handleSubmit, setValues } =
  useForm<IPayloadEditProfile>({
    initialValues: {
      avatar: authStore.user?.avatar ?? null,
      displayName: authStore.user?.displayName ?? "",
      email: authStore.user?.email ?? "",
      introduction: authStore.user?.introduction ?? "",
      jobTitle: authStore.user?.jobTitle ?? "",
      name: authStore.user?.name ?? "",
      role: authStore.user?.role ?? EUserRole.Admin,
    },
  });

const avatarPreview = ref<string>("");
const isFileChange = ref<boolean>(false);
const loadingUpdateProfile = ref<boolean>(false);
const showModalSuccess = ref<boolean>(false);
const [avatar, avatarProps] = defineField("avatar");
const [email, emailProps] = defineField("email");
const [displayName, displayNameProps] = defineField("displayName");
const [name, nameProps] = defineField("name");
const [introduction, introductionProps] = defineField("introduction");
const [jobTitle, jobTitleProps] = defineField("jobTitle");

const handleChangeAvatar = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (files && files.length > 0) {
    const urlPreview = URL.createObjectURL(files[0]);
    avatarPreview.value = urlPreview;
    setValues({
      avatar: files[0] as File,
    });
    isFileChange.value = true;
  }
};

const handleUpdateProfile = handleSubmit(async (values) => {
  if (!authStore.user) return;
  const formData = new FormData();
  formData.append("avatar", values.avatar as string);
  try {
    loadingUpdateProfile.value = true;
    await userStore.updateProfile(authStore.user.id, values);

    if (isFileChange.value) {
      await userStore.uploadFile(authStore.user.id, formData);
    }

    await authStore.getCurrentUser();

    loadingUpdateProfile.value = false;
    isFileChange.value = false;
    showModalSuccess.value = true;

    setTimeout(() => {
      showModalSuccess.value = false;
    }, 5000);
  } catch (error) {
    loadingUpdateProfile.value = false;
    console.log("error", error);
  }
});
</script>

<style scoped>
@import "./formEditProfile.scss";
</style>
