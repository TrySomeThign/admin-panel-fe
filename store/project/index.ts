import type { FetchError } from "ofetch";
import {
  ETypeCategory,
  type ICategoryProject,
  type IProject,
} from "../interfaces";
import type { IFilterGetAllProjects } from "./../interfaces";

interface State {
  projects: IProject[];
  project: IProject | null;
  page: number;
  totalPage: number;
  categories: ICategoryProject[];
}

export const useProjectStore = defineStore("project", {
  state: (): State => ({
    project: null,
    projects: [],
    page: 0,
    totalPage: 0,
    categories: [],
  }),
  actions: {
    async getAllProjects(filter: IFilterGetAllProjects) {
      try {
        const {
          data,
        }: { data: { projects: IProject[]; page: number; totalPage: number } } =
          await $fetch(`/projects`, {
            method: "GET",
            query: {
              limit: filter.limit,
              page: filter.page,
              categoryId: filter.categoryId,
            },
          });
        this.projects = data.projects;
        this.page = data.page;
        this.totalPage = data.totalPage;
      } catch (error) {
        const err = error as FetchError;
        throw err.response?._data;
      }
    },

    async getAllCategories() {
      try {
        const { data }: { data: ICategoryProject[] } = await $fetch(
          `/project-categories`,
          { method: "GET" },
        );
        this.categories = data;
        return data;
      } catch (error) {
        const err = error as FetchError;
        throw err.response?._data;
      }
    },
  },
  getters: {
    getCategoryForWebType(): ICategoryProject {
      const data = this.categories.filter(
        (item) => item.type === ETypeCategory.Web,
      )[0];
      return data;
    },
  },
});
