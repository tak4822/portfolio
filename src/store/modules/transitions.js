/* eslint-disable no-shadow */

const state = {
  preloading: true,
  enter: false,
  toDetail: false,
  changeDetail: false,
  mobileTransition: false,
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
  MOBILE_TRANSITION(state) {
    state.mobileTransition = true;
    setTimeout(() => {
      state.mobileTransition = false;
    }, 2000);
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
    setTimeout(() => { // for delete transition of pre loading
      commit('ENTER_PAGE');
    }, 500);
  },
  mobileTransition({ commit }) {
    commit('MOBILE_TRANSITION');
  },
};

const getters = {
  toDetail: state => state.toDetail,
  changeDetail: state => state.changeDetail,
  preloading: state => state.preloading,
  enter: state => state.enter,
  mobileTransition: state => state.mobileTransition,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
