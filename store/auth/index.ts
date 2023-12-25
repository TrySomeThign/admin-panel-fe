import type { IPayloadSignIn } from "./../interfaces";
import type { IUser } from "../interfaces/user.interface";

interface State {
  user: IUser | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): State => ({
    user: null,
  }),
  actions: {
    async signIn(payload: IPayloadSignIn) {
      try {
        const { data }: { data: { user: IUser } } = await $fetch(
          `/auth/sign-in`,
          {
            method: "POST",
            body: JSON.stringify(payload),
          }
        );

        localStorage.setItem("token", data.user.token);
        this.user = data.user;
      } catch (error: any) {
        throw error.response._data;
      }
    },

    async getCurrentUser() {
      try {
        const token = localStorage.getItem("token");
        const { data }: { data: { user: IUser } } = await $fetch(
          `/auth/get-user`,
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        this.user = data.user;
      } catch (error: any) {
        throw error.response._data;
      }
    },
  },
});
