<template>
  <div class="modal_alterar" @click="handleClick">
    <b-form class="modal_container">
      <h5 class="text-center">Alterar Produto</h5>
      <button @click="fecharModal" class="modal_fechar">X</button>
      <div class="alterar_form">
        <b-form-group id="idGroup" label="Código do produto:" label-for="id">
          <b-form-input
            id="id"
            type="text"
            v-model="id"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group id="nomeGroup" label="Nome do produto:" label-for="nome">
          <b-form-input
            id="nome"
            type="text"
            v-model="nome"
            required
          ></b-form-input>
        </b-form-group>
        <label for="preco" class="form-label">Preço do produto:</label>
        <CurrencyInput
          v-model="preco"
          :options="currencyOptions"
          class="form-control"
          required
          id="preco"
        ></CurrencyInput>
      </div>
      <div class="text-center">
        <b-button class="mt-2" variant="outline-primary" @click="alterarProduto"
          >Alterar</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
import CurrencyInput from './CurrencyInput.vue';
export default {
  name: 'ModalAlterarProduto',
  data() {
    return {
      id: '',
      nome: '',
      preco: '',
      currencyOptions: {
        locale: 'pt-BR',
        currency: 'BRL',
        currencyDisplay: 'symbol',
        hideCurrencySymbolOnFocus: true,
        hideGroupingSeparatorOnFocus: true,
        hideNegligibleDecimalDigitsOnFocus: false,
        autoDecimalDigits: true,
        useGrouping: true,
        accountingSign: false,
      },
    };
  },
  methods: {
    alterarProduto() {
      this.$emit('alterar-produto', {
        id: this.id,
        nome: this.nome,
        preco: this.preco,
      });
    },
    fecharModal() {
      this.$emit('fechar-modal', 'Fechar');
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
  components: { CurrencyInput },
};
</script>

<style>
.modal_alterar::before {
  content: '';
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.modal_alterar {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100%;
  margin-top: 250px;
}

.modal_alterar .modal_container {
  position: relative;
  padding: 20px 100px;
  background: white;
  z-index: 1;
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

.alterar_form {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
