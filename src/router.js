import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NumMemory from './views/NumMemory.vue';
import More from './views/More.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/num-memory',
      name: 'num-memory',
      component: NumMemory,
    },
    {
      path: '/more',
      name: 'more',
      component: More,
    },
  ],
});
