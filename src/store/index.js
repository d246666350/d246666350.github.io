import { createStore } from "vuex";

export default createStore({
  state: {
    argumObj: {
      gdLbs: "高德 GPS 定位",
      long: "",
      lati: "",
      userType: 1,
    },
    userData: {
      id: "",
      name: "",
    },
    /**
     * @normal 常规版 true
     * @elder 老年版 false
     *
     */
    remUnit: true,
    debug: false,
  },
  mutations: {
    changeRemUnit(state, data) {
      state.remUnit = data;
    },
    updateUserInfos(state, data) {
      state.argumObj = data;
    },
    updateUserData(state, data) {
      state.userData = data;
    },
    setProjTest(state, data) {
      state.debug = data;
    },
  },
});
