<template>
  <div class="w-64 h-screen overflow-hidden bg-gray-800">
    <div class="flex flex-col justify-between h-full px-5 py-8">
      <div class="mx-auto">
        <!-- title -->
        <div class="text-4xl mb-5 text-center" style="font-family: 'Itim', 'cursive'">
          Foodee
        </div>
        <!-- profile -->
        <div>
          <div class="border p-1.5 rounded-full w-fit mx-auto">
            <div class="h-16 w-16 rounded-full overflow-hidden relative">
              <img class="absolute top-0 left-0 w-full h-full object-cover" src="./assets/images/chef.png" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="text-xl" style="font-family: 'Itim', 'cursive'">
              Merry Clinton
            </h3>
            <div class="text-gray-600 text-sm">Chef at Rolex</div>
            <div class="flex items-center justify-center gap-1">
              <i class="ri-heart-fill text-red-500"></i>
              <div class="text-gray-700">255</div>
            </div>
          </div>
        </div>
        <!-- menu items -->
        <div class="mx-auto mt-14">
          <router-link to="/" class="flex items-center gap-2 text-gray-500 hover:text-gray-600 mb-3">Home</router-link>
          <router-link to="/brands"
            class="flex items-center gap-2 text-slate-500 hover:text-slate-600 mb-3">Brands</router-link>
          <router-link to="/products"
            class="flex items-center gap-2 text-gray-500 hover:text-gray-600 mb-3">Products</router-link>
          <router-link to="/services" class="flex items-center gap-2 text-gray-500 hover:text-gray-600 mb-3">
            <i class="ri-award-fill"></i>
            Services
          </router-link>
          <router-link to="/blog" class="flex items-center gap-2 text-gray-500 hover:text-gray-600 mb-3">
            <i class="ri-global-fill"></i>
            Blog
          </router-link>
          <router-link to="/hello-world" class="flex items-center gap-2 text-gray-500 hover:text-gray-600 mb-3">
            <i class="ri-book-read-fill"></i>
            Hello World
          </router-link>
          <router-link to="/pinia-cart-tutorial" class="flex items-center gap-2 text-gray-500 hover:text-gray-600 mb-3">
            <i class="ri-heart-fill"></i>
            Pinia Cart Tutorial
          </router-link>
          <router-link to="/tutorials" class="flex items-center gap-2 text-gray-500 hover:text-gray-600 mb-3">
            <i class="ri-heart-fill"></i>
            Tutorials
          </router-link>
        </div>
      </div>
      <div class="text-center text-gray-700 bg-red-100 p-2 rounded-md">
        <i class="ri-star-fill text-3xl text-yellow-500"></i>
        <div>
          Buy premium for advanced
          <a class="underline cursor-pointer">Features</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>