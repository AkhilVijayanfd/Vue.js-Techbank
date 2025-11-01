<template>
  <section class="products-section">
    <!-- PRODUCTS -->
    <h2 class="section-title">INNOVATIVE PRODUCTS</h2>

    <div class="products-grid">
      <ProductCard
        :image="dwallet"
        title="DWALLET"
        description="A secure, intuitive crypto wallet for managing your digital assets."
      />
      <ProductCard
        :image="dbank"
        title="DBANK"
        description="A secure staking platform for earning rewards on your digital assets."
      />
    </div>

    <!-- TECHNOLOGIES -->
    <div class="technologies-section">
      <h2 class="section-title">TECHNOLOGIES</h2>

      <!-- Two rows of 6 logos each -->
      <div class="tech-logos">
        <div class="logo-row">
          <img v-for="(logo, index) in topRow" :key="'top-' + index" :src="logo" alt="Technology Logo" />
        </div>
        <div class="logo-row">
          <img v-for="(logo, index) in bottomRow" :key="'bottom-' + index" :src="logo" alt="Technology Logo" />
        </div>
      </div>
    </div>

    <!-- CONNECTED BRANDS -->
    <ConnectedBrands />
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import ConnectedBrands from './ConnectedBrands.vue'

// Product images
import dwallet from '../assets/dwallet.png'
import dbank from '../assets/dbank.png'

// Technology logos (mirrored arrangement)
import logo110 from '../assets/logo/logo110.png'
import logo29 from '../assets/logo/logo29.png'
import logo311 from '../assets/logo/logo311.png'
import logo412 from '../assets/logo/logo412.png'
import logo57 from '../assets/logo/logo57.png'
import logo68 from '../assets/logo/logo68.png'

const topRow = [logo110, logo29, logo311, logo412, logo57, logo68]
const bottomRow = [logo57, logo68, logo29, logo110, logo311, logo412]
</script>

<style scoped>
.products-section {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 6rem 2rem;
  font-family: 'Poppins', sans-serif;
}

/* Section title */
.section-title {
  font-size: 1.8rem;
  letter-spacing: 1px;
  margin-bottom: 3rem;
  color: #b37cf7;
  text-transform: uppercase;
}

/* Product cards */
.products-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

/* Technologies */
.technologies-section {
  margin-top: 8rem;
}

.tech-logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 3rem;
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
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.logo-row img:hover {
  opacity: 1;
  transform: scale(1.05);
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
