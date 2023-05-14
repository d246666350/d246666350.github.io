import { createRouter, createWebHashHistory } from "vue-router";

import { routerMap } from "@/config";
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routerMap,
});
