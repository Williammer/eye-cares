import Vue from 'vue';
import vueBeauty from 'vue-beauty';
import 'vue-beauty/package/style/vue-beauty.min.css';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(vueBeauty);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
