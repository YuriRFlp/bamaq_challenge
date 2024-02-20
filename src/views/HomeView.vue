<template>
  <main class="main_container">
    <h1 class="title">O que você deseja conquistar?</h1>

    <Menu />

    <div class="products_displayInfo" v-if="productStore.productList[0]">
      Exibindo {{ productStore.showProducts }} produtos de {{ productStore.productList[0].products.length }} totais.
    </div>

    <div class="products_container" v-if="productStore.productList[0]">
      <ProductCard
        v-for="product in productStore.productList[0].products.slice(0, productStore.showProducts)"
        :key="product.id"
        :product_type="productType"
        :type="productStore.productList.name"
        :name="product.name"
        :installment_value="product.price_list.installment_value"
        :deadline_payment="product.price_list.deadline_payment"
        :administrative_fee="product.price_list.administrative_fee"
        :reserve_fund_fee="product.price_list.sale_plan.reserve_fund_fee"
      />
    </div>

    <div class="button_container" v-if="productStore.productList[0]">
       <button @click="() => productStore.changeShowProducts()" class="button_show">
        Ver mais
        <i class="fa-solid fa-chevron-down icon"></i>
      </button>
    </div>
  </main>
</template>


<script setup>
import ProductCard from '../components/ProductCard.vue'
import Menu from '../components/Menu.vue'
import { useProductsStore } from '../stores/products';
import { onMounted, computed } from 'vue';
import { instance } from '../services';
const productStore = useProductsStore();

const productType = computed(() => {
  const typeActive = productStore.productsType.filter(type => type.active);
  return typeActive[0].label;
})

onMounted(() => {
  instance.get('segments?relations[]=products.priceList.plProgression&relations[]=products.priceList.detailGroup&relations[]=products.priceList.salePlan')
    .then((res) => res.data)
    .then((res) => {
      productStore.changeProducts(res.data);
    })
    .catch((e) => {
      throw e.response.message
    })
})

</script>

<style scoped>
  .main_container {
    width: 100%;
    overflow-x: hidden;
  }
  .title{
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0.01em;
    text-align: center;
    padding: 4rem 0 2rem 0;
  }
  .products_container {
    margin: 0 5%;
    display: grid;
    grid-template-columns: repeat(3, minmax(20%, auto));
    grid-gap: 2rem;
    margin-bottom: 5rem;
  }
  .products_displayInfo {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.002em;
    text-align: left;
    color: #6f6f6f;
    margin: 2rem 5%;
  }

  .button_container {
    margin: 0 5%;
    margin-bottom: 4rem;
  }

  .button_show {
    background: #F8F8F8;
    color: #F9154F;
    border: 1px solid #F9154F;
    padding: .5rem;
    width: 250px;
    border-radius: .5rem;
    margin: 0 50%;
    transform: translate(-50%,-50%);
    cursor: pointer;
  }

  .icon {
    margin-left: .5rem;
  }

  @media (max-width: 995px) {
    .products_container {
      grid-template-columns: repeat(2, minmax(20%, auto));
    }
  }

  @media (max-width: 800px) {
    .main_container {
      background: #F8F8F8;
    }
    .title{
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.002em;
      text-align: center;
    }

    .products_container {
      display: block;
      grid-gap: 0;
      margin-bottom: 3rem;
    }

    .button_show {
      width: 100%;
      margin: 0;
      transform: none;
    }
  }
</style>