<template>
  <div class="product-card" role="article">
    <!-- Image -->
    <div class="product-image-container">
      <img :src="image" :alt="title" class="product-image" />
    </div>

    <!-- Content -->
    <div class="product-info">
      <h3 class="product-title">{{ title }}</h3>
      <p class="product-description">{{ description }}</p>

      <button class="view-btn" aria-label="'View ' + title">View →</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false, default: '' }
})
</script>

<style scoped>
.product-card {
  width: 540px;
  background: #0c0c0c;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease;
}

.product-card:hover {
  transform: translateY(-6px);
}

/* image */
.product-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* content */
.product-info {
  position: relative;
  padding: 20px;
  text-align: left;
}

.product-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.product-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 45px;
}

/* button bottom-right inside */
.view-btn {
  position: absolute;
  bottom: 16px;
  right: 20px;
  background: linear-gradient(90deg, #a855f7, #9333ea);
  color: #fff;
  border: none;
  padding: 8px 18px;
  border-radius: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.view-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .product-card {
    width: 100%;
    max-width: 95%;
  }

  .product-image-container {
    height: auto;
  }

  .product-image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .product-info {
    padding: 16px;
  }

  .product-title {
    font-size: 1rem;
  }

  .product-description {
    font-size: 0.9rem;
  }
}
</style>
