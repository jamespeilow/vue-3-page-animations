import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

/**
 * Router setup
 */
const routes = [
  { path: '/', component: () => import('./components/Home.vue') },
  { path: '/game', component: () => import('./components/Game.vue') },
]

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
