<template>
  <section class="blogs-section">
    <h2 class="section-title">TECHBANK BLOGS</h2>

    <div class="carousel-container">
      <!-- Left Arrow -->
      <button class="arrow left" @click="prevSlide">
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
      <button class="arrow right" @click="nextSlide">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Dots -->
    <div class="dots">
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
import { ref, computed } from 'vue'
import BlogImage1 from '../assets/BlogImage1.png'
import BlogImage2 from '../assets/BlogImage2.png'
import BlogImage3 from '../assets/BlogImage3.png'

const blogs = [
  { image: BlogImage1, title: 'SMART AI CHATBOT', desc: 'Enhance customer engagement with personalized, AI-driven interactions.' },
  { image: BlogImage2, title: 'BLOCKCHAIN BANKING', desc: 'Revolutionizing the finance ecosystem with decentralized technology.' },
  { image: BlogImage3, title: 'TECH INNOVATION', desc: 'Exploring next-gen solutions in digital transformation.' },
  { image: BlogImage1, title: 'SMART CONTRACTS', desc: 'Empowering transparency and automation with smart contract integration.' },
  { image: BlogImage2, title: 'CRYPTO WALLET', desc: 'Securely store, manage, and transact your digital assets.' },
  { image: BlogImage3, title: 'FINTECH FUTURE', desc: 'Driving change through innovation and AI-driven insights.' }
]

const currentIndex = ref(0)
const visibleItems = 3

// Infinite scroll logic — duplicate items at start and end
const displayBlogs = computed(() => {
  const total = blogs.length
  const cloneCount = visibleItems
  const startClones = blogs.slice(-cloneCount)
  const endClones = blogs.slice(0, cloneCount)
  return [...startClones, ...blogs, ...endClones]
})

const totalSlides = computed(() => displayBlogs.value.length)

function nextSlide() {
  currentIndex.value++
  if (currentIndex.value >= blogs.length + visibleItems) {
    // Smooth infinite reset
    setTimeout(() => {
      currentIndex.value = visibleItems
    }, 600)
  }
}

function prevSlide() {
  currentIndex.value--
  if (currentIndex.value < 0) {
    // Smooth infinite reset
    setTimeout(() => {
      currentIndex.value = blogs.length - 1
    }, 600)
  }
}

function goToSlide(index) {
  currentIndex.value = index
}
</script>

<style scoped>
.blogs-section {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 6rem 0 4rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 3rem;
  color: #b37cf7;
  text-transform: uppercase;
  letter-spacing: 1px;
}

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
  margin-bottom: 0.5rem;
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
