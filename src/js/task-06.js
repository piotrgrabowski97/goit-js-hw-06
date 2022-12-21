"use strict";

const validationInput = document.querySelector("#validation-input");

const inputLength = validationInput.dataset.length;
console.log(inputLength);

const blurInput = 

validationInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == inputLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
    console.log(event.currentTarget.value.length);
  }
});
