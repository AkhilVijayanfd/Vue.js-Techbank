<template>
  <section class="contact-section">
    <div class="contact-container">
      <!-- Left Image -->
      <div class="contact-left">
        <img src="../assets/contactImage.png" alt="Contact TechBank" class="contact-image" />
      </div>

      <!-- Right Form -->
      <div class="contact-right">
        <h2 class="contact-title">BUILD THE FUTURE WITH US</h2>
        <h3 class="form-heading">CONTACT US</h3>

        <form class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <div class="phone-input">
              <span class="flag">🇮🇳</span>
              <input type="tel" id="phone" placeholder="Enter your phone number" required />
            </div>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="4" placeholder="Write your message"></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message →</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* -------------------- BASE SECTION -------------------- */
.contact-section {
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding: 4rem 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "Poppins", sans-serif;
}

/* -------------------- FLEX LAYOUT -------------------- */
.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1300px;
  width: 100%;
  gap: 2.5rem;
}

/* -------------------- LEFT IMAGE -------------------- */
.contact-left {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.contact-image {
  width: 100%;
  max-width: 520px;
  border-radius: 22px;
  object-fit: cover;
  box-shadow: 0 0 25px rgba(179, 124, 247, 0.35);
  transition: transform 0.3s ease;
}

.contact-image:hover {
  transform: scale(1.02);
}

/* -------------------- RIGHT FORM -------------------- */
.contact-right {
  flex: 1;
  padding-top: 0; /* aligns perfectly with image */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* left align form */
}

.contact-title {
  font-size: 0.9rem;
  color: #b37cf7;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.3rem;
}

.form-heading {
  font-size: 1.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

/* -------------------- FORM STYLES -------------------- */
.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* reduced gap between fields */
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  font-size: 0.85rem;
  color: #aaa;
  margin-bottom: 0.35rem;
}

.form-group input,
.form-group textarea {
  background: transparent;
  border: 1px solid #333;
  color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #b37cf7;
  outline: none;
}

/* -------------------- PHONE INPUT -------------------- */
.phone-input {
  display: flex;
  align-items: center;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
}

.phone-input .flag {
  font-size: 1.2rem;
  margin-right: 0.6rem;
}

.phone-input input {
  border: none;
  background: transparent;
  color: #fff;
  font-size: 0.95rem;
  width: 100%;
}

.phone-input input:focus {
  outline: none;
}

/* -------------------- BUTTON -------------------- */
.submit-btn {
  background: linear-gradient(90deg, #b37cf7, #8b5cf6);
  border: none;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(179, 124, 247, 0.4);
}

/* -------------------- RESPONSIVE -------------------- */
@media (max-width: 1024px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-right {
    align-items: center;
    width: 90%;
  }

  .contact-section {
    padding: 2rem;
  }

  .contact-form {
    gap: 1.2rem;
  }

  .submit-btn {
    align-self: center;
  }
}
</style>
