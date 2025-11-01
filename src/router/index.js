import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ContactUs from '../pages/ContactUs.vue'
import AboutSection from '../components/About.vue'
import ProductsAndTechnologies from '../components/ProductsAndTechnologies.vue'
import BlogsSection from '../components/BlogsSection.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

