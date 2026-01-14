import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info.vue'
import About from './views/About.vue'
import Auth from './views/Auth.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/info', component: Info },
    { path: '/about', component: About },
    { path: '/auth', component: Auth }
  ]
})
