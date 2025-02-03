<script setup>
import { ref, onMounted, computed } from "vue";
import { useWeatherStore } from "../stores/weatherStore.js";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const weatherStore = useWeatherStore();
const city = ref(route.params.city);

const weather = computed(() => weatherStore.selectedCity);
const error = ref(null);

onMounted(async () => {
  if (city.value && !weatherStore.selectedCity) {
    try {
      await weatherStore.searchCity(city.value);
    } catch (err) {
      error.value = "Failed to fetch weather data. Please try again.";
    }
  }
});

const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-center">Weather in {{ city }}</h1>

    <div
      v-if="weather"
      class="mt-4 text-center bg-white shadow-md p-4 rounded-md"
    >
      <h2 class="text-xl font-semibold">
        {{ weather.name }}, {{ weather.sys.country }}
      </h2>
      <p class="text-lg">{{ weather.weather[0].description }}</p>
      <p class="text-2xl font-semibold">{{ weather.main.temp }}°C</p>
    </div>

    <p v-if="error" class="text-red-500 text-center mt-4">{{ error }}</p>

    <div class="mt-6 text-center">
      <button
        @click="goBack"
        class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</template>

<style scoped></style>
