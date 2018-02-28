/* eslint-disable no-shadow */
import works from '../../data/works';

const state = {
  selectedWork: {},
  isShowing: false,
  selectedId: '',
};

const mutations = {
  SELECT_ID(state, id) {
    state.selectedId = id;
  },
  SELECT_WORK(state, work) {
    state.selectedWork = work;
  },
  START_ANIMATION(state) {
    state.isShowing = true;
  },
  END_ANIMATION(state) {
    state.isShowing = false;
  },
  RESET_WORK(state) {
    state.selectedWork = {};
    state.selectedId = '';
  },
};

const actions = {
  selectWork: ({ commit }, id) => {
    commit('SELECT_ID', id);
    commit('START_ANIMATION');
    commit('SELECT_WORK', works[id]);
    setTimeout(() => {
      commit('END_ANIMATION');
    }, 1300);
  },
  resetWork: ({ commit }) => {
    commit('RESET_WORK');
  },
};

const getters = {
  selectedWork: state => state.selectedWork,
  workNames: () => works.map(({ name }) => name),
  isShowing: state => state.isShowing,
  selectedId: state => state.selectedId,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
