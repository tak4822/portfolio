import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/home/Home';
import About from '../components/about/About';
import Works from '../components/works/Works';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/works', component: Works },
  ],
});
