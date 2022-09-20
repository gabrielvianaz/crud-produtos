<template>
  <div class="modal_excluir" @click="handleClick">
    <div class="modal_container">
      <h5 class="text-center">Excluir Produto</h5>
      <button @click="fecharModal" class="modal_fechar">X</button>
      <p class="modal_msg">
        Confirma a <span class="text-danger"><b>exclusão</b></span> do produto
        <b>{{ id }} - {{ nome }}</b
        >?
      </p>
      <div class="text-center">
        <button @click="excluirProduto" class="btn btn-outline-danger mx-2">
          Sim
        </button>
        <button @click="fecharModal" class="btn btn-outline-primary">
          Não
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalExcluirProduto',
  data() {
    return {
      id: '',
      nome: '',
      preco: '',
    };
  },
  methods: {
    fecharModal() {
      this.$emit('fechar-modal', 'Fechar');
    },
    excluirProduto() {
      this.$emit('excluir-produto', this.id);
    },
    handleClick({ target, currentTarget }) {
      if (target === currentTarget) this.fecharModal();
    },
  },
  created() {
    this.$parent.$parent.produtos.forEach((produto) => {
      if (produto.id == this.$parent.produtoSelecionado) {
        this.id = produto.id;
        this.nome = produto.nome;
        this.preco = produto.preco;
      }
    });
  },
};
</script>

<style>
.modal_excluir::before {
  content: '';
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.modal_excluir {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100%;
  margin-top: 350px;
}

.modal_excluir .modal_container {
  position: relative;
  padding: 20px 100px;
  background: white;
  z-index: 1;
}

.modal_msg {
  margin-top: 30px;
  margin-bottom: 30px;
}

.modal_fechar {
  border-radius: 50%;
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.modal_fechar:hover {
  color: rgba(0, 0, 0, 0.5);
}
</style>
