<template>
  <div class="text-slate-500">
    <h1 v-text="module"></h1>
    <table class="w-full table-auto font-light">
      <thead class="border-b border-slate-800">
        <tr>
          <th class="p-2">Id</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tutorials" :key="index" class="border-b border-slate-800">
          <td v-text="item.id" class="p-2 text-center"></td>
          <td v-text="item.title"></td>
          <td v-text="item.description"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const tutorials = ref(null);
const module: string = 'tutorials'
const apiUrl: string = import.meta.env.VITE_apiUrl
const apiKey: string = import.meta.env.VITE_apiKey
const params: string = '/api/tutorials?size=10&page=0'
fetch(`${apiUrl}${params}`, {
  headers: {
    'Authorization': `Bearer ${apiKey}`
    // 'x-api-key': `${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => tutorials.value = data.tutorials);
</script>



<style></style>