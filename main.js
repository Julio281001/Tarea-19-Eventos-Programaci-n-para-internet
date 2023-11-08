"use strict";

const personContainter = document.querySelectorAll("figure");
let activeElement;

personContainter.forEach((element) => {
  element.addEventListener("mouseenter", changeActive);
  if (element.className == "activeItem") activeElement = element;
});

function changeActive() {
  console.log("changed");
  activeElement.classList.toggle("activeItem");
  this.classList.toggle("activeItem");
  activeElement = this;
}
