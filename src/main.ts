import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(),
  // You don't need to pass the routes anymore,
  // the plugin writes it for you 🤖
})


import { plugin, defaultConfig } from "@formkit/vue";

const app = createApp(App)

app.use(router)

app.use(plugin, defaultConfig);

app.mount('#app')
