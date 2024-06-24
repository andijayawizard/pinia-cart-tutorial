<template>
  <div class="text-slate-500">
    <div class="grid grid-cols-4 gap-8 mt-10">
      <div v-for="(item, index) in products" :key="index"
        class="border rounded-xl bg-gray-800 overflow-hidden shadow-md hover:shadow-xl">
        <div class="p-5 pb-0">
          <img class="h-32 w-32 mx-auto" :src="`${apiUrl}/assets/uploads/images/services/${item.acak}-1.jpg`" />
          <div class="text-lg font-semibold text-center w-full mt-2" v-text="item.nama">
          </div>
          <div class="text-center text-sm w-full bg-red-50 p-1 my-1 mb-1.5" v-html="item.rgks">
          </div>
          <div class="flex items-center justify-between px-5">
            <div class="text-center">
              <div class="text-lg font-semibold leading-none">25</div>
              <div class="text-sm text-gray-500">min</div>
            </div>
            <div class="text-center">
              <div class="text-lg font-semibold leading-none">95</div>
              <div class="text-sm text-gray-500">cal</div>
            </div>
            <div class="text-center">
              <img class="mx-auto h-5 w-auto" src="./assets/images/fish1.png" />
              <div class="text-sm text-gray-500">fish</div>
            </div>
          </div>
          <div class="flex items-center text-gray-700 justify-center gap-2 my-2">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
        </div>
        <div class="bg-red-500 text-center py-2 text-white cursor-pointer">
          Start cooking
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const products = ref(null);
const apiUrl: string = import.meta.env.VITE_apiUrl
const apiKey: string = import.meta.env.VITE_apiKey
const params: string = `/api/api.php/records/services`
fetch(`${apiUrl}${params}`, {
  headers: {
    'x-api-key': `${apiKey}`
  }
})
  // .then(async (response) => {
  //   const data = await response.json()
  //   console.log("data: ", data);
  //   this.data = data
  // })
  // .catch((error) => { return error })
  .then(response => response.json())
  .then(data => products.value = data.records);

</script>

<style></style>