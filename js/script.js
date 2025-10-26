'use strict';

// entry point: prueba que el script se cargó
//console.log('bit-1 script loaded');

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("emailAddress").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    //  consola log
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    //  Mostrar modal con nombre personalizado
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.innerHTML = `Thank you, <strong>${name}</strong>! Your message has been sent successfully.`;

    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();

    form.reset();
  });
});