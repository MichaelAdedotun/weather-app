<script setup>
defineProps(["weather"]);
</script>

<template>
  <div class="p-4 bg-white rounded-md shadow-md text-center">
    <h2 class="text-xl font-bold">
      {{ weather.name }}, {{ weather.sys.country }}
    </h2>
    <p class="text-lg">{{ weather.weather[0].description }}</p>
    <p class="text-2xl font-semibold">{{ weather.main.temp }}°C</p>
  </div>
</template>

<style scoped></style>
