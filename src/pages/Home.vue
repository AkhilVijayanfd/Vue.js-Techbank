<template>
  <section class="home">
    <div class="home-card">
      <!-- Banner Image -->
      <div class="image-container">
        <img :src="homeimage" alt="TechBank Home Banner" class="home-image" />

        <!-- Info Box (Top-right) -->
        <div class="info-box">
          <p>
            At <span>TechBank</span>, we’re pioneering the technologies of tomorrow.
            From blockchain to AI, we’re building the digital landscape of the future, today.
          </p>
        </div>
      </div>

      <!-- Bottom Text and Button -->
      <div class="bottom-section">
        <p class="subtitle">
          Empowering Businesses. Enabling Growth.<br />
          TechBank’s Products for Success.
        </p>
        <button class="view-products">View Products →</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import homeimage from '../assets/homeimage.png'
</script>

<style scoped>
/* Black background full width */
.home {
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
}

/* White rounded card */
.home-card {
  width: 90%;
  max-width: 1440px;
  background-color: #fff;
  border-radius: 35px;
  overflow: hidden;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Image section */
.image-container {
  position: relative;
  width: 100%;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  overflow: hidden;
}

.home-image {
  width: 100%;
  display: block;
  object-fit: cover;
}

/* Info box */
.info-box {
  position: absolute;
  top: 30px;
  right: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 15px 20px;
  max-width: 360px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.info-box p {
  font-size: 14px;
  color: #333;
  line-height: 1.4;
}

.info-box span {
  color: #7b3ff3;
  font-weight: 600;
}

/* Bottom section */
.bottom-section {
  text-align: center;
  padding: 30px 0 50px;
}

.subtitle {
  font-size: 16px;
  color: #333;
  margin-bottom: 25px;
}

.view-products {
  background-color: #7b3ff3;
  color: #fff;
  border: none;
  padding: 14px 32px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-products:hover {
  background-color: #5d29c4;
}

/* Responsive tweaks */
@media (max-width: 1024px) {
  .info-box {
    top: 20px;
    right: 20px;
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .info-box {
    position: static;
    margin: 15px;
  }
  .bottom-section {
    padding: 20px 10px 40px;
  }
}
</style>
