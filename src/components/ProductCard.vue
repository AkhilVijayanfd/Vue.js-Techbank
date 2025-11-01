<template>
  <div class="product-card">
    <img :src="image" :alt="title" class="product-image" />
    <div class="product-info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
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
  background: #111111;
  border-radius: 20px;
  overflow: hidden;
  width: 586px;
  height: 458px;
  text-align: center;
  color: #ffffff;
  box-shadow: 0 0 20px rgba(179, 124, 247, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 30px rgba(179, 124, 247, 0.35);
}

.product-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.product-info p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.view-btn {
  background: #b37cf7;
  border: none;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.view-btn:hover {
  background: #9a5ff2;
}
</style>
