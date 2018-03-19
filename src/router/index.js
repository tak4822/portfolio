import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../components/home/Home');
const Mobile = () => import('../components/mobile/Mobile');
const About = () => import('../components/about/About');
const Works = () => import('../components/works/Works');
const Detail = () => import('../components/detail/Detail');
const mobileDetail = () => import('../components/mobile/Detail');
const Resize = () => import('../components/shared/Resize');

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
      path: '/mobile',
      component: Mobile,
    },
    {
      path: '/m/detail/:id',
      name: 'mobileDetail',
      component: mobileDetail,
    },
    {
      path: '/m/detail/change/:id',
      name: 'mobileDetailChange',
      component: mobileDetail,
    },
    {
      path: '/resize',
      component: Resize,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
