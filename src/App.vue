<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img src="./assets/images/bamaq_logo.png" alt="Bamaq Logotipo" />
  </header>
  <RouterView />
</template>

<style scoped>
  header {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 60px;
    padding: 0 5%;
    background: #631079;
  }
</style>
