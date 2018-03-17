/* eslint-disable no-shadow */

const state = {
  preloading: true,
  enter: false,
  toDetail: false,
  changeDetail: false,
};

const mutations = {
  TO_DETAIL(state) {
    state.toDetail = true;
  },
  RESET_TO_DETAIL(state) {
    state.toDetail = false;
  },
  CHANGE_DETAIL(state) {
    state.changeDetail = true;
    setTimeout(() => {
      state.changeDetail = false;
    }, 3500);
  },
  FINISH_PRELOADING(state) {
    state.preloading = false;
  },
  ENTER_PAGE(state) {
    state.enter = true;
  },
};

const actions = {
  toDetail({ commit }) {
    commit('TO_DETAIL');
  },
  resetToDetail({ commit }) {
    commit('RESET_TO_DETAIL');
  },
  changeDetail({ commit }) {
    commit('CHANGE_DETAIL');
  },
  finishPreloading({ commit }) {
    commit('FINISH_PRELOADING');
    setTimeout(() => {
      commit('ENTER_PAGE');
    }, 500);
  },
};

const getters = {
  toDetail: state => state.toDetail,
  changeDetail: state => state.changeDetail,
  preloading: state => state.preloading,
  enter: state => state.enter,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
