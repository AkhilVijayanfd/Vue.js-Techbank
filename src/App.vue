<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './pages/Home.vue'
import AboutSection from './components/About.vue'
import ProductsAndTechnologies from './components/ProductsAndTechnologies.vue'
import BlogsSection from './components/BlogsSection.vue'
</script>

<template>
  <div class="app">
    <Header />
    <main>
      <Home />
      <AboutSection />
      <ProductsAndTechnologies />
      <BlogsSection />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
