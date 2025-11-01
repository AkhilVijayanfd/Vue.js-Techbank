<template>
  <section class="brands-section">
    <h2 class="section-title">OUR CONNECTED BRANDS</h2>

    <div class="brands-grid">
      <div class="brand-card" v-for="(brand, index) in brands" :key="index">
        <div class="logo-container">
          <img :src="brand.image" :alt="brand.name" class="brand-logo" />
          <div class="platform"></div>
        </div>
        <h3 class="brand-name">{{ brand.name }}</h3>
        <p class="brand-desc">{{ brand.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import BTigers from '../assets/BTigers.png'
import KBTigers from '../assets/KBTigers.png'
import LTigers from '../assets/LBTigers.png'

const brands = [
  {
    image: BTigers,
    name: 'BLUE TIGERS',
    description: 'Our global esports and gaming partner network.',
  },
  {
    image: KBTigers,
    name: 'KOCHI BLUE TIGERS',
    description: 'Regional branch delivering next-level gaming innovation.',
  },
  {
    image: LTigers,
    name: 'BLUE TIGERS LONDON',
    description: 'Expanding innovation across Europe and beyond.',
  },
]
</script>

<style scoped>
.brands-section {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 6rem 2rem;
  font-family: 'Poppins', sans-serif;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 3.5rem;
  color: #b37cf7;
}

.brands-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.brand-card {
  background: linear-gradient(180deg, #0a0a0a, #151515);
  border-radius: 20px;
  width: 260px;
  padding: 2rem 1.5rem 2.5rem;
  text-align: center;
  box-shadow: 0 0 30px rgba(179, 124, 247, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.brand-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 35px rgba(179, 124, 247, 0.4);
}

.logo-container {
  position: relative;
  margin-bottom: 1.8rem;
}

.brand-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  z-index: 2;
  position: relative;
}

.platform {
  width: 80%;
  height: 14px;
  background: #0d0d0d;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 8px 15px rgba(179, 124, 247, 0.3);
}

.brand-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #b37cf7;
  margin-bottom: 0.5rem;
}

.brand-desc {
  font-size: 0.9rem;
  color: #ccc;
  opacity: 0.9;
}
</style>
