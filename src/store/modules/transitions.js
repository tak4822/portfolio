/* eslint-disable no-shadow */

const state = {
  homeLeaving: false,
};

const mutations = {
  START_LEAVING(state) {
    console.log('leaving');
    state.homeLeaving = true;
  },
  END_LEAVING(state) {
    state.homeLeaving = false;
  },
};

const actions = {
  leaveHome({ commit }) {
    commit('START_LEAVING');
    setTimeout(() => {
      commit('END_LEAVING');
    }, 2000);
  },
};

const getters = {
  isLeaving: state => state.homeLeaving,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
