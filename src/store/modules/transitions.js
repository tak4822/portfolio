/* eslint-disable no-shadow */

const state = {
  homeLeaving: false,
  toDetail: false,
};

const mutations = {
  START_LEAVING(state) {
    console.log('leaving');
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
};

const getters = {
  isLeaving: state => state.homeLeaving,
  toDetail: state => state.toDetail,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
