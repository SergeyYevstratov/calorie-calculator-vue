import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Auth from './views/Auth.vue'
import Info from './views/Info.vue'

const router = createRouter({
  history: createWebHistory('/calorie-calculator-vue/'),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/auth', component: Auth },
    { path: '/info', component: Info },
  ],
})

export default router
