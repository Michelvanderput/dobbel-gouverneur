// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import StartScherm from "@/views/StartScherm.vue";
import BierCategorieën from "@/views/BierCategory.vue";
import BierenOverzicht from "@/views/BierenOverzicht.vue";

const routes = [
  { path: "/", name: "StartScherm", component: StartScherm },
  {
    path: "/biercategorieen",
    name: "BierCategorieën",
    component: BierCategorieën,
  },
  {
    path: "/bieren/:categorie",
    name: "BierenOverzicht",
    component: BierenOverzicht,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
