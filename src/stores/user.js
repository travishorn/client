import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  state: () => {
    return {
      isSignedIn: false,
    };
  },
  actions: {
    async signIn(emailAddress, password) {
      this.isSignedIn = true;
      return true;
    },
    async signOut() {
      this.isSignedIn = false;
      return true;
    },
  },
});
