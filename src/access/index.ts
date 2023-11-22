// import router from "@/router";
// import ACCESS_ENUM from "./accessEnum";
// import store from "@/store";

// router.beforeEach(async (to, from, next) => {
//   //   if (to.meta?.access === ACCESS_ENUM.ADMIN) {
//   //     if (store.state.user?.loginUser?.userRole !== ACCESS_ENUM.ADMIN) {
//   //       next("/noAuth");
//   //       return;
//   //     }
//   //   }
//   //   next();

//   console.log("当前用户：", store.state.user.loginUser);
//   const loginUser = store.state.user.loginUser;
//   // 如果之前登录过，直接登录
//   if (!loginUser || !loginUser.userRole) {
//     await store.dispatch("user/getLoginUser");
//   }
//   next();
// });
