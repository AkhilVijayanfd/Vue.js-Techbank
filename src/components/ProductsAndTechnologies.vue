<template>
  <section class="products-section">
    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading products...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error && products.length === 0" class="error-container">
      <p class="error-text">{{ error }}</p>
      <button @click="fetchProductsData" class="retry-btn">Retry</button>
    </div>

    <!-- Content -->
    <div v-else>
      <!-- PRODUCTS -->
      <div class="products-header">
        <span class="products-subtitle">{{ productsSubtitle }}</span>
        <h2 class="products-title">{{ productsTitle }}</h2>
      </div>

      <div class="products-grid">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :image="product.image"
          :title="product.title"
          :description="product.description"
        />
      </div>

      <!-- TECHNOLOGIES -->
      <div class="technologies-section">
        <h2 class="section-title">{{ technologiesTitle }}</h2>

        <div class="tech-logos">
          <div class="logo-row">
            <img
              v-for="(logo, index) in topRow"
              :key="'top-' + index"
              :src="logo"
              alt="Technology Logo"
            />
          </div>
          <div class="logo-row">
            <img
              v-for="(logo, index) in bottomRow"
              :key="'bottom-' + index"
              :src="logo"
              alt="Technology Logo"
            />
          </div>
        </div>
      </div>
    </div>

    <ConnectedBrands />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'
import ConnectedBrands from './ConnectedBrands.vue'

// Product images
import dwallet from '../assets/dwallet.png'
import dbank from '../assets/dbank.png'

// Technology logos
import logo110 from '../assets/logo/Logo110.png'
import logo29 from '../assets/logo/Logo29.png'
import logo311 from '../assets/logo/Logo311.png'
import logo412 from '../assets/logo/Logo412.png'
import logo57 from '../assets/logo/Logo57.png'
import logo68 from '../assets/logo/Logo68.png'

// Image mapping helpers
const productImageMap = {
  'dwallet.png': dwallet,
  'dbank.png': dbank
}

const techLogoMap = {
  'Logo110.png': logo110,
  'Logo29.png': logo29,
  'Logo311.png': logo311,
  'Logo412.png': logo412,
  'Logo57.png': logo57,
  'Logo68.png': logo68
}

// Reactive state - initialized as empty, will be populated from JSON
const products = ref([])
const topRow = ref([])
const bottomRow = ref([])
const productsSubtitle = ref('')
const productsTitle = ref('')
const technologiesTitle = ref('')
const loading = ref(true)
const error = ref(null)

// API endpoint or JSON file path
const API_URL = '/products-tech-data.json'

// Fetch products and technologies data from JSON file or API
const fetchProductsData = async () => {
  try {
    loading.value = true
    error.value = null
    
    const response = await fetch(API_URL)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products data: ${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    
    // Map products and resolve image paths from JSON
    products.value = (data.products || []).map(product => ({
      ...product,
      image: productImageMap[product.image] || product.image
    }))
    
    // Map technology logos from JSON
    if (data.technologies) {
      topRow.value = (data.technologies.topRow || []).map(logo => 
        techLogoMap[logo] || logo
      )
      bottomRow.value = (data.technologies.bottomRow || []).map(logo => 
        techLogoMap[logo] || logo
      )
    }
    
    // Update titles from JSON
    productsSubtitle.value = data.productsSubtitle || ''
    productsTitle.value = data.productsTitle || ''
    technologiesTitle.value = data.technologiesTitle || ''
    
  } catch (err) {
    console.error('Error fetching products data:', err)
    error.value = err.message
    // Data will remain empty arrays, showing error state instead
  } finally {
    loading.value = false
  }
}

// Fetch data on component mount
onMounted(() => {
  fetchProductsData()
})
</script>

<style scoped>
.products-section {
  background: #000;
  color: #fff;
  text-align: center;
  padding: 6rem 2rem;
  font-family: 'Poppins', sans-serif;
}

/* PRODUCTS */
.products-header {
  margin-bottom: 3.5rem;
}

.products-subtitle {
  color: #b37cf7;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;
}

.products-title {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
}

.products-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;
}

/* TECHNOLOGIES (unchanged) */
.technologies-section {
  margin-top: 8rem;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 3rem;
  text-transform: uppercase;
}

.tech-logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.logo-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.logo-row img {
  width: 110px;
  opacity: 0.8;
  transition: 0.3s ease;
}

.logo-row img:hover {
  opacity: 1;
  transform: scale(1.05);
}

/*Loading State */
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

/* Responsive */
@media (max-width: 1024px) {
  .products-grid {
    flex-direction: column;
    align-items: center;
  }

  .logo-row {
    gap: 1.5rem;
  }

  .logo-row img {
    width: 80px;
  }
}
</style>
