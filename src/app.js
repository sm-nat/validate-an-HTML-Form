/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  let regexCardNumber = /^[0-9]{16}$/;
  let regexCVC = /^[0-9]{3}$/;
  let regexAmount = /^[0-9]+(\.[0-9]{1,2})?$/;
  let regexName = /^[A-Za-z]+$/;
  let regexLastName = /^[A-Za-z]+$/;
  let regexCity = /^[A-Za-z]+$/;
  let regexPostalCode = /^[0-9]{6}$/;

  document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector(".myForm");
    let missingFieldsAlert = document.getElementById("missingFieldsAlert");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      let card = document.querySelector("#usercard");
      let amount = document.querySelector("#useramount");
      let cvc = document.querySelector("#usercvc");
      let name = document.querySelector("#username");
      let lastName = document.querySelector("#userlastname");
      let city = document.querySelector("#usercity");
      let state = document.querySelector("#userstate");
      let postalCode = document.querySelector("#userpostalcode");

      function validateForm() {
        let isValid = true;

        const validateField = (regex, value) => regex.test(value);

        const fields = [
          { name: "Card", regex: regexCardNumber, value: card.value },
          { name: "Amount", regex: regexAmount, value: amount.value },
          { name: "CVC", regex: regexCVC, value: cvc.value },
          { name: "Name", regex: regexName, value: name.value },
          { name: "LastName", regex: regexLastName, value: lastName.value },
          { name: "City", regex: regexCity, value: city.value },
          {
            name: "PostalCode",
            regex: regexPostalCode,
            value: postalCode.value
          }
        ];

        fields.forEach(field => {
          if (!validateField(field.regex, field.value)) {
            isValid = false;
            alert(`Invalid ${field.name}!`);
          }
        });

        return isValid;
      }

      if (validateForm()) {
        alert("Sending...");
      } else {
        missingFieldsAlert.style.display = "block";
      }
    });
  });
};
