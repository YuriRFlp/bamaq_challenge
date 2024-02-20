<template>
  <div class="card_container">
    <div class="card_icon">
      <img class="card_icon_img" src="../assets/images/icon_product.png" alt="Ícone do produto" />
      {{ props.product_type }}
    </div>

    <div class="card_type">{{ props.type }}</div>

    <div class="card_name">{{ props.name }}</div>

    <div class="card_installment">
      Parcelas inicial de 
      <span class="card_installment_span">
        R$ {{ props.installment_value.toFixed(2).replace('.', ',') }}
      </span>
    </div>

    <div class="card_infos">
      <p class="card_infos_text">
        Taxa de administração: {{ props.administrative_fee }}%
        <i class="fa-regular fa-circle-question icon"></i>
      </p>
      <p class="card_infos_text">
        Fundo de reserva: {{ props.reserve_fund_fee }}%
        <i class="fa-regular fa-circle-question icon"></i>
      </p>
      <p class="card_infos_text">Prazo do plano: {{ props.deadline_payment }} meses</p>
    </div>

    <button class="card_button">Aproveitar plano</button>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products';
const productStore = useProductsStore();

const props = defineProps([
  'product_type',
  'type',
  'name',
  'installment_value',
  'deadline_payment',
  'administrative_fee',
  'reserve_fund_fee',
])
</script>

<style scoped>
  .card_container {
    min-width: 300px;
    max-width: 354px;
    box-shadow: 0px 4px 8px 2px #2626261F;
    padding: 2rem;
    border-radius: .6rem;
  }

  .card_icon {
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.004em;
    text-align: left;
    color: #111;
  }

  .card_icon_img {
    margin-right: 1rem;
  }

  .card_type {
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.004em;
    text-align: left;
    color: #111;
  }

  .card_name {
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #111;
    margin: 1rem 0;
  }

  .card_installment {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #111;
  }
  .card_installment_span {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #111;
  }

  .card_infos {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #6F6F6F;
    margin: .5rem 0;
  }

  .card_infos_text {
    margin: .2rem 0;
  }

  .card_button {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.002em;
    background: #631079;
    color: #FEFEFE;
    padding: .5rem 1rem;
    border-radius: .3rem;
    width: 100%;
    text-align: center;
    margin: .5rem 0 1rem 0;
    cursor: pointer;
    border: none;
  }
  .card_button:hover {
    background: rgba(99, 16, 121, 0.9);
  }

  .icon {
    font-size: 10px;
  }

  @media (max-width: 800px) {
    .card_container {
      color: #6F6F6F;
      padding: 0 1rem;
      min-width: 200px;
      width: 100%;
      margin: 2rem 0;
    }
  }
</style>
