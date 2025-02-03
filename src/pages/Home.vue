<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useWeatherStore } from "../stores/weatherStore.js";

const weatherStore = useWeatherStore();
const router = useRouter();
const city = ref("");

const searchCity = async () => {
  if (city.value.trim()) {
    await weatherStore.searchCity(city.value.trim());
    router.push({ name: "Weather", params: { city: city.value.trim() } });
    city.value = "";
  } else {
    console.error("Invalid city input:", city.value);
    alert("Please enter a valid city name.");
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-2xl font-bold text-center">Cities & Weather Explorer</h1>

    <div class="mt-4 flex justify-center">
      <input
        v-model="city"
        type="text"
        placeholder="Enter city name..."
        class="p-2 border rounded-md"
      />
      <button
        @click="searchCity"
        class="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  </div>
</template>

<style scoped></style>
