<script setup>

</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4 text-center text-xl font-bold">
      Cities & Weather Explorer
    </header>

    <!-- Main Content (Loaded via Router) -->
    <main class="p-6">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>
