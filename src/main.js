// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import './assets/scss/index.scss';
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productionTip = true;

router.beforeEach((to, from, next) => {
  if (to.name === 'changeDetail') {
    setTimeout(() => {
      next();
    }, 1500);
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>',
});
