import { createWebHistory, createRouter } from "vue-router";
import Typography from "@/views/Typography.vue";
import Assets from "@/views/Assets.vue";

const routes = [
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/assets",
    name: "Assets",
    component: Assets,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
