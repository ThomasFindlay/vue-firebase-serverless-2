import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Log from '@/components/Log';

import { registerBaseComponents } from '@/utils';
registerBaseComponents();

Vue.config.productionTip = false;
const IS_DEV = process.env.NODE_ENV === 'development';

if (IS_DEV) {
  window.debug = msg => {
    console.log(`%c DEBUG: `, 'background: #222; color: #bada55', msg);
  };
  Vue.component('Log', Log);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
