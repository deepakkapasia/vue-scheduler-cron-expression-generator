import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/Dashboard.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    }
  ]
})

export default router
