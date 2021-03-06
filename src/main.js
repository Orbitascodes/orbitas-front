import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './config/router';
import store from './config/store';
import vuetify from './plugins/vuetify';
import './assets/scss/main.scss';
import './components';
import './assets/svg';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
