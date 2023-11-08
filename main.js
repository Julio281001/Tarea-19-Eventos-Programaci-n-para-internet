"use strict";

const personContainter = document.querySelectorAll("figure");
let activeElement;

personContainter.forEach((element) => {
  element.addEventListener("mouseenter", changeActive);
  if (element.className === "activeItem") activeElement = element;
});

function changeActive() {
  console.log("changed");
  activeElement.classList.toggle("activeItem");
  this.classList.toggle("activeItem");
  activeElement = this;
}

async function getPersonData() {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0];
  } catch (e) {
    return "Did not pull the data";
  }
}

personContainter.forEach((_) =>
  getPersonData().then((response) => console.log(response))
);
