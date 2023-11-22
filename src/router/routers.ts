import ACCESS_ENUM from "@/access/accessEnum";
import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NoAuth from "../views/NoAuth.vue";
import UserLayout from "../layout/UserLayout.vue";
import UserLogin from "../views/user/UserLogin.vue";
import UserRegister from "../views/user/UserRegister.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "user",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "登录",
        component: UserLogin,
        meta: {
          access: ACCESS_ENUM.NOT_LOGIN,
        },
      },
      {
        path: "/user/register",
        name: "注册",
        component: UserRegister,
        meta: {
          access: ACCESS_ENUM.NOT_LOGIN,
        },
      },
    ],
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      access: ACCESS_ENUM.NOT_LOGIN,
    },
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
