import { defineStore } from "pinia";

const userStore = defineStore("user", {
  state: () => ({}),
  getters: {},
  actions: {},
  persist: {
    key: "user",
    storage: sessionStorage,
    pick: undefined,
    omit: undefined,
    beforeHydrate: (ctx) => {
      console.log(ctx);
    },
    afterHydrate: (ctx) => {
      console.log(ctx);
    }
  }
});

export default userStore;
