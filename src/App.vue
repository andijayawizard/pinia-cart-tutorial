<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
import Title from './components/Title.vue'
</script>

<template>
  <div class="flex">
    <!-- sidebar -->
    <Sidebar />
    <!-- main -->
    <div class="bg-gray-900 w-full h-screen overflow-y-scroll p-8">
      <!-- top bar -->
      <Topbar />
      <!-- content -->
      <div>
        <!-- title -->
        <Title />
        <!-- cards -->
        <!-- <slot /> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  font-family: 'Inter', sans-serif;
}

@supports (font-variation-settings: normal) {
  :root {
    font-family: 'Inter var', sans-serif;
  }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
