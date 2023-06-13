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
      path: "/plumbing",
      name: "plumbing",
      component: HomePage,
    },
    {
      path: "/",
      name: "",
      component: Plumbing,
    },
    {
      path: "/electricalmode",
      name: "electricalmode",
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
      path: "/electrical",
      name: "electrical",
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
