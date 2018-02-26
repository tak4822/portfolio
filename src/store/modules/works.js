/* eslint-disable no-shadow */
import works from '../../data/works';

const state = {
  selectedWork: {},
  isShowing: false,
};

const mutations = {
  SELECT_WORK(state, work) {
    state.selectedWork = work;
  },
  START_ANIMATION(state) {
    state.isShowing = true;
  },
  END_ANIMATION(state) {
    state.isShowing = false;
  },
};

const actions = {
  selectWork: ({ commit }, id) => {
    commit('START_ANIMATION');
    commit('SELECT_WORK', works[id]);
    setTimeout(() => {
      commit('END_ANIMATION');
    }, 1300);
  },
};

const getters = {
  selectedWork: state => state.selectedWork,
  workNames: () => works.map(({ name }) => name),
  isShowing: state => state.isShowing,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
