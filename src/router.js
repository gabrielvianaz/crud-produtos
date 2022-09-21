import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage.vue';
import CadastrarProduto from './views/CadastrarProduto.vue';
import VisualizarProdutos from './views/VisualizarProdutos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/cadastrar',
      component: CadastrarProduto,
    },
    {
      path: '/visualizar',
      component: VisualizarProdutos,
    },
  ],
});
