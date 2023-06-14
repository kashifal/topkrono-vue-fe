import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Plumbing from "@/pages/Plumbing.vue";
import Electrical from "@/pages/Electrical.vue";
import Bathroom from "@/pages/Bathroom.vue";
import PlumbingIndex from "@/pages/PlumbingIndex.vue";
import NewPage from "@/pages/NewPage.vue";
import Electricalmode from "@/pages/Electricmode.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Appliance from "@/pages/Appliance.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/plumbing",
      name: "plumbing",
      component: HomePage,
    },
    {
      path: "/appliance",
      name: "appliance",
      component: Appliance,
    },
    {
      path: "/",
      name: "home",
      component: Dashboard,
    },

    {
      path: "/plumbin",
      name: "plumbin",
      component: PlumbingIndex,
    },
   
    {
      path: "/electrical",
      name: "electrical",
      component: Electricalmode,
    },
  ],
});

export default router;
