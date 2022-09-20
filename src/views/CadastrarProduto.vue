<template>
  <div>
    <h1 class="text-center">Cadastrar Produtos</h1>
    <AlertMessage
      class="mt-2"
      v-if="cadastroAlertSuccess"
      :type="'alert-success'"
      :text="'Cadastro efetuado com sucesso'"
    ></AlertMessage>
    <AlertMessage
      class="mt-2"
      v-if="cadastroAlertError"
      :type="'alert-danger'"
      :text="'Cadastro não efetuado. Preencha todas as informações'"
    ></AlertMessage>
    <b-form name="formCadastrar">
      <b-form-group id="nomeGroup" label="Nome do produto:" label-for="nome">
        <b-form-input
          id="nome"
          type="text"
          v-model="nomeProduto"
          required
        ></b-form-input>
      </b-form-group>
      <label for="preco" class="form-label">Preço do produto:</label>
      <CurrencyInput
        v-model="precoProduto"
        :options="currencyOptions"
        class="form-control"
        required
        id="preco"
      ></CurrencyInput>
      <b-button class="mt-2" variant="outline-primary" @click="cadastrarProduto"
        >Cadastrar</b-button
      >
    </b-form>
  </div>
</template>

<script>
import CurrencyInput from '../components/CurrencyInput.vue';
import AlertMessage from '../components/AlertMessage.vue';
export default {
  name: 'CadastrarProduto',
  data() {
    return {
      nomeProduto: '',
      precoProduto: null,
      id: 0,
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
      cadastroAlertSuccess: false,
      cadastroAlertError: false,
    };
  },
  methods: {
    cadastrarProduto() {
      if (this.nomeProduto && this.precoProduto) {
        this.cadastroAlertSuccess = true;
        this.$emit('evento-cadastrar', {
          id: this.id,
          nome: this.nomeProduto,
          preco: this.precoProduto,
        });
        this.id++;
        localStorage.id = this.id;
        this.nomeProduto = '';
        this.precoProduto = null;
        setTimeout(() => (this.cadastroAlertSuccess = false), 3000);
      } else {
        this.cadastroAlertError = true;
        setTimeout(() => (this.cadastroAlertError = false), 3000);
      }
    },
  },
  created() {
    if (localStorage.id) {
      this.id = localStorage.id;
    }
  },
  components: { CurrencyInput, AlertMessage },
};
</script>

<style></style>
