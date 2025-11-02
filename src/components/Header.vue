<template>
  <header class="header">
    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
    </div>

    <!-- Content -->
    <template v-else>
      <div class="logo-section">
        <img :src="logoImage" alt="TechBank Logo" class="logo-icon" />
        <span class="logo-text">{{ logoText }}</span>
      </div>

      <nav class="nav-links">
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

      <router-link :to="contactButton.route" class="contact-btn">
        {{ contactButton.text }}
      </router-link>
    </template>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import logo from '../assets/logo/tblogo.png'

// Image mapping helper
const imageMap = {
  'tblogo.png': logo
}

// Reactive state - initialized as empty, will be populated from JSON
const logoImage = ref(null)
const logoText = ref('')
const navigationLinks = ref([])
const contactButton = ref({ text: '', route: '' })
const loading = ref(true)
const error = ref(null)

// API endpoint or JSON file path
const API_URL = '/header-data.json'
// Alternative: You can use an actual API endpoint like:
// const API_URL = 'https://your-api.com/api/header'

// Fetch header data from JSON file or API
const fetchHeaderData = async () => {
  try {
    loading.value = true
    error.value = null
    
    const response = await fetch(API_URL)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch header data: ${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    
    // Update all data from JSON
    if (data.logo) {
      logoImage.value = data.logo.image ? (imageMap[data.logo.image] || logo) : logo
      logoText.value = data.logo.text || ''
    }
    
    navigationLinks.value = data.navigationLinks || []
    contactButton.value = data.contactButton || { text: '', route: '' }
    
  } catch (err) {
    console.error('Error fetching header data:', err)
    error.value = err.message
    // Data will remain empty, showing error state
  } finally {
    loading.value = false
  }
}

// Fetch data on component mount
onMounted(() => {
  fetchHeaderData()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
@font-face {
  font-family: 'Nineta';
  src: url('@/assets/fonts/Nineta-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  padding: 1rem 3rem;
  height: 100px;
  font-family: 'Poppins', sans-serif;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 33px;
  height: auto;
}

.logo-text {
  font-family: 'Nineta', sans-serif;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 2rem;
  margin-left: -180px; /* adjust to balance center alignment similar to Figma */
}

.nav-item {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  font-weight: 400;
}

.nav-item:hover {
  color: #b37cf7;
}

.router-link-active {
  color: #b37cf7;
}

.contact-btn {
  background-color: transparent;
  border: 1.2px solid #ffffff;
  color: #ffffff;
  padding: 0.5rem 1.3rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

.contact-btn:hover {
  background-color: #b37cf7;
  border-color: #b37cf7;
  color: #ffffff;
}

/* Loading State */
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: #b37cf7;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
