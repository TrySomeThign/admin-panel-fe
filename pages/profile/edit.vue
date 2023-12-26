<template>
  <form class="form__edit-profile">
    <div class="form__group">
      <label for="input-avatar" class="avatar__preview">
        <img :src="user?.avatar ?? avatarPlaceholderPath" alt="" />
        <img src="/icons/camera.svg" alt="" class="icon__camera" />
      </label>
      <input type="file" hidden id="input-avatar" />
    </div>

    <div class="form__group">
      <div class="form__title">Email</div>
      <input
        type="text"
        id="input-avatar"
        placeholder="conianguys@gmail.com"
        disabled
      />
    </div>

    <div class="form__group">
      <div class="form__title">Password</div>
      <input
        type="text"
        value="*********"
        id="input-avatar"
        placeholder="conianguys@gmail.com"
        disabled
      />
    </div>

    <div class="form__group">
      <div class="form__title">Name</div>
      <input type="text" id="input-avatar" placeholder="Enter your name..." />
    </div>

    <div class="form__group">
      <div class="form__title">Display Name</div>
      <input
        type="text"
        id="input-avatar"
        placeholder="Enter your display name..."
      />
    </div>
    <div class="form__group">
      <div class="form__title">Introduction</div>
      <input
        type="text"
        id="input-avatar"
        placeholder="Enter your introduction..."
      />
    </div>
    <div class="form__group">
      <div class="form__title">Introduction</div>
      <input
        type="text"
        id="input-avatar"
        placeholder="Enter your introduction..."
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
import { avatarPlaceholderPath } from "~/constant/paths";
import { type IPayloadEditProfile, EUserRole } from "~/store/interfaces";

const authStore = useAuthStore();
const user = computed(() => {
  return authStore.user;
});

const { defineField, errors } = useForm<IPayloadEditProfile>({
  initialValues: {
    avatar: "",
    displayName: "",
    email: "",
    introduction: "",
    jobTitle: "",
    name: "",
    password: "",
    role: EUserRole.Admin,
  },
});

const [avatar, avatarProps] = defineField("avatar");
</script>

<style scoped></style>
