import "bootstrap";
import "./style.css";

window.onload = function() {
  let regexCardNumber = /^[0-9]{9}$/;
  let regexCVC = /^[0-9]{3}$/;
  let regexAmount = /^[0-9]+(\.[0-9]{1,2})?$/;
  let regexName = /^[A-Za-z]+$/;
  let regexLastName = /^[A-Za-z]+$/;
  let regexCity = /^[A-Za-z]+$/;
  let regexPostalCode = /^[0-9]{6}$/;

  let form = document.querySelector(".myform");
  form.addEventListener("submit", e => {
    e.preventDefault();
    //boton para cancelar todo
    let cancelButton = document.getElementById("cancelButton");
    cancelButton.addEventListener("click", function() {
      let form = document.querySelector(".myform");
      form.reset();
      let invalidInputs = form.querySelectorAll(".is-invalid");
      for (let input of invalidInputs) {
        input.classList.remove("is-invalid");
        input.nextElementSibling.textContent = "";
      }
      document.querySelector("#alert").classList.remove("show");
    });

    // Restablece la alerta y las clases de validación en cada envío del formulario
    document.querySelector("#alert").classList.remove("show");
    document.querySelectorAll(".is-invalid").forEach(element => {
      element.classList.remove("is-invalid");
    });

    let inputCard = document.querySelector("#inputCard");
    let inputAmount = document.querySelector("#inputamount");
    let inputCVC = document.querySelector("#inputcvc");
    let inputName = document.querySelector("#Name");
    let inputLastName = document.querySelector("#LastName");
    let inputCity = document.querySelector("#City");
    let inputPostalCode = document.querySelector("#PostalCode");

    let valid = true;
    //validacion
    if (!inputCard.value) {
      inputCard.classList.add("is-invalid");
      valid = false;
    } else if (!regexCardNumber.test(inputCard.value)) {
      inputCard.classList.add("is-invalid");
      valid = false;
    }

    if (!inputAmount.value) {
      inputAmount.classList.add("is-invalid");
      valid = false;
    } else if (!regexAmount.test(inputAmount.value)) {
      inputAmount.classList.add("is-invalid");
      valid = false;
    }

    if (!inputCVC.value) {
      inputCVC.classList.add("is-invalid");
      valid = false;
    } else if (!regexCVC.test(inputCVC.value)) {
      inputCVC.classList.add("is-invalid");
      valid = false;
    }

    if (!inputName.value) {
      inputName.classList.add("is-invalid");
      valid = false;
    } else if (!regexName.test(inputName.value)) {
      inputName.classList.add("is-invalid");
      valid = false;
    }

    if (!inputLastName.value) {
      inputLastName.classList.add("is-invalid");
      valid = false;
    } else if (!regexLastName.test(inputLastName.value)) {
      inputLastName.classList.add("is-invalid");
      valid = false;
    }

    if (!inputCity.value) {
      inputCity.classList.add("is-invalid");
      valid = false;
    } else if (!regexCity.test(inputCity.value)) {
      inputCity.classList.add("is-invalid");
      valid = false;
    }

    if (!inputPostalCode.value) {
      inputPostalCode.classList.add("is-invalid");
      valid = false;
    } else if (!regexPostalCode.test(inputPostalCode.value)) {
      inputPostalCode.classList.add("is-invalid");
      valid = false;
    }

    if (!valid) {
      // Si hay campos inválidos o vacíos, muestra la alerta
      document.querySelector("#alert").classList.add("show");
    } else {
      // Si todos los campos son válidos y no están vacíos, envía el formulario
      form.submit();
    }
  });
};
