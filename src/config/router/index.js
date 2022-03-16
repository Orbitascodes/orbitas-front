import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../../views/Home.vue';
import Showcase from '../../Showcase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      public: false,
      onlyNotAuthorized: false,
    },
  },
  {
    path: '/showcase',
    name: 'showcase',
    component: Showcase,
  },
  {
    name: 'login',
    path: '/login',
    // component: Login,
    component: require('../../views/pages/login').default,
    meta: {
      public: true,
      onlyNotAuthorized: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
