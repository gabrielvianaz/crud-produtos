<template>
  <div>
    <h1 class="text-center">Visualizar Produtos</h1>
    <AlertMessage
      class="mt-2"
      v-if="alterarAlertSuccess"
      :type="'alert-success'"
      :text="'Alteração efetuada com sucesso'"
    ></AlertMessage>
    <AlertMessage
      class="mt-2"
      v-if="alterarAlertError"
      :type="'alert-danger'"
      :text="'Alteração não efetuada. Preencha todas as informações'"
    ></AlertMessage>
    <AlertMessage
      class="mt-2"
      v-if="excluirAlertSuccess"
      :type="'alert-danger'"
      :text="'Exclusão efetuada com sucesso'"
    ></AlertMessage>
    <table class="table table-bordered">
      <thead>
        <tr class="text-center">
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="produto in this.$parent.produtos" :key="produto.id">
          <th scope="row">{{ produto.id }}</th>
          <td>{{ produto.nome }}</td>
          <td>
            {{
              Number(produto.preco).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            }}
          </td>
          <td>
            <button class="btn btn-outline-primary" @click="modalAlterar">
              Alterar
            </button>
            <button class="btn btn-outline-danger mx-2" @click="modalExcluir">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalAlterarProduto
      class="animate__animated animate__fadeIn"
      v-if="exibirModalAlterar"
      @fechar-modal="fecharModalAlterar"
      @alterar-produto="alterarProduto"
    ></ModalAlterarProduto>
    <ModalExcluirProduto
      class="animate__animated animate__fadeIn"
      v-if="exibirModalExcluir"
      @fechar-modal="fecharModalExcluir"
      @excluir-produto="excluirProduto"
    ></ModalExcluirProduto>
  </div>
</template>

<script>
import ModalAlterarProduto from '../components/ModalAlterarProduto.vue';
import ModalExcluirProduto from '../components/ModalExcluirProduto.vue';
import AlertMessage from '../components/AlertMessage.vue';
export default {
  name: 'VisualizarProdutos',
  data() {
    return {
      produtoSelecionado: '',
      exibirModalAlterar: false,
      exibirModalExcluir: false,
      alterarAlertSuccess: false,
      alterarAlertError: false,
      excluirAlertSuccess: false,
    };
  },
  methods: {
    modalAlterar() {
      this.exibirModalAlterar = true;
      this.produtoSelecionado = +event.path[2].querySelector('th').innerText;
    },
    modalExcluir() {
      this.exibirModalExcluir = true;
      this.produtoSelecionado = +event.path[2].querySelector('th').innerText;
    },
    fecharModalAlterar() {
      this.exibirModalAlterar = false;
    },
    fecharModalExcluir() {
      this.exibirModalExcluir = false;
    },
    alterarProduto(dados) {
      if (dados.nome && dados.preco) {
        this.$emit('evento-alterar', dados);
        this.exibirModalAlterar = false;
        this.alterarAlertSuccess = true;
        setTimeout(() => (this.alterarAlertSuccess = false), 3000);
      } else {
        this.exibirModalAlterar = false;
        this.alterarAlertError = true;
        setTimeout(() => (this.alterarAlertError = false), 3000);
      }
    },
    excluirProduto(id) {
      this.$emit('evento-excluir', id);
      this.exibirModalExcluir = false;
      this.excluirAlertSuccess = true;
      setTimeout(() => (this.excluirAlertSuccess = false), 3000);
    },
  },
  components: { ModalAlterarProduto, ModalExcluirProduto, AlertMessage },
};
</script>

<style>
th {
  width: 300px;
}
</style>
