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

personContainter.forEach((container) =>
  getPersonData().then((data) => {
    console.log(data);
    const figureChildren = container.children;
    figureChildren[0].src = data.picture.medium; //Img

    const figCaptionChildren = figureChildren[1].children;
    figCaptionChildren[0].textContent = `${data.name.title} ${data.name.first} ${data.name.last}`; //Name

    figCaptionChildren[1].textContent = `${data.location.country} ${data.location.state} ${data.location.city}`; //Location

    figCaptionChildren[2].textContent = `${data.phone}`;
  })
);
