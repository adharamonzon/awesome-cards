"use strict";

console.log(">> Ready :)");

const shareButtonDiv = document.querySelector(".js-share__button");
const button = document.querySelector(".js-button");
const divList = document.querySelectorAll(".js-title-collapse");
const myCard = document.querySelector(".js-share__card");

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
