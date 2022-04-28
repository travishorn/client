import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import SignIn from "./pages/SignIn.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/sign-in",
      component: SignIn,
    },
  ],
});
