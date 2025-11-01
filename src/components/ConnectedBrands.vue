<template>
  <section class="brands-section">
    <h2 class="section-title">OUR CONNECTED BRANDS</h2>

    <div class="brands-grid">
      <div class="brand-card" v-for="(brand, index) in brands" :key="index">
        <img :src="brand.image" :alt="brand.name" />
        <h3>{{ brand.name }}</h3>
        <p>{{ brand.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = [
  {
    image: '@/assets/brand1.png',
    name: 'BLUE TIGERS',
    description: 'Our global esports and gaming partner network.',
  },
  {
    image: '@/assets/brand2.png',
    name: 'KOCHI BLUE TIGERS',
    description: 'Regional branch delivering next-level gaming innovation.',
  },
  {
    image: '@/assets/brand3.png',
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
  letter-spacing: 1px;
  margin-bottom: 3rem;
  color: #b37cf7;
}

.brands-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.brand-card {
  background: #111;
  border-radius: 20px;
  width: 340px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 0 20px rgba(179, 124, 247, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.brand-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 30px rgba(179, 124, 247, 0.35);
}

.brand-card img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 1.5rem;
}

.brand-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #b37cf7;
}

.brand-card p {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
