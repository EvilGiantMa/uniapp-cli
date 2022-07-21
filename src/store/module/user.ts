import { Module } from "vuex"
import { RootState, UserState } from "../interfaces"

const user: Module<UserState, RootState> = {
  namespaced: true,
  state: () => ({
    info: '123',
  }),
  getters: {
    info(state) {
      return state.info
    },
  },
  mutations: {
    SET_INFO(state, res) {
      state.info = res
    },
  },
  actions: {
    dispatchInfo({ commit }, res) {
      commit('SET_INFO', res)
    }
  },
};

export default user