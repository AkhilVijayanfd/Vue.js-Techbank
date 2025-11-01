<template>
  <section class="home">
    <img :src="homeimage" alt="TechBank Home Banner" class="home-image" />
  </section>
</template>

<script setup>
import homeimage from '../assets/homeimage.png'
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-image {
  width: 100%;
  max-width: 1440px;
  height: 830px;
  object-fit: cover;
}
</style>
