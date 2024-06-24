<template>
  <div class="text-slate-500">
    <table class="w-full table-auto font-light">
      <thead class="border-b border-slate-800">
        <tr>
          <th class="p-2">Id</th>
          <th>Nama</th>
          <!-- <th>Ringkasan</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in brands" :key="index" class="border-b border-slate-800">
          <td v-text="item.id" class="p-2 text-center"></td>
          <td v-text="item.nama"></td>
          <!-- <td v-text="item.rgks"></td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const brands = ref(null);
const apiUrl: string = import.meta.env.VITE_apiUrl
const apiKey: string = import.meta.env.VITE_apiKey
const params: string = '/api/api.php/records/brand'
fetch(`${apiUrl}${params}`, {
  headers: {
    'x-api-key': `${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => brands.value = data.records);
// .then(data => console.log(JSON.stringify(data)))
</script>

<style></style>