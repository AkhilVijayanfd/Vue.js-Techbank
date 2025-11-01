<template>
  <div class="product-card">
    <div class="product-image-wrapper">
      <img :src="image" :alt="title" class="product-image" />
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ title }}</h3>
      <p class="product-description">{{ description }}</p>
      <button class="view-btn">View →</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String
})
</script>

<style scoped>
.product-card {
  background: rgba(20, 20, 20, 0.95);
  border-radius: 20px;
  overflow: hidden;
  width: 580px;
  height: 420px;
  text-align: left;
  color: #fff;
  border: 1px solid rgba(179, 124, 247, 0.2);
  box-shadow: 0 0 20px rgba(179, 124, 247, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 30px rgba(179, 124, 247, 0.35);
}

.product-image-wrapper {
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
}

.product-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.product-description {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.view-btn {
  background: linear-gradient(90deg, #a855f7, #9333ea);
  border: none;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(179, 124, 247, 0.4);
}
</style>
