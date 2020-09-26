import Vue from 'vue'
import Vuex from 'vuex'
import cookie from "@/utils/cookie"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: "泸州",
    // 是否登录
    isLogin: !!cookie.get("user"),
    // filterSection
    filterObj: {},
    ddActive: {}
  },
  mutations: {
    changeCity (state, payload) {
      state.position = payload;
    },
    login (state) {
      state.isLogin = true;
    },
    logout (state) {
      state.isLogin = false;
    },
    // filterSection
    addFilter (state, { filterName, rowFlag, ddIndex, liFlag }) {
      Vue.set(state.ddActive, rowFlag, { ddIndex, liFlag, filterName });
      if (state.filterObj[rowFlag] !== filterName) {
        Vue.set(state.filterObj, rowFlag, filterName);
      }
    },
    delFilter (state, rowFlag) {
      Vue.delete(state.filterObj, rowFlag);
      Vue.delete(state.ddActive, rowFlag);
    },
    delAllFilter (state) {
      for (const key in state.filterObj) {
        if (Object.prototype.hasOwnProperty.call(state.filterObj, key)) {
          Vue.delete(state.filterObj, key)
          Vue.delete(state.ddActive, key)
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
