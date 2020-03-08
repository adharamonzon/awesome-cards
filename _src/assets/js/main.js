"use strict";

console.log(">> Ready :)");

const shareButtonDiv = document.querySelector(".share__button");
const button = shareButtonDiv.querySelector("button");
const divList = document.querySelectorAll(".title-collapse");
const myCard = document.querySelector(".share__card");

function unCollapse() {
  shareButtonDiv.classList.toggle("hidden");
}

divList[2].addEventListener("click", unCollapse);

/////////////////

function createCard() {
  button.classList.remove("share__button__enabled");
  button.classList.add("share__button__unabled");
  myCard.classList.remove("hidden");
}

button.addEventListener("click", createCard);
