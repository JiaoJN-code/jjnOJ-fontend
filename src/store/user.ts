import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: "user",
    },
  }),
  actions: {
    getLoginUser({ commit }, payload) {
      commit("updatedUser", payload);
    },
  },
  mutations: {
    updatedUser(state, payload: API.loginUser) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
