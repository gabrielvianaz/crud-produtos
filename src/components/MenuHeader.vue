<template>
  <div>
    <b-nav tabs align="center">
      <b-nav-item to="/" id="HomePage" @click="alterarComponente"
        >Home</b-nav-item
      >
      <b-nav-item
        to="/cadastrar"
        id="CadastrarProduto"
        @click="alterarComponente"
        >Cadastrar Produtos</b-nav-item
      >
      <b-nav-item
        to="/visualizar"
        id="VisualizarProdutos"
        @click="alterarComponente"
        >Visualizar Produtos</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'MenuHeader.vue',
  methods: {
    alterarComponente() {
      this.$emit('evento-menu', event.path[1].id);
    },
  },
};
</script>

<style>
.nav .nav-link {
  color: black;
}
.nav .nav-link:hover {
  color: gray;
}
</style>
