/* eslint-disable no-shadow */
import works from '../../data/works';

const state = {
  selectedWork: {},
  isShowing: false,
  selectedId: '',
  worksLength: works.length,
  showScrollIcon: true,
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
  HIDE_SCROLL_ICON(state) {
    state.showScrollIcon = false;
  },
  SHOW_SCROLL_ICON(state) {
    state.showScrollIcon = true;
  },
};

const actions = {
  selectWork: ({ commit }, id) => {
    console.log('select');
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
  hideScrollIcon: ({ commit }) => {
    commit('HIDE_SCROLL_ICON');
    setTimeout(() => {
      commit('SHOW_SCROLL_ICON');
    }, 1500);
  },
};

const getters = {
  selectedWork: state => state.selectedWork,
  workNames: () => works.map(({ name }) => name),
  isShowing: state => state.isShowing,
  selectedId: state => state.selectedId,
  worksLength: state => state.worksLength,
  showScrollIcon: state => state.showScrollIcon,
  thumbnails: () => works.map(({ mainImage, color }) => ({ mainImage, color })),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
