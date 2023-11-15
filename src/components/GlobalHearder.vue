<template>
  <div id="gobalHeader">
    <a-row class="grid-demo" align="center" :wrap="false">
      <a-col :span="20">
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          :default-selected-keys="['1']"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div
              :style="{
                width: '80px',
                height: '30px',
                borderRadius: '2px',
                background: 'var(--color-fill-3)',
                cursor: 'text',
              }"
            />
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoute" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :span="4">
        <a-dropdown position="bl" :popup-visible="popupVisible">
          <a-avatar :size="32" @click="open">
            <img
              alt="avatar"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            />
          </a-avatar>
          <a-button type="text" @click="open">
            {{ store.state.user?.loginUser.userName }}
          </a-button>
          <template #content>
            <a-doption><a-link href="link" icon>个人信息</a-link></a-doption>
            <a-doption><a-link href="link" icon>退出登录</a-link></a-doption>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/routers";
import { Message } from "@arco-design/web-vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import checkAccess from "../access/checkAccess";

const router = useRouter();
// 默认主页
const selectedKeys = ref(["/"]);

const store = useStore();

const popupVisible = ref(false);

// 隐藏不可见路由
const visibleRoute = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    // 权限不够
    if (
      !checkAccess(store.state.user?.loginUser, item.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "焦久宁",
    userRole: "admin",
  });
}, 3000);

// 路由跳转后，更新菜单高亮
router.afterEach((to) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

const open = () => {
  popupVisible.value = !popupVisible.value;
  store.dispatch("user/getLoginUser", {
    userName: "焦久宁",
  });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
