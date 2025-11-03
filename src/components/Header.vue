<template>
  <header class="header">
    <!-- Logo -->
    <div class="logo-section">
      <img :src="logoImage" alt="TechBank Logo" class="logo-icon" />
      <span class="logo-text">{{ logoText }}</span>
    </div>

    <!-- Desktop Navigation -->
    <nav class="nav-links" v-if="!isMobile">
      <template v-for="(link, index) in navigationLinks" :key="index">
        <router-link 
          v-if="link.type === 'router-link'" 
          :to="link.route" 
          class="nav-item"
        >
          {{ link.text }}
        </router-link>
        <a 
          v-else 
          :href="link.url" 
          class="nav-item"
        >
          {{ link.text }}
        </a>
      </template>
    </nav>

    <!-- Contact Button (Desktop only) -->
    <router-link 
      v-if="!isMobile"
      :to="contactButton.route"
      class="contact-btn"
    >
      {{ contactButton.text }}
    </router-link>

    <!-- Mobile Hamburger Icon -->
    <div class="hamburger" v-if="isMobile" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition name="slide-fade">
      <div v-if="menuOpen" class="mobile-menu">
        <template v-for="(link, index) in navigationLinks" :key="index">
          <router-link 
            v-if="link.type === 'router-link'" 
            :to="link.route" 
            class="mobile-item"
            @click="closeMenu"
          >
            {{ link.text }}
          </router-link>
          <a 
            v-else 
            :href="link.url" 
            class="mobile-item"
            @click="closeMenu"
          >
            {{ link.text }}
          </a>
        </template>

        <router-link 
          :to="contactButton.route" 
          class="mobile-contact"
          @click="closeMenu"
        >
          {{ contactButton.text }}
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/logo/tblogo.png'

const logoImage = ref(logo)
const logoText = ref('TechBank')
const navigationLinks = ref([
  { text: 'Home', type: 'router-link', route: '/' },
  { text: 'Products', type: 'router-link', route: '/products' },
  { text: 'Teams', type: 'router-link', route: '/teams' },
  { text: 'Career', type: 'router-link', route: '/career' },
  { text: 'Blog', type: 'router-link', route: '/blog' }
])
const contactButton = ref({ text: 'Contact Us', route: '/contact' })

const isMobile = ref(false)
const menuOpen = ref(false)

const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)

let mediaQuery

onMounted(() => {
  // Setup reactive media query
  mediaQuery = window.matchMedia('(max-width: 743px)')
  const updateScreen = () => {
    isMobile.value = mediaQuery.matches
    if (!isMobile.value) menuOpen.value = false
  }

  updateScreen()
  mediaQuery.addEventListener('change', updateScreen)
})

onUnmounted(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', updateScreen)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
@font-face {
  font-family: 'Nineta';
  src: url('@/assets/fonts/Nineta-Regular.ttf') format('truetype');
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  height: 90px;
  position: relative;
  z-index: 50;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 34px;
  height: auto;
}

.logo-text {
  font-family: 'Nineta', sans-serif;
  font-size: 18px;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-item {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: #b37cf7;
}

.contact-btn {
  border: 1.3px solid #fff;
  border-radius: 25px;
  padding: 0.5rem 1.2rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background-color: #b37cf7;
  border-color: #b37cf7;
}

/* Hamburger Icon */
.hamburger {
  width: 28px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  left: -12px; /* Slightly moved left for center balance */
}

.hamburger span {
  display: block;
  height: 3px;
  background: #fff;
  border-radius: 3px;
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  gap: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
}

.mobile-item {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  transition: color 0.3s;
}

.mobile-item:hover {
  color: #b37cf7;
}

.mobile-contact {
  border: 1.2px solid #fff;
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  color: #fff;
  margin-top: 0.5rem;
  transition: all 0.3s;
}

.mobile-contact:hover {
  background-color: #b37cf7;
  border-color: #b37cf7;
}

/* Smooth Fade Animation */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
}

/* Mobile Styles */
@media (max-width: 743px) {
  .nav-links,
  .contact-btn {
    display: none;
  }

  .logo-text {
    font-size: 16px;
  }

  .header {
    padding: 0.8rem 1.2rem;
  }
}
</style>
