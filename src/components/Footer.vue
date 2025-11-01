<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Left Section -->
      <div class="footer-left">
        <h2 class="footer-logo">TechBank</h2>
        <p class="footer-tagline">ENGINEERING THE FUTURE</p>
        <router-link to="/contact" class="contact-btn">CONTACT US</router-link>
        <div class="social-icons">
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <!-- Center Section -->
      <div class="footer-center">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <!-- Right Section -->
      <div class="footer-right">
        <h4>Offices</h4>
        <p>Infopark<br />Kochi – Kerala</p>
        <p class="footer-email">hi@techbank.com</p>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="footer-bottom">
      <p>© 2025 TechBank</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background: linear-gradient(to bottom, #000, #3a0070 60%, #000 100%);
  color: #fff;
  padding: 80px 100px 30px;
  font-family: 'Poppins', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 40px;
}

/* --- LEFT SECTION --- */
.footer-left {
  flex: 1;
  min-width: 250px;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.footer-tagline {
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  color: #ccc;
  margin-bottom: 20px;
}

.contact-btn {
  background: none;
  border: 1px solid #9b59b6;
  color: #fff;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.contact-btn:hover {
  background: #9b59b6;
}

/* --- SOCIAL ICONS --- */
.social-icons {
  display: flex;
  gap: 20px;
  margin-top: 25px;
}

.social-icons a {
  color: #fff;
  font-size: 1.3rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover {
  color: #9b59b6;
  transform: scale(1.15);
}

/* --- CENTER SECTION --- */
.footer-center ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-center li {
  margin-bottom: 10px;
}

.footer-center a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-center a:hover {
  color: #9b59b6;
}

/* --- RIGHT SECTION --- */
.footer-right {
  min-width: 200px;
}

.footer-right h4 {
  margin-bottom: 10px;
  font-size: 1rem;
  color: #fff;
}

.footer-right p {
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.4;
}

.footer-email {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #9b59b6;
}

/* --- BOTTOM SECTION --- */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  font-size: 0.85rem;
  color: #aaa;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #9b59b6;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer {
    padding: 60px 30px 20px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
