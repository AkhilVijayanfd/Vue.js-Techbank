<template>
  <section class="contact-section">
    <div class="contact-container">
      <!-- Left Section (Image + Text) -->
      <div class="contact-left">

        <h3 class="left-text">
          LET’S CONNECT AND CREATE THE NEXT BIG THING IN TECH
        </h3>
      </div>

      <!-- Right Section (Form) -->
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
            <textarea id="message" rows="5" placeholder="Write your message"></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message →</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contact-section {
  background: #000;
  color: #fff;
  min-height: 90vh;
  padding: 4rem 6rem;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1300px;
  width: 100%;
}

.contact-left {
  text-align: center;
}

.contact-image {
  width: 85%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(179, 124, 247, 0.2);
  margin-bottom: 2rem;
}

.left-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #b37cf7;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.contact-right {
  background: rgba(20, 20, 20, 0.85);
  border-radius: 20px;
  padding: 2.5rem 3rem;
  box-shadow: 0 0 20px rgba(179, 124, 247, 0.15);
}

.contact-title {
  font-size: 1.1rem;
  color: #b37cf7;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  letter-spacing: 1px;
}

.form-heading {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 0.9rem;
  color: #bbb;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  background-color: #111;
  border: 1px solid #333;
  color: #fff;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #b37cf7;
  outline: none;
}

.phone-input {
  display: flex;
  align-items: center;
  background-color: #111;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 0.5rem 0.8rem;
}

.phone-input .flag {
  font-size: 1.3rem;
  margin-right: 0.6rem;
}

.phone-input input {
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  width: 100%;
}

.phone-input input:focus {
  outline: none;
}

.submit-btn {
  background: linear-gradient(90deg, #b37cf7, #8b5cf6);
  border: none;
  color: #fff;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  width: fit-content;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(179, 124, 247, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .contact-right {
    margin: 0 auto;
    width: 90%;
  }

  .contact-section {
    padding: 2rem 1.5rem;
  }

  .left-text {
    font-size: 1rem;
  }
}
</style>
