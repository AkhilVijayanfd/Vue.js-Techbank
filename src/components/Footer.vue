<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Left column: logo / tagline / contact + socials -->
      <div class="footer-left">
        <div class="footer-logo">
          <img :src="tblogo" alt="TechBank small logo" class="tblogo" />
          <h3 class="footer-title">TechBank</h3>
        </div>

        <h4 class="footer-tagline">ENGINEERING<br />THE FUTURE</h4>

        <div class="contact-section">
          <router-link to="/contact" class="contact-btn">CONTACT&nbsp;US</router-link>

          <!-- social icons now below -->
          <div class="social-icons">
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <!-- Right column: links & offices -->
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

    <!-- Bottom row: centered copyright, policies to right -->
    <div class="footer-bottom">
      <div class="bottom-left-spacer"></div>

      <div class="bottom-center">
        <p class="copyright">© 2025 TechBank</p>
      </div>

      <div class="bottom-right">
        <a href="#" class="policy">Privacy Policy</a>
        <a href="#" class="policy">Terms and Conditions</a>
      </div>
    </div>

    <!-- large background watermark -->
    <div class="footer-bg-text">TECHBANK</div>
  </footer>
</template>

<script setup>
import tblogo from '../assets/logo/tblogo.png'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap');

.footer {
  position: relative;
  background: linear-gradient(to bottom, #000000 0%, #0b0410 40%, #2a0050 75%, #4f008f 100%);
  color: white;
  padding: 4rem 6rem 2.5rem;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

/* Top content - two columns */
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.5rem;
  z-index: 2;
  position: relative;
}

/* LEFT SIDE */
.footer-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.4rem;
  max-width: 520px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tblogo {
  width: 44px;
  height: 44px;
  object-fit: contain;
}

.footer-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
}

/* tagline */
.footer-tagline {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #ffffff;
  line-height: 1.3;
  text-transform: uppercase;
  margin: 0;
}

/* contact + socials vertically stacked now */
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
  margin-top: 0.8rem;
}

/* Contact button */
.contact-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.65rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.6px;
  transition: all 0.25s ease;
}

.contact-btn:hover {
  background: #b517ff;
  border-color: #b517ff;
  color: #fff;
  transform: translateY(-2px);
}

/* Social icons below button */
.social-icons {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.social {
  font-size: 1.25rem;
  color: #ffffff;
  transition: color 0.25s ease, transform 0.25s ease;
}

.social:hover {
  color: #b517ff;
  transform: translateY(-3px);
}

/* RIGHT COLUMN */
.footer-right {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links ul li {
  margin: 0.5rem 0;
}

.footer-links ul li a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.18s ease;
}

.footer-links ul li a:hover {
  color: #b517ff;
}

.footer-office h4 {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.footer-office p {
  margin: 0.18rem 0;
  color: #d3cfd6;
}

/* FOOTER BOTTOM */
.footer-bottom {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  margin-top: 2.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 2;
  position: relative;
}

.bottom-center {
  text-align: center;
}

.copyright {
  margin: 0;
  color: #d9d3da;
  font-size: 0.95rem;
}

.bottom-right {
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}

.policy {
  color: #d9d3da;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.18s;
}

.policy:hover {
  color: #b517ff;
}

/* LARGE BACKGROUND WATERMARK */
.footer-bg-text {
  position: absolute;
  bottom: -60px;
  left: 0;
  font-size: 10rem;
  font-weight: 800;
  letter-spacing: 18px;
  color: rgba(255, 255, 255, 0.04);
  text-transform: uppercase;
  z-index: 1;
  width: 100%;
  text-align: center;
  pointer-events: none;
  user-select: none;
  line-height: 0.8;
}

/* RESPONSIVE */
@media (max-width: 1000px) {
  .footer {
    padding: 3rem 2rem 2.5rem;
  }
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
  }
  .footer-right {
    width: 100%;
    justify-content: space-between;
  }
  .footer-bottom {
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 0.75rem;
  }
  .bottom-right {
    justify-content: center;
  }
  .footer-bg-text {
    font-size: 6rem;
    bottom: -40px;
  }
}
</style>
