import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import Weather from "../pages/Weather.vue";


    const routes = [
        {path: '/', name: 'Home', component: Home},
        {path: '/Weather/:city', name: 'Weather', component: Weather, props: true},
    ];


export const router =createRouter({
    history: createWebHistory(),
    routes,
});