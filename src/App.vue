<template>
  <div id="app">
    <MenuHeader @evento-menu="alterarComponente"></MenuHeader>
    <div class="container">
      <component
        class="animate__animated animate__fadeIn mt-2"
        :is="componenteAtivo"
        @evento-cadastrar="cadastrarProduto"
        @evento-alterar="alterarProduto"
        @evento-excluir="excluirProduto"
      ></component>
    </div>
  </div>
</template>

<script>
import CadastrarProduto from './views/CadastrarProduto.vue';
import VisualizarProdutos from './views/VisualizarProdutos.vue';
import MenuHeader from './components/MenuHeader.vue';
import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  data() {
    return {
      produtos: [],
      componenteAtivo: 'HomePage',
    };
  },
  methods: {
    alterarComponente(componente) {
      this.componenteAtivo = componente;
    },
    cadastrarProduto(dados) {
      this.produtos.push(dados);
      localStorage.produtos = JSON.stringify(this.produtos);
    },
    alterarProduto(dados) {
      this.produtos.forEach((produto) => {
        if (produto.id === dados.id) {
          produto.nome = dados.nome;
          produto.preco = dados.preco;
        }
        localStorage.produtos = JSON.stringify(this.produtos);
      });
    },
    excluirProduto(id) {
      this.produtos.forEach((produto, index) => {
        if (produto.id === id) {
          this.produtos.splice(index, 1);
          if (this.produtos.length === 0) localStorage.id = 0;
        }
        localStorage.produtos = JSON.stringify(this.produtos);
      });
    },
  },
  created() {
    if (localStorage.produtos) {
      JSON.parse(localStorage.produtos).forEach((produto) =>
        this.produtos.push(produto)
      );
    }
  },
  components: {
    MenuHeader,
    CadastrarProduto,
    VisualizarProdutos,
    HomePage,
  },
};
</script>

<style></style>
