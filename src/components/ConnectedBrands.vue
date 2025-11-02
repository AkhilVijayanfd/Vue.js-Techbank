<template>
  <section class="brands-section">
    <div class="section-header">
      <p class="sub-text">From One Root, Many Branches</p>
      <h2 class="section-title">OUR CONNECTED BRANDS</h2>
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
    description: 'Fueling the future of film, sports, and technology.',
  },
  {
    image: LTigers, // ✅ swapped here (previously KBTigers)
    name: 'KOCHI BLUE TIGERS',
    description: 'A dynamic cricket team redefining the game with passion and power.',
  },
  {
    image: KBTigers, // ✅ swapped here (previously LTigers)
    name: 'BLUE TIGERS LONDON',
    description: 'A creative production house bringing bold stories to life.',
  },
]
</script>

<style scoped>
.brands-section {
  background-color: #000;
  color: #fff;
  padding: 6rem 8rem;
  font-family: 'Poppins', sans-serif;
}

/* ✅ Centered section title */
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

/* ✅ 3 Cards aligned in one row */
.brands-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 2.5rem;
}

/* ✅ Card Styling */
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

/* ✅ Left aligned content */
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

/* ✅ Icons with neutral color */
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

/* ✅ Image Section (centered and enlarged) */
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

/* 🚫 Removed the round shadow completely */
.brand-podium {
  display: none;
}
</style>
