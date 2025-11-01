<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Left Section -->
      <div class="footer-left">
        <div class="footer-logo">
          <img :src="logo" alt="TechBank Logo" class="logo-icon" />
          <h3 class="footer-title">TechBank</h3>
        </div>
        <p class="footer-text">ENGINEERING THE FUTURE</p>
        <button class="contact-btn">CONTACT US</button>
        <div class="social-icons">
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>

      <!-- Right Section -->
      <div class="footer-right">
        <div class="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="footer-office">
          <h4>Offices</h4>
          <p>Infopark</p>
          <p>Kochi - Kerala</p>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="footer-bottom">
      <p>© 2025 TechBank</p>
      <div class="footer-policies">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
      </div>
    </div>

    <!-- Background Text -->
    <div class="footer-bg-text">TECHBANK</div>
  </footer>
</template>

<script setup>
import logo from "../assets/footerBackground.png";
</script>

<style scoped>
.footer {
  position: relative;
  background: linear-gradient(to bottom, #000000, #10001f 40%, #2a0050 75%, #5a00a1);
  color: white;
  padding: 4rem 6rem 2rem;
  overflow: hidden;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  z-index: 2;
  position: relative;
}

.footer-left {
  max-width: 300px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 40px;
  height: 40px;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-text {
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: #e0e0e0;
  letter-spacing: 0.5px;
}

.contact-btn {
  margin: 1rem 0;
  background: transparent;
  border: 1px solid #ffffff;
  color: #fff;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}

.contact-btn:hover {
  background: #b517ff;
  border-color: #b517ff;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icons i {
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;
}

.social-icons i:hover {
  color: #b517ff;
}

.footer-right {
  display: flex;
  gap: 5rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin: 0.5rem 0;
}

.footer-links ul li a {
  color: #ffffffcc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.footer-links ul li a:hover {
  color: #b517ff;
}

.footer-office h4 {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.footer-office p {
  margin: 0.3rem 0;
  color: #cccccc;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  padding-top: 1rem;
  font-size: 0.9rem;
  color: #cccccc;
  z-index: 2;
  position: relative;
}

.footer-policies a {
  color: #cccccc;
  text-decoration: none;
  margin-left: 1.5rem;
  transition: color 0.3s;
}

.footer-policies a:hover {
  color: #b517ff;
}

/* BACKGROUND TEXT STYLE */
.footer-bg-text {
  position: absolute;
  bottom: -60px; /* partially hidden */
  left: 0;
  font-size: 10rem;
  font-weight: 800;
  letter-spacing: 20px;
  color: rgba(255, 255, 255, 0.05);
  text-transform: uppercase;
  z-index: 1;
  width: 100%;
  text-align: center;
  pointer-events: none;
  user-select: none;
  line-height: 0.8;
}

/* RESPONSIVE DESIGN */
@media (max-width: 900px) {
  .footer {
    padding: 3rem 2rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-right {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-bg-text {
    font-size: 6rem;
    bottom: -40px;
  }
}
</style>
