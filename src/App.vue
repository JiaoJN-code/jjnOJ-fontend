<template>
  <div id="app">
    <template v-if="$route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style></style>

<script lang="ts" setup>
// import BasicLayout from "./layout/BasciLayout.vue";
import BasicLayout from "@/layout/BasicLayout.vue";
import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "./access/accessEnum";
import checkAccess from "./access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("当前用户：", store.state.user.loginUser);
  // if (to.meta?.access === ACCESS_ENUM.ADMIN) {
  //   if (store.state.user?.loginUser?.userRole !== ACCESS_ENUM.ADMIN) {
  //     next("/noAuth");
  //     return;
  //   }
  // }
  const loginUser = store.state.user.loginUser;
  // 如果之前没有登录，自动登录
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
  }

  // 登录之后，是否有权限访问页面
  const needAcces = to.meta?.access ?? ACCESS_ENUM.NOT_LOGIN;
  // 要跳转的页面需要登录
  if (needAcces !== ACCESS_ENUM.NOT_LOGIN) {
    // 如果没有登录，跳转登录页面
    if (loginUser.userRole === ACCESS_ENUM.NOT_LOGIN) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 如果登录，查看权限是否满足
    if (!checkAccess(loginUser.userRole, needAcces as string)) {
      // 无权限，跳转无权限页面
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
