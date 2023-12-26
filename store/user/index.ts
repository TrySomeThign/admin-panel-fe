import type { IPayloadEditProfile } from "./../interfaces/user.interface";
import type { IUser } from "../interfaces";

interface State {
  user: IUser | null;
}

export const useUserStore = defineStore("user", {
  state: (): State => ({
    user: null,
  }),
  actions: {
    async updateProfile(id: string, payload: IPayloadEditProfile) {
      try {
        const { data }: { data: { message: string } } = await $fetch(
          `/users/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(payload),
          }
        );
        return data;
      } catch (error: any) {
        throw error.response._data;
      }
    },

    async uploadFile(id: string, file: FormData) {
      try {
        const { data }: { data: { url: string } } = await $fetch(
          `/users/upload/${id}`,
          {
            method: "POST",
            body: file,
          }
        );
        return data.url;
      } catch (error: any) {
        throw error.response._data;
      }
    },
  },
});
