"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector("#controls > input");
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const boxes = document.querySelector("#boxes");

inputValue.value = 0;
let boxDone = 0;
let value = 0;

const inputValueHandler = (event) => {
  value = Number(event.target.value);
};

const createBtnHandler = () => {
  let n = 30;

  if (
    value < Number(inputValue.getAttribute("min")) ||
    value > Number(inputValue.getAttribute("max"))
  ) {
    alert(
      `Wprowadzona wartość ${value} musi mieścić się w zakresie <${inputValue.getAttribute(
        "min"
      )} - ${inputValue.getAttribute("max")}>`
    );
    value = 0;

    inputValue.value = 0;
  } else {
    for (let i = 0; i < value; i++) {
      const box = document.createElement("div");
      box.style.height = n + "px";
      box.style.width = n + "px";
      box.style.backgroundColor = getRandomHexColor();
      boxes.append(box);
      n += 10;
      boxDone += 1;
    }
    inputValue.value = 0;
    value = 0;
  }
};

const destroyBtnHandler = () => {
  if (boxDone < Number(inputValue.getAttribute("min"))) {
    alert(`Aktualnie nie ma bloków do destrukcji`);
  } else {
    const destroyDiv = boxes.querySelectorAll("div");
    destroyDiv.forEach((item) => item.remove());
    boxDone = 0;
  }
};

inputValue.addEventListener("input", inputValueHandler);
createBtn.addEventListener("click", createBtnHandler);
destroyBtn.addEventListener("click", destroyBtnHandler);
