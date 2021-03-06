import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import About from '../views/About.vue'
import Foods from '@/components/Foods.vue'
import Food from '@/components/Food.vue'
import Notifications from '@/components/Notifications.vue'
import Education from '@/components/Education.vue'
import Settings from '@/components/Settings.vue'
import AddFood from '@/components/AddFood.vue'
import Items from '@/components/Items.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/foods/:id',
    name: 'Food',
    component: Food
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/settings',
    name: 'Setting',
    component: Settings
  },
  {
    path: '/food/add',
    name: 'AddFood',
    component: AddFood
  },
  {
    path: '/items',
    name: 'Item',
    component: Items
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
