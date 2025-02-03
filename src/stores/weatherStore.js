import { defineStore } from "pinia";
import { fetchWeather } from "../api/weather.js";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    cities: [],
    selectedCity: null,
  }),
  actions: {
    async searchCity(city) {
      const data = await fetchWeather(city);
      if (data) {
        this.selectedCity = data;
        this.cities.push(data);
      }
    },
  },
});
