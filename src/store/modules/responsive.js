/* eslint-disable no-shadow */
const state = {
  desktop: true,
};

const mutations = {
  CHANGE_SIZE(state) {
    state.desktop = window.innerWidth > 1024;
  },
};

const actions = {
  handleWindowResize({ commit }) {
    commit('CHANGE_SIZE');
  },
};

const getters = {
  desktop: state => state.desktop,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
