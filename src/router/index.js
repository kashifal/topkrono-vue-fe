import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Plumbing from "@/pages/Plumbing.vue";
import Electrical from "@/pages/ELectrical.vue";
import Bathroom from "@/pages/Bathroom.vue";

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
    {
      path: "/electrical",
      name: "electrical",
      component: Electrical,
    },
    {
      path: "/bathroom",
      name: "bathroom",
      component: Bathroom,
    },
  ],
});

export default router;
