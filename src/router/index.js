import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Plumbing from "@/pages/Plumbing.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/plumbing",
      name: "plumbing",
      component: Plumbing,
    },
  ],
});

export default router;
