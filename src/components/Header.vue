<template>
  <header class="header">
    <div class="logo-section">
      <img :src="logo" alt="TechBank Logo" class="logo-icon" />
      <span class="logo-text">TechBank</span>
    </div>

    <nav class="nav-links">
      <router-link to="/" class="nav-item">Home</router-link>
      <a href="#" class="nav-item">Products</a>
      <a href="#" class="nav-item">Teams</a>
      <a href="#" class="nav-item">Career</a>
      <a href="#" class="nav-item">Blog</a>
    </nav>

    <router-link to="/contact" class="contact-btn">Contact Us</router-link>
  </header>
</template>

<script setup>
import logo from '../assets/logo/tblogo.png'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
@font-face {
  font-family: 'Nineta';
  src: url('@/assets/fonts/Nineta-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  padding: 1rem 3rem;
  height: 100px;
  font-family: 'Poppins', sans-serif;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 33px;
  height: auto;
}

.logo-text {
  font-family: 'Nineta', sans-serif;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 2rem;
  margin-left: -180px; /* adjust to balance center alignment similar to Figma */
}

.nav-item {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  font-weight: 400;
}

.nav-item:hover {
  color: #b37cf7;
}

.router-link-active {
  color: #b37cf7;
}

.contact-btn {
  background-color: transparent;
  border: 1.2px solid #ffffff;
  color: #ffffff;
  padding: 0.5rem 1.3rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

.contact-btn:hover {
  background-color: #b37cf7;
  border-color: #b37cf7;
  color: #ffffff;
}
</style>
