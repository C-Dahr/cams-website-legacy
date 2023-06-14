import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Taskmaster from '../views/Taskmaster.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Default',
    component: Home
  },
  {
    path: '/taskmaster',
    name: 'Taskmaster',
    component: Taskmaster
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
