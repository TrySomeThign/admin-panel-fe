<template>
  <div>
    <h1 class="title text-center text-5xl font-extrabold">Project creation</h1>
    <div
      class="flex items-stretch transition-all"
      :class="
        projectImagePreview ? 'justify-between gap-4' : 'justify-center gap-0'
      "
    >
      <div
        class="form bg-white"
        :class="projectImagePreview ? 'w-2/5' : 'w-3/4'"
      >
        <!-- **** Project Image **** -->
        <div class="form__group">
          <label
            for="input-file-project"
            :class="projectImagePreview ? 'border-solid' : 'border-dashed'"
            class="form__label-file border-2 cursor-pointer border-gray-500 hover:border-black transition-all w-1/2 aspect-square flex items-center justify-center flex-col"
          >
            <div
              class="project__image-preview w-3/4 h-3/4"
              v-if="projectImagePreview"
            >
              <img
                :src="projectImagePreview"
                alt="image-project-preview"
                class="size-full object-cover"
              />
            </div>
            <div v-else class="flex items-center justify-center flex-col">
              <h6 class="text-sm font-bold text-center mb-2">
                Upload image for your project
              </h6>
              <img
                src="/icons/computer-keyboard.svg"
                alt="icon-upload"
                class="w-8 h-8 object-cover"
              />
            </div>
          </label>
          <input
            type="file"
            id="input-file-project"
            hidden
            accept="image/*"
            @change="handleChangeImage"
          />
          <span
            class="form__error text-red-500 block text-lg font-medium mt-2"
            >{{ errors.image }}</span
          >
        </div>

        <!-- **** Project Title **** -->
        <div class="form__group">
          <label class="form__label text-xl font-bold">Title</label>
          <input
            class="form__input bg-white text-black text-lg font-medium w-full"
            type="text"
            placeholder="title of project..."
            v-model="title"
            v-bind="titleProps"
          />
          <span
            class="form__error text-red-500 block text-lg font-medium mt-2"
            >{{ errors.title }}</span
          >
        </div>

        <!-- **** Project Description **** -->
        <div class="form__group">
          <label class="form__label text-xl font-bold">Description</label>
          <textarea
            class="form__input bg-white text-black text-lg font-medium w-full h-32"
            type="text"
            placeholder="title of project..."
            v-model="description"
            v-bind="descriptionProps"
          />
          <span
            class="form__error text-red-500 block text-lg font-medium mt-2"
            >{{ errors.title }}</span
          >
        </div>

        <!-- **** Project Category **** -->
        <div class="form__group">
          <label class="form__label text-xl font-bold">Category</label>
          <select
            v-model="categoryId"
            v-bind="categoryIdProps"
            id="category-project"
            class="form__select w-full bg-white text-lg font-medium"
          >
            <option value="">Select type for project</option>
            <option
              :value="category.id"
              :key="category.id"
              class="option__category-item"
              v-for="category in categories"
            >
              {{ category.type }}
            </option>
          </select>
          <span
            class="form__error text-red-500 block text-lg font-medium mt-2"
            >{{ errors.categoryId }}</span
          >
        </div>

        <!-- **** Project Socials **** -->
        <div class="form__group">
          <label class="form__label text-xl font-bold">Socials</label>
          <div
            class="social__group"
            v-for="(input, i) in socialInputs"
            :key="i"
          >
            <div class="flex items-center justify-between">
              <h1 class="social__label text-sm font-bold text-gray-400">
                //Link {{ i + 1 }}
              </h1>
              <img
                src="/icons/icon-trash-red.svg"
                alt=""
                class="social__icon--trash"
                @click="
                  socialInputs = socialInputs.filter(
                    (item, index) => index !== i,
                  )
                "
              />
            </div>
            <select
              v-model="input.title"
              class="social__input bg-white text-black text-lg font-medium w-full"
            >
              <option
                v-for="(option, i) in optionListSocialPlatform"
                :key="i"
                :value="option.title"
              >
                {{ option.title }}
              </option>
            </select>
            <span
              class="form__error text-red-500 block text-lg font-medium mt-2"
              >{{ errorsSocial.title }}</span
            >
            <input
              class="social__input bg-white text-black text-lg font-medium w-full"
              type="url"
              placeholder="url link..."
              v-model="input.value"
              @input="
                (e) => {
                  handleValidateSocialLink(
                    input.id,
                    (e.target as HTMLInputElement).value,
                  );
                }
              "
              @blur="
                (e) => {
                  const value = formatRealUrl(e);
                  input.value = value;
                }
              "
            />
            <span
              class="form__error text-red-500 block text-lg font-medium mt-2"
              v-if="errorsSocial.url && input.id === errorsSocial.id"
              >{{ errorsSocial.url }}</span
            >
          </div>

          <div
            class="btn__new-social text-blue-royal font-bold text-lg mt-2"
            @click="
              socialInputs.push({
                id: Math.floor(Math.random() * 10000),
                value: '',
                title: optionListSocialPlatform[0].title,
              })
            "
          >
            + Add social +
          </div>
        </div>

        <!-- **** Project Technologies **** -->
        <div class="form__group" v-if="typeCategory === ETypeCategory.Web">
          <label class="form__label text-xl font-bold">Technologies</label>
          <div class="technology__value">
            <div
              class="technology__value--item"
              v-for="(item, i) in technologies"
              :key="i"
            >
              {{ item }}
              <div
                class="btn__remove"
                @click.stop="
                  () => handleRemoveTechnology({ id: i, title: item })
                "
              >
                x
              </div>
            </div>
          </div>
          <div
            class="form__group--input position-relative"
            @click.stop="openTechnologyList = true"
          >
            <input
              type="text"
              :value="searchTechValue"
              class="form__input w-full"
              placeholder="Search technology and hit enter to add if not see"
              @input="
                (e: Event) => {
                  let value = (e.target as HTMLInputElement).value;
                  handleSearchTech(value);
                }
              "
              @keyup.enter="
                (e: Event) => {
                  const value = (e.target as HTMLInputElement).value;
                  if (value.length <= 0) return;
                  handleAddTechnology(value);
                }
              "
            />
            <div
              class="technology__list position-absolute top-full w-full overflow-auto shadow-md bg-white"
              :class="openTechnologyList ? 'h-52 opacity-100' : 'h-0 opacity-0'"
            >
              <div
                class="technology__item hover:bg-blue-300 hover:text-white rounded"
                v-for="tech in technologiesData.filter((item) =>
                  item.title
                    .toLowerCase()
                    .includes(searchTechValue.toLowerCase()),
                )"
                :key="tech.id"
                @click.stop="
                  () => {
                    openTechnologyList = true;
                    handleAddTechnology(tech.title);
                  }
                "
              >
                {{ tech.title }}
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="btn__submit text-lg font-bold"
          @click="handleCreateProject"
        >
          Create
        </button>
      </div>

      <div
        :class="values.image ? 'show w-3/5' : 'w-0'"
        class="project__preview-wrapper w-3/5 flex items-center justify-center bg-blue-royal"
      >
        <div
          class="project__preview flex items-center justify-between bg-white flex-col w-1/2 h-fit position-relative border-2 border-solid border-black"
        >
          <div class="size-full">
            <div
              class="project__image w-full aspect-square"
              v-if="projectImagePreview"
            >
              <img
                :src="projectImagePreview"
                alt="project-image"
                class="size-full object-cover"
              />
            </div>
            <div class="project__info">
              <div
                class="project__info-category 2xl:text-sm xl:text-sm lg:text-sm md:text-xs text-xs w-fit font-bold"
                v-if="categories.length > 0"
              >
                {{
                  categories.filter((item) => item.id === categoryId)[0]?.type
                }}
              </div>
              <h1
                class="project__title 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl text-xs font-extrabold"
              >
                {{ title }}
              </h1>
              <p class="project__description">
                {{ description }}
              </p>
              <ul
                class="project__tech-list flex align-items justify-start flex-wrap 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-2 gap-2"
                v-if="technologies?.length > 0"
              >
                <li
                  class="project__tech-item w-fit 2xl:text-sm xl:text-sm lg:text-sm md:text-xs font-medium text-left break-all block transition-all"
                  v-for="(tech, i) in technologies"
                  :key="i"
                >
                  {{ tech }}
                </li>
              </ul>

              <ul
                class="project__social-list flex align-items justify-start flex-wrap 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-2 gap-2"
                v-if="socialInputs?.length > 0"
              >
                <li
                  class="project__social-item w-fit 2xl:text-sm xl:text-sm lg:text-sm md:text-xs font-medium text-center whitespace-nowrap block transition-all"
                  v-for="(social, i) in socialInputs"
                  :class="
                    social.value && social.id === errorsSocial.id ? 'error' : ''
                  "
                  :key="i"
                >
                  <nuxt-link
                    :to="social.value"
                    target="_blank"
                    v-if="social.value && social.id !== errorsSocial.id"
                    >{{ social.title }}</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ETypeCategory } from "~/store/interfaces";
import useFormNewProject from "./composable";
const {
  title,
  titleProps,
  description,
  descriptionProps,
  categoryId,
  categoryIdProps,
  categories,
  errors,
  values,
  projectImagePreview,
  optionListSocialPlatform,
  technologies,
  technologiesProps,
  socialInputs,
  errorsSocial,
  typeCategory,
  technologiesData,
  searchTechValue,
  openTechnologyList,
  handleRemoveTechnology,
  handleAddTechnology,
  handleSearchTech,
  handleCreateProject,
  handleValidateSocialLink,
  handleChangeImage,
} = useFormNewProject();
</script>

<style scoped>
@import "./formNewProject.scss";
</style>
