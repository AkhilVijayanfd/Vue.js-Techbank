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
    </div>

    <!-- CONNECTED BRANDS -->
    <ConnectedBrands />
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import ConnectedBrands from './ConnectedBrands.vue'

import dwallet from '../assets/dwallet.png'
import dbank from '../assets/dbank.png'
</script>

<style scoped>
.products-section {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 6rem 2rem;
  font-family: 'Poppins', sans-serif;
}

.section-title {
  font-size: 1.8rem;
  letter-spacing: 1px;
  margin-bottom: 3rem;
  color: #b37cf7;
  text-transform: uppercase;
}

/* Products layout */
.products-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

/* Technologies placeholder */
.technologies-section {
  margin-top: 6rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .products-grid {
    flex-direction: column;
    align-items: center;
  }
}
</style>
