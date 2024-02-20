import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const productsType = ref([
    { id: 102, label: 'Moto', active: true },
    { id: 101, label: 'Carro', active: false },
    { id: 104, label: 'Imóvel', active: false },
    { id: 103, label: 'Pesados', active: false },
  ]);
  const productIdActive = ref(102);
  const allProducts = ref([]);
  const productList = ref([]);
  const showProducts = ref(6);

  const changeProductActive = (productId) => {
    productIdActive.value = productId;
    productsType.value = productsType.value.map(type => {
      type.active = false;
      if (type.id == productId) type.active = true;
      return type;
    })
    productList.value = allProducts.value.filter(product => product.id == productId);
    showProducts.value = productList.value[0].products.length > 6 ? 6 : productList.value[0].products.length;
  }

  const changeProducts = (products) => {
    allProducts.value = products;
    productList.value = products.filter(product => product.id == productIdActive.value);
  }

  const changeShowProducts = () => {
    showProducts.value = showProducts.value + 6 > productList.value[0].products.length
      ? productList.value[0].products.length
      : showProducts.value + 6
  }

  return {
    productsType,
    productIdActive,
    productList,
    changeProductActive,
    changeProducts,
    showProducts,
    changeShowProducts
  }
})
