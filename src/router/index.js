import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Plumbing from "@/pages/Plumbing.vue";
import Electrical from "@/pages/Electrical.vue";
import Bathroom from "@/pages/Bathroom.vue";
import PlumbingIndex from "@/pages/PlumbingIndex.vue";
import NewPage from "@/pages/NewPage.vue";
import Electricalmode from "@/pages/Electricmode.vue";
import Dashboard from "@/pages/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard,
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
    {
      path: "/plumbin",
      name: "plumbin",
      component: PlumbingIndex,
    },
    {
      path: "/new",
      name: "newpage",
      component: NewPage,
    },
    {
      path: "/electricmode",
      name: "electricmode",
      component: Electricalmode,
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
  ],
});

export default router;
