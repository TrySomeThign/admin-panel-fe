<template>
  <div class="tw-mx-0 tw-my-auto tw-mt-6 tw-font-supply tw-pb-20">
    <div class="tw-flex tw-items-center tw-justify-center">
      <div class="contact__title">
        <div
          class="contact__title--item"
          :class="`${isTallText ? 'pull' : ''} ${
            character.id ? `character-${character.id}` : ''
          }`"
          v-for="(character, i) in titleCharacters"
          :key="i"
          :style="{ transitionDelay: `calc(0s + 0.05s * ${character.id})` }"
        >
          {{ character.text }}
        </div>
      </div>
    </div>

    <form
      v-if="!isSendContactSuccess"
      class="tw-flex tw-items-center tw-justify-center tw-flex-col tw-w-full tw-mt-4"
      @submit.prevent="handleSendContact"
    >
      <div class="tw-w-full lg:tw-w-[500px] tw-space-y-8">
        <div class="tw-relative tw-space-y-2">
          <label class="tw-block tw-text-base tw-font-bold text-white"
            >Email</label
          >
          <input
            type="email"
            v-model="email"
            v-bind="emailAttrs"
            placeholder="Enter your email"
            class="tw-border-[1.5px] tw-rounded-md tw-border-silver tw-border-solid tw-px-3 tw-py-2.5 tw-w-full text-white focus:tw-outline-none focus:tw-border-green-lime"
          />
          <p
            class="tw-absolute tw-bottom-[-22px] tw-text-sm tw-text-green-lime tw-font-medium tw-italic"
          >
            {{ errors.email }}
          </p>
        </div>

        <div class="tw-relative tw-space-y-2">
          <label class="tw-block tw-text-base tw-font-bold text-white"
            >Name
            <span class="tw-text-sm tw-text-silver italic">(/50)</span></label
          >
          <input
            type="text"
            v-model="name"
            v-bind="nameAttrs"
            placeholder="Enter your full name"
            class="tw-border-[1.5px] tw-rounded-md tw-border-silver tw-border-solid tw-px-3 tw-py-2.5 tw-w-full text-white focus:tw-outline-none focus:tw-border-green-lime"
          />
          <p
            class="tw-absolute tw-bottom-[-22px] tw-text-sm tw-text-green-lime tw-font-medium tw-italic"
          >
            {{ errors.name }}
          </p>
        </div>

        <div class="tw-relative tw-space-y-2">
          <label class="tw-block tw-text-base tw-font-bold text-white"
            >Message
            <span class="tw-text-sm tw-text-silver italic">(/50)</span></label
          >
          <textarea
            type="text"
            v-model="message"
            v-bind="messageAttrs"
            placeholder="Do you have any question for work?"
            class="tw-border-[1.5px] tw-border-silver tw-border-solid tw-px-3 tw-py-2.5 tw-w-full text-white focus:tw-outline-none tw-h-40 lg:tw-h-52 tw-rounded-md focus:tw-border-green-lime"
          />
          <p
            class="tw-absolute tw-bottom-[-22px] tw-text-sm tw-text-green-lime tw-font-medium tw-italic"
          >
            {{ errors.message }}
          </p>
        </div>

        <button
          type="submit"
          :disabled="loadingSendContact"
          class="tw-mt-10 tw-py-4 tw-w-full tw-bg-green-lime tw-text-gray-dark tw-text-base tw-font-bold tw-rounded-md"
          :class="loadingSendContact ? 'tw-opacity-85' : ''"
        >
          Send contact
        </button>
        <v-progress-linear
          indeterminate
          v-if="loadingSendContact"
          color="#DCFF7D"
          class="!tw-mt-0"
        ></v-progress-linear>
      </div>
    </form>

    <div
      class="tw-text-white tw-flex tw-items-center tw-justify-center tw-flex-col tw-w-full tw-mt-11 tw-space-y-2.5"
      v-if="isSendContactSuccess"
    >
      <p class="tw-text-[60px] tw-font-bold tw-text-green-lime tw-font-supply">
        Thank you for contact
      </p>
      <p
        class="tw-text-3xl tw-font-semibold tw-text-silver tw-font-integralCF tw-italic"
      >
        I will contact you back ASAP
      </p>
      <p class="tw-text-2xl tw-font-bold tw-font-supply">Peace love!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as yup from "yup";
interface IPayloadSendContact {
  email: string;
  name: string;
  message: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email invalid")
    .required("Please enter your email here!"),
  name: yup.string().required("Please enter your name here!").max(50),
  message: yup.string().required("Do you have any question?").max(255),
});
const { defineField, handleSubmit, errors } = useForm<IPayloadSendContact>({
  initialValues: {
    email: "",
    name: "",
    message: "",
  },
  validationSchema,
});
const loadingSendContact = ref<boolean>(false);
const isSendContactSuccess = ref<boolean>(false);
const [email, emailAttrs] = defineField("email");
const [name, nameAttrs] = defineField("name");
const [message, messageAttrs] = defineField("message");

definePageMeta({
  layout: "guest-layout",
});

const titleCharacters: { id: number | null; text: string }[] = [
  {
    id: 1,
    text: "C",
  },
  {
    id: 2,
    text: "O",
  },
  {
    id: 3,
    text: "N",
  },
  {
    id: 4,
    text: "T",
  },
  {
    id: 5,
    text: "A",
  },
  {
    id: 6,
    text: "C",
  },
  {
    id: 7,
    text: "T",
  },
  {
    id: null,
    text: " ",
  },
  {
    id: null,
    text: " ",
  },
  {
    id: 8,
    text: "M",
  },
  {
    id: 9,
    text: "E",
  },
];

const isTallText = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => {
    isTallText.value = true;
  }, 200);
});

const handleSendContact = handleSubmit(async (values) => {
  try {
    loadingSendContact.value = true;
    const { error: fetchError } = await useFetch("/api/send-mail", {
      method: "POST",
      body: {
        to: useRuntimeConfig().public.userEmail,
        subject: "Notifications - New Contact",
        text: "Contact Notification",
        html: `<div>
          <h4>Hi Tyler Tran, You have a message contact from ${values.name}</h4>
          <p>Info contact</p>
          <li>
            <strong>Email</strong>: ${values.email}
          </li>
          <li>
            <strong>Name</strong>: ${values.name}
          </li>
          <li>
            <strong>Message</strong>: ${values.message}
          </li>
        </div>`,
      },
    });

    if (fetchError.value) {
      throw new Error(fetchError.value.message);
    }
    loadingSendContact.value = false;
    isSendContactSuccess.value = true;
  } catch (err) {
    console.error("Error", err);
    loadingSendContact.value = false;
  }
});
</script>

<style scoped src="./contact.scss"></style>
