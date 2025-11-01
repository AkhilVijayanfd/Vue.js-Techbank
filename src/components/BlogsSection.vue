<template>
  <section class="blogs-section">
    <div class="container">
      <h2 class="section-title"><span>Blogs</span></h2>

      <div class="carousel-wrapper">
        <!-- navigation arrows -->
        <button class="nav-btn prev" @click="prevSlide">‹</button>

        <div class="carousel" ref="carousel">
          <div v-for="(blog, index) in blogs" :key="index" class="blog-card">
            <img :src="blog.image" :alt="blog.title" class="blog-image" />
            <div class="blog-content">
              <h3>{{ blog.title }}</h3>
              <p>{{ blog.desc }}</p>
            </div>
          </div>
        </div>

        <button class="nav-btn next" @click="nextSlide">›</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const blogs = [
  {
    image: '/images/blog1.png',
    title: 'SMART AI CHATBOT',
    desc: 'Enhance customer engagement with personalized, AI-driven interactions.'
  },
  {
    image: '/images/blog2.png',
    title: 'SMART AI CHATBOT',
    desc: 'Enhance customer engagement with personalized, AI-driven interactions.'
  },
  {
    image: '/images/blog3.png',
    title: 'SMART AI CHATBOT',
    desc: 'Enhance customer engagement with personalized, AI-driven interactions.'
  }
]

const carousel = ref(null)

function nextSlide() {
  if (carousel.value) carousel.value.scrollLeft += 320
}

function prevSlide() {
  if (carousel.value) carousel.value.scrollLeft -= 320
}
</script>

<style scoped>
.blogs-section {
  background-color: #000;
  color: #fff;
  padding: 80px 0;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
}

.section-title span {
  color: #9b59b6;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.carousel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.blog-card {
  flex: 0 0 300px;
  background: #111;
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-6px);
}

.blog-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.blog-content {
  padding: 20px;
}

.blog-content h3 {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.blog-content p {
  font-size: 0.9rem;
  color: #ccc;
}

/* ✅ Clean white arrows without any background */
.nav-btn {
  background: none;          /* No background */
  border: none;              /* No border */
  color: #fff;               /* White arrow */
  font-size: 2.5rem;         /* Large clean arrow */
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 5;
}

.nav-btn:hover {
  color: #9b59b6;            /* Purple accent on hover */
}

.prev {
  position: absolute;
  left: -40px;
}

.next {
  position: absolute;
  right: -40px;
}
</style>
