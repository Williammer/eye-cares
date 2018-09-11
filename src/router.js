import Vue from 'vue';
import Router from 'vue-router';
import NumMemoryGame from './features/numMemory/NumMemoryGame.vue';
import More from './features/more/More.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Number Memory Game',
      component: NumMemoryGame,
    },
    {
      path: '/more',
      name: 'More',
      component: More,
    },
  ],
});
