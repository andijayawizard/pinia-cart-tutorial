<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const count = ref(0)
const name: string = 'visitor'
</script>

<template>
  <div class="text-slate-500">
    <div>
      count: {{ count }}
    </div>
    <p>
      welcome home, {{ name }}
    </p>

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
