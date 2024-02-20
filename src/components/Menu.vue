<template>
  <div class="menu_container">
    <div
      v-for="type in productStore.productsType"
      :key="type.id"
      :class="type.active ? 'menu_content menu_content_active' : 'menu_content'"
      @click="() => productStore.changeProductActive(type.id)"
    >
      {{ type.label }}
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products';
const productStore = useProductsStore();

</script>

<style scoped>
  .menu_container {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #D9D9D9;
    padding: 0 5%;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.002em;
    text-align: center;
  }

  .menu_content {
    color: #6F6F6F;
    padding: 0 3rem;
    min-width: 80px;
    max-width: 250px;
    width: 50%;
    cursor: pointer;
  }
  .menu_content_active {
    color: #631079;
    border-bottom: 2px solid #631079;
  }

  @media (max-width: 800px) {
    .menu_content {
      color: #6F6F6F;
      padding: 0 1rem;
      max-width: 100px;
    }
  }
</style>
