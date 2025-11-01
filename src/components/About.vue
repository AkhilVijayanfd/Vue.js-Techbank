<template>
  <section class="about-section">
    <h2 class="about-title">ABOUT</h2>
    <p class="about-text">
      TechBank is a blockchain product company creating decentralized tools like Dbank,
      Dwallet, and Dvault to simplify digital finance. We embrace modern, transparent,
      and user-friendly solutions for managing assets in the Web3 world.
    </p>

    <div class="about-stats">
      <div class="stat-box">
        <h3>4</h3>
        <p>Products</p>
      </div>
      <div class="stat-box">
        <h3>2000+</h3>
        <p>Clients</p>
      </div>
      <div class="stat-box">
        <h3>1M+</h3>
        <p>Downloads</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about-section {
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 6rem 2rem;
  font-family: 'Poppins', sans-serif;
}

.about-title {
  font-size: 2rem;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.about-text {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1rem;
  opacity: 0.85;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.about-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.stat-box h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #b37cf7; /* purple accent */
}

.stat-box p {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-top: 0.3rem;
}
</style>
