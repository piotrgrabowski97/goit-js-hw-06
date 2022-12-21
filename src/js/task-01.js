"use strict";

const items = document.querySelectorAll("#categories > .item");
console.log("Number of Categories: ", items.length);
console.log();

items.forEach((itemek) => {
  const header = itemek.querySelector("h2");
  console.log("Category: ", header.textContent);

  const testNum = itemek.querySelectorAll("ul > li");
  console.log("Elements: ", testNum.length);

  console.log();
});
