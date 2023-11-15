<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style></style>

<script lang="ts" setup>
// import BasicLayout from "./layout/BasciLayout.vue";
import BasicLayout from "@/layout/BasicLayout.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ACCESS_ENUM from "./access/accessEnum";

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  if (to.meta?.access === ACCESS_ENUM.ADMIN) {
    if (store.state.user?.loginUser?.userRole !== ACCESS_ENUM.ADMIN) {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
