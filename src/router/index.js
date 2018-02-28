import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/home/Home';
import About from '../components/about/About';
import Works from '../components/works/Works';
import Triangle from '../components/home/Triangle';
// import test from '../components/works/test';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/works', component: Works },
    { path: '/test', component: Triangle },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
