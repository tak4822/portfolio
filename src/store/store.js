import Vue from 'vue';
import Vuex from 'vuex';

import works from './modules/works';
// import transition from './modules/transitions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    works,
  },
});
