import { createWebHistory, createRouter } from "vue-router";
import About from "@/views/About.vue";
import DesignPrinciples from "@/views/DesignPrinciples.vue";
import ToneOfVoice from "@/views/ToneOfVoice.vue";
import Logo from "@/views/Logo.vue";
import ColorPalette from "@/views/ColorPalette.vue";
import Typography from "@/views/Typography.vue";
import Imagery from "@/views/Imagery.vue";
import ApplicationExamples from "@/views/ApplicationExamples.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/design-principles",
    name: "DesignPrinciples",
    component: DesignPrinciples,
  },
  {
    path: "/tone-of-voice",
    name: "ToneOfVoice",
    component: ToneOfVoice,
  },
  {
    path: "/logo",
    name: "Logo",
    component: Logo,
  },
  {
    path: "/color-palette",
    name: "ColorPalette",
    component: ColorPalette,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/imagery",
    name: "Imagery",
    component: Imagery,
  },
  {
    path: "/application-examples",
    name: "ApplicationExamples",
    component: ApplicationExamples,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
