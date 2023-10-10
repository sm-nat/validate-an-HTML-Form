/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  //write your code here

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

      let {
        Card,
        Amount,
        CVC,
        Name,
        LastName,
        City,
        State,
        PostalCode
      } = e.target;

      let Card = document.querySelector("#usercard");
      let Amount = document.querySelector("#useramount");
      let CVC = document.querySelector("#usercvc");
      let Name = document.querySelector("#username");
      let LastName = document.querySelector("#userlastname");
      let City = document.querySelector("#usercity");
      let State = document.querySelector("#userstate");
      let PostalCode = document.querySelector("#userpostalcode");

      if (validateForm()) {
        alert("Sending...");
      } else {
        missingFieldsAlert.style.display = "block";
      }
    });

    function validateForm() {
      // Agrega lógica de validación aquí
      // Retorna true si el formulario es válido, de lo contrario, false
      return true;
    }
  });
};
