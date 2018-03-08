import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/home/Home';
import About from '../components/about/About';
import Works from '../components/works/Works';
import Detail from '../components/detail/Detail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/works',
      component: Works,
      children: [
        {
          path: ':id',
          name: 'detail',
          component: Detail,
          // props: true,
        },
        {
          path: 'change/:id',
          name: 'changeDetail',
          component: Detail,
          // props: true,
        },
      ],
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
