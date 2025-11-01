<template>
  <section class="products-section">
    <!-- PRODUCTS -->
    <h2 class="section-title">INNOVATIVE PRODUCTS</h2>
    <div class="products-grid">
      <ProductCard
        image="@/assets/dwallet.png"
        title="DWallet"
        description="Secure decentralized wallet for all your crypto assets."
      />
      <ProductCard
        image="@/assets/dbank.png"
        title="DBank"
        description="Revolutionizing digital banking with blockchain technology."
      />
    </div>

    <!-- TECHNOLOGIES -->
    <div class="technologies-section">
      <h2 class="section-title">TECHNOLOGIES</h2>
     
    </div>

    <!-- IMPORTED CONNECTED BRANDS SECTION -->
    <ConnectedBrands />
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import ConnectedBrands from './ConnectedBrands.vue'
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
}

/* Products */
.products-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

/* Technologies */
.technologies-section {
  margin-top: 6rem;
}

.tech-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;
}

.tech-logos img {
  width: 100px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.tech-logos img:hover {
  opacity: 1;
}
</style>
