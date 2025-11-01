import { ref } from "vue";

export function useContactForm() {
  const name = ref("");
  const email = ref("");
  const phone = ref("");
  const message = ref("");

  const errors = ref({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const validatePhone = (phoneValue) => {
    const phoneRegex = /^[0-9]{10}$/; // basic 10-digit check
    return phoneRegex.test(phoneValue);
  };

  const validateForm = () => {
    let valid = true;

    // Reset all errors first
    errors.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!name.value.trim()) {
      errors.value.name = "Please enter your name.";
      valid = false;
    }

    if (!email.value.trim()) {
      errors.value.email = "Please enter your email.";
      valid = false;
    } else if (!validateEmail(email.value)) {
      errors.value.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!phone.value.trim()) {
      errors.value.phone = "Please enter your phone number.";
      valid = false;
    } else if (!validatePhone(phone.value)) {
      errors.value.phone = "Phone number must be 10 digits.";
      valid = false;
    }

    if (!message.value.trim()) {
      errors.value.message = "Please enter your message.";
      valid = false;
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Data saved successfully!");
      // Reset form after success
      name.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
    }
  };

  return {
    name,
    email,
    phone,
    message,
    errors,
    handleSubmit,
  };
}
