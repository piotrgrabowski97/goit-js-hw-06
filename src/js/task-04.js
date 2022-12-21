"use strict";
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const valueSpan = document.querySelector("#value");

let counterValue = 0;

const handleIncrementBtn = () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
};
const handleDecrementBtn = () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
};

incrementBtn.addEventListener("click", handleIncrementBtn);
decrementBtn.addEventListener("click", handleDecrementBtn);
