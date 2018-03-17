import Vue from 'vue';
import Router from 'vue-router';

const Responsive = () => import('../components/shared/Responsive');
const Home = () => import('../components/home/Home');
const About = () => import('../components/about/About');
const Works = () => import('../components/works/Works');
const Detail = () => import('../components/detail/Detail');
const mobileDetail = () => import('../components/mobile/Detail');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Responsive },
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
    {
      path: '/m/detail/:id',
      name: 'mobileDetail',
      component: mobileDetail,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
