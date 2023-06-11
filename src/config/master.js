import { OrdinaryLayout } from "@/layouts";
export const masterRouterMap = [
  {
    path: "/",
    redirect: "/lod",
    component: OrdinaryLayout,
    children: [
      {
        path: "/lod",
        name: "lod",
        component: () => import("@/views/lod/lod"),
        meta: {
          title: "登录"
        },
      },
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/home"),
        meta: {
          title: "寻遇之旅",
          active: require("@/assets/tabBar/home_a.png"),
          inactive: require("@/assets/tabBar/home_in.png"),
        },
      }
    ],
  },
];
