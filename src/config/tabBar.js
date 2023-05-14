import { TabBarLayout, OrdinaryLayout } from "@/layouts";

export const tabBarRouterMap = [
  {
    path: "/",
    redirect: "/lod",
    component: TabBarLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/home"),
        meta: {
          title: "首页",
          active: require("@/assets/tabBar/home_a.png"),
          inactive: require("@/assets/tabBar/home_in.png"),
        },
      },
      {
        path: "/subscribe",
        name: "subscribe",
        component: () => import("@/views/subscribe/subscribe"),
        meta: {
          title: "预约专家",
          active: require("@/assets/tabBar/subscribe_a.png"),
          inactive: require("@/assets/tabBar/subscribe_in.png"),
        },
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user/user"),
        meta: {
          title: "我的",
          active: require("@/assets/tabBar/user_a.png"),
          inactive: require("@/assets/tabBar/user_in.png"),
        },
      },
    ],
  },
];
