import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../../Orbitas/views/Orbitas';
import NewTask from '../../Orbitas/views/NewTask/index.vue';
import Showcase from '../../Showcase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      header: require('../../Orbitas/views/global/Header').default,
      left: require('../../Orbitas/views/global/Left').default,
      tools: require('../../Orbitas/views/global/Tools').default,
    },
    meta: {
      public: false,
      onlyNotAuthorized: false,
    },
  },
  {
    path: '/new-task',
    name: 'NewTask',
    components: {
      default: NewTask,
      header: require('../../Orbitas/views/global/Header').default,
      left: require('../../Orbitas/views/global/Left').default,
      tools: require('../../Orbitas/views/global/Tools').default,
    },
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
    component: require('../../Orbitas/pages/login').default,
    meta: {
      public: true,
      onlyNotAuthorized: true,
    },
  },
  {
    name: 'terms',
    path: '/terms-of-conditions',
    component: require('../../Orbitas/pages/terms').default,
    meta: {
      public: true,
      onlyNotAuthorized: true,
    },
  },
  {
    name: 'signup',
    path: '/signup',
    component: require('../../Orbitas/pages/signup').default,
    meta: {
      public: true,
      onlyNotAuthorized: true,
    },
  },
  {
    name: 'recover',
    path: '/recover',
    component: require('../../Orbitas/pages/recover').default,
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
