<template>
  <section class="blogs-section">
    <div class="section-heading">
      <h2 class="heading-top">Techbank</h2>
      <h3 class="heading-bottom">BLOGS</h3>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading blogs...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error && blogs.length === 0" class="error-container">
      <p class="error-text">{{ error }}</p>
      <button @click="fetchBlogsData" class="retry-btn">Retry</button>
    </div>

    <!-- Carousel Content -->
    <div v-else class="carousel-container">
      <!-- Left Arrow -->
      <button class="arrow left" @click="prevSlide" :disabled="loading || blogs.length === 0">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Carousel -->
      <div class="carousel-wrapper">
        <div
          class="carousel"
          :style="{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }"
        >
          <div
            v-for="(blog, index) in displayBlogs"
            :key="index"
            class="blog-card"
          >
            <img :src="blog.image" :alt="blog.title" class="blog-image" />
            <div class="blog-content">
              <h3>{{ blog.title }}</h3>
              <p>{{ blog.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Arrow -->
      <button class="arrow right" @click="nextSlide" :disabled="loading || blogs.length === 0">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Dots -->
    <div v-if="!loading && blogs.length > 0" class="dots">
      <span
        v-for="(dot, index) in blogs.length"
        :key="index"
        :class="['dot', { active: index === (currentIndex % blogs.length) }]"
        @click="goToSlide(index)"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BlogImage1 from '../assets/BlogImage1.png'
import BlogImage2 from '../assets/BlogImage2.png'
import BlogImage3 from '../assets/BlogImage3.png'

// Image mapping helper - maps image filenames to imported image modules
const imageMap = {
  'BlogImage1.png': BlogImage1,
  'BlogImage2.png': BlogImage2,
  'BlogImage3.png': BlogImage3
}

// Reactive state
const blogs = ref([])
const loading = ref(true)
const error = ref(null)
const currentIndex = ref(0)
const visibleItems = 3

// API endpoint or JSON file path
const API_URL = '/blogs-data.json'
// Alternative: You can use an actual API endpoint like:
// const API_URL = 'https://your-api.com/api/blogs'

// Fetch blogs data from JSON file or API
const fetchBlogsData = async () => {
  try {
    loading.value = true
    error.value = null
    
    const response = await fetch(API_URL)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs data: ${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    
    // Map the fetched data and resolve image paths
    blogs.value = data.blogs.map(blog => ({
      ...blog,
      image: imageMap[blog.image] || blog.image // Use mapped image or fallback to original path
    }))
    
    // Reset carousel to start position when data is loaded
    if (blogs.value.length > 0) {
      currentIndex.value = visibleItems
    }
    
  } catch (err) {
    console.error('Error fetching blogs data:', err)
    error.value = err.message
    // Data will remain empty array, showing error state instead
  } finally {
    loading.value = false
  }
}

// Fetch data on component mount
onMounted(() => {
  fetchBlogsData()
})

// Infinite scroll logic
const displayBlogs = computed(() => {
  if (blogs.value.length === 0) return []
  const cloneCount = visibleItems
  const startClones = blogs.value.slice(-cloneCount)
  const endClones = blogs.value.slice(0, cloneCount)
  return [...startClones, ...blogs.value, ...endClones]
})

function nextSlide() {
  if (blogs.value.length === 0) return
  currentIndex.value++
  if (currentIndex.value >= blogs.value.length + visibleItems) {
    setTimeout(() => {
      currentIndex.value = visibleItems
    }, 600)
  }
}

function prevSlide() {
  if (blogs.value.length === 0) return
  currentIndex.value--
  if (currentIndex.value < 0) {
    setTimeout(() => {
      currentIndex.value = blogs.value.length - 1
    }, 600)
  }
}

function goToSlide(index) {
  if (blogs.value.length === 0) return
  currentIndex.value = index
}
</script>

<style scoped>
@font-face {
  font-family: 'PoppinsCustom';
  src: url('../assets/fonts/Poppins-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.blogs-section {
  background-color: #010101;
  color: #fff;
  text-align: center;
  padding: 6rem 0 4rem;
  font-family: 'PoppinsCustom', sans-serif;
  position: relative;
}

/* Heading Section */
.section-heading {
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.2;
}

.heading-top {
  font-size: 1.2rem;
  font-weight: 600;
  color: #b37cf7;
  text-transform: capitalize;
  margin-bottom: 0.2rem;
  letter-spacing: 0.5px;
}

.heading-bottom {
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
}

/* Carousel Section */
.carousel-container {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
}

.carousel-wrapper {
  overflow: hidden;
  width: 100%;
}

.carousel {
  display: flex;
  transition: transform 0.6s ease;
}

.blog-card {
  flex: 0 0 calc(100% / 3);
  padding: 0 0.8rem;
  box-sizing: border-box;
}

.blog-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}

.blog-content {
  background: #111;
  border-radius: 0 0 16px 16px;
  padding: 1.2rem;
  text-align: left;
  box-shadow: 0 0 20px rgba(179, 124, 247, 0.15);
}

.blog-content h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}

.blog-content p {
  font-size: 0.85rem;
  color: #aaa;
  line-height: 1.5;
}

/* Arrows */
.arrow {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: 0.8;
  z-index: 5;
}

.arrow:hover {
  opacity: 1;
}

.arrow.left {
  left: -60px;
}

.arrow.right {
  right: -60px;
}

/* Dots */
.dots {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #444;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.dot.active {
  background: #b37cf7;
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

/* Arrow Disabled State */
.arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.arrow:disabled:hover {
  opacity: 0.3;
}

/* Responsive */
@media (max-width: 1024px) {
  .blog-card {
    flex: 0 0 50%;
  }
  .arrow.left {
    left: 10px;
  }
  .arrow.right {
    right: 10px;
  }
}

@media (max-width: 768px) {
  .blog-card {
    flex: 0 0 100%;
  }
  .arrow {
    display: none;
  }
}
</style>
