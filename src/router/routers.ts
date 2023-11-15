import ACCESS_ENUM from "@/access/accessEnum";
import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NoAuth from "../views/NoAuth.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home2",
    component: HomeView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/noAuth",
    name: "noAuth",
    component: NoAuth,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      // 仅管理员进入
      access: "canAdmin",
    },
  },
];
