/* eslint-disable no-shadow */

const state = {
  preloading: true,
  enter: false,
  homeLeaving: false,
  toDetail: false,
  changeDetail: false,
};

const mutations = {
  START_LEAVING(state) {
    state.homeLeaving = true;
  },
  END_LEAVING(state) {
    state.homeLeaving = false;
  },
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
  leaveHome({ commit }) {
    commit('START_LEAVING');
    setTimeout(() => {
      commit('END_LEAVING');
    }, 2000);
  },
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
  isLeaving: state => state.homeLeaving,
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
