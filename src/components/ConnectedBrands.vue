<template>
  <section class="brands-section">
    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading brands...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error && brands.length === 0" class="error-container">
      <p class="error-text">{{ error }}</p>
      <button @click="fetchBrandsData" class="retry-btn">Retry</button>
    </div>

    <!-- Content -->
    <div v-else>
      <div class="section-header">
        <p class="sub-text">{{ subText }}</p>
        <h2 class="section-title">{{ sectionTitle }}</h2>
      </div>

      <div class="brands-grid">
        <div class="brand-card" v-for="(brand, index) in brands" :key="index">
          <div class="brand-header">
            <h3 class="brand-title">{{ brand.name }}</h3>
            <p class="brand-sub">{{ brand.description }}</p>

            <div class="icon-row">
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>

          <div class="logo-wrapper">
            <img :src="brand.image" :alt="brand.name" class="brand-logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BTigers from '../assets/BTigers.png'
import KBTigers from '../assets/KBTigers.png'
import LTigers from '../assets/LBTigers.png'

// Image mapping helper
const imageMap = {
  'BTigers.png': BTigers,
  'KBTigers.png': KBTigers,
  'LBTigers.png': LTigers
}

// Reactive state - initialized as empty, will be populated from JSON
const brands = ref([])
const sectionTitle = ref('')
const subText = ref('')
const loading = ref(true)
const error = ref(null)

// API endpoint or JSON file path
const API_URL = '/brands-data.json'
// Alternative: You can use an actual API endpoint like:
// const API_URL = 'https://your-api.com/api/brands'

// Fetch brands data from JSON file or API
const fetchBrandsData = async () => {
  try {
    loading.value = true
    error.value = null
    
    const response = await fetch(API_URL)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch brands data: ${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    
    // Map the fetched data and resolve image paths
    brands.value = (data.brands || []).map(brand => ({
      ...brand,
      image: imageMap[brand.image] || brand.image
    }))
    
    // Update section titles from JSON
    sectionTitle.value = data.sectionTitle || ''
    subText.value = data.subText || ''
    
  } catch (err) {
    console.error('Error fetching brands data:', err)
    error.value = err.message
    // Data will remain empty array, showing error state instead
  } finally {
    loading.value = false
  }
}

// Fetch data on component mount
onMounted(() => {
  fetchBrandsData()
})
</script>

<style scoped>
.brands-section {
  background-color: #000;
  color: #fff;
  padding: 6rem 8rem;
  font-family: 'Poppins', sans-serif;
}

/*Centered section title */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.sub-text {
  color: #b37cf7;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  opacity: 0.8;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
}

/*3 Cards aligned in one row */
.brands-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 2.5rem;
}

/* Card Styling */
.brand-card {
  background: linear-gradient(180deg, #0a0a0a, #151515);
  border-radius: 20px;
  width: 340px;
  padding: 2rem 1.5rem 2.5rem;
  box-shadow: inset 0 0 10px rgba(179, 124, 247, 0.15);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 470px;
}

.brand-card:hover {
  transform: translateY(-8px);
}

/* Left aligned content */
.brand-header {
  text-align: left;
}

.brand-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
}

.brand-sub {
  font-size: 0.85rem;
  color: #ccc;
  margin-bottom: 1.2rem;
  line-height: 1.4;
}

/* Icons with neutral color */
.icon-row {
  display: flex;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.icon-row i {
  font-size: 1rem;
  color: #ccc;
  transition: color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.icon-row i:hover {
  color: #fff;
  transform: scale(1.1);
}

/* Image Section (centered and enlarged) */
.logo-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
}

.brand-logo {
  width: 220px;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 2;
  margin-bottom: 0;
}

/* Removed the round shadow completely */
.brand-podium {
  display: none;
}

/* Loading State */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #333;
  border-top-color: #b37cf7;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: #aaa;
  font-size: 1rem;
}

/* Error State */
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
}

.error-text {
  color: #ff4d4d;
  font-size: 1rem;
  text-align: center;
}

.retry-btn {
  background: linear-gradient(90deg, #b37cf7, #8b5cf6);
  border: none;
  color: #fff;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(179, 124, 247, 0.4);
}
</style>
