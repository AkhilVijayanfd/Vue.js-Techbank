<template>
  <header class="header">
    <nav class="nav-links">
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">Teams</a>
      <a href="#">Career</a>
      <a href="#">Blog</a>
    </nav>

    <button class="contact-btn">Contact Us</button>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  padding: 1.5rem 3rem;
  height: 100px;
  font-family: 'Poppins', sans-serif;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #b37cf7; /* purple accent matching Figma gradient */
}

.contact-btn {
  background-color: transparent;
  border: 1.5px solid #ffffff;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background-color: #b37cf7;
  border-color: #b37cf7;
  color: #ffffff;
}
</style>
