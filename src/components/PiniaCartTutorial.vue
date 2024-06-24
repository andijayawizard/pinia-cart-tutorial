<template>
  <div class="relative max-w-6xl mx-auto">
    <!-- NavBar contains the toggle for the cart -->
    <NavBar :show-cart="showCart" @toggleCart="showCart = !showCart" />
    <!-- Cart Dropdown -->
    <Cart v-if="showCart" />
    <main class="flex flex-1">
      <!-- Product Card -->
      <Card v-for="product in productStore.products" :key="product.name" :product="product"
        @add-to-cart="cartStore.addItem" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useProductStore } from '../stores/ProductStore';
import { useCartStore } from '../stores/CartStore';
const showCart = ref(false);

const productStore = useProductStore();
const cartStore = useCartStore();
</script>

<style></style>