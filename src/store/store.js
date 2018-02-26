import Vue from 'vue';
import Vuex from 'vuex';

import works from './modules/works';
import transitions from './modules/transitions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    works,
    transitions,
  },
});
