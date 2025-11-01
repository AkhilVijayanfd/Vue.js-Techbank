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

        <form class="contact-form" @submit.prevent="handleSubmit">
          <!-- Name -->
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model.trim="form.name" placeholder="Enter your name" />
            <span v-if="errors.name" class="error">{{ errors.name }}</span>
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model.trim="form.email" placeholder="Enter your email" />
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
          </div>

          <!-- Phone -->
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <div class="phone-input">
              <span class="flag">🇮🇳</span>
              <input type="tel" id="phone" v-model.trim="form.phone" placeholder="Enter your phone number" />
            </div>
            <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
          </div>

          <!-- Message -->
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model.trim="form.message" rows="4" placeholder="Write your message"></textarea>
            <span v-if="errors.message" class="error">{{ errors.message }}</span>
          </div>

          <!-- Submit -->
          <button type="submit" class="submit-btn">Send Message →</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const errors = reactive({});

const validate = () => {
  Object.keys(errors).forEach((key) => delete errors[key]); // clear previous errors

  // Name validation
  if (!form.name.trim()) errors.name = "Name is required";
  else if (!/^[A-Za-z\s]+$/.test(form.name)) errors.name = "Please enter a valid name";

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!emailRegex.test(form.email)) errors.email = "Enter a valid email address";

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!form.phone.trim()) errors.phone = "Phone number is required";
  else if (!phoneRegex.test(form.phone)) errors.phone = "Enter a valid 10-digit number";

  // Message validation
  if (!form.message.trim()) errors.message = "Message cannot be empty";

  return Object.keys(errors).length === 0;
};

const handleSubmit = () => {
  if (validate()) {
    alert("✅ Data saved successfully!");
    form.name = "";
    form.email = "";
    form.phone = "";
    form.message = "";
  }
};
</script>

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
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  gap: 0.8rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  font-size: 0.85rem;
  color: #aaa;
  margin-bottom: 0.3rem;
}

.form-group input,
.form-group textarea {
  background: transparent;
  border: 1px solid #333;
  color: #fff;
  padding: 0.75rem 1rem;
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

/* -------------------- ERROR TEXT -------------------- */
.error {
  color: #ff4d4d;
  font-size: 0.8rem;
  margin-top: 0.2rem;
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
  margin-top: 0.6rem;
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
    gap: 1rem;
  }

  .submit-btn {
    align-self: center;
  }
}
</style>
