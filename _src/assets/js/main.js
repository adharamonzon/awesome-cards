'use strict';

// JS del formulario

const formObject = {
  name: document.querySelector('.js-form-input-name'),
  job: document.querySelector('.js-form-input-job'),
  email: document.querySelector('.js-form-input-email'),
  tel: document.querySelector('.js-form-input-tel'),
  linkedin: document.querySelector('.js-form-input-linkedin'),
  github: document.querySelector('.js-form-input-github')
};

formObject.name.addEventListener('keyup', ensureData);
formObject.job.addEventListener('keyup', ensureData);
formObject.email.addEventListener('keyup', ensureData);
formObject.tel.addEventListener('keyup', ensureData);
formObject.linkedin.addEventListener('keyup', ensureData);
formObject.github.addEventListener('keyup', ensureData);

const cardObject = {
  name: document.querySelector('.js-card-title-first'),
  job: document.querySelector('.js-card-title-second'),
  tel: document.querySelector('.js-a-mobile'),
  email: document.querySelector('.js-a-mail'),
  linkedin: document.querySelector('.js-a-linkedin'),
  github: document.querySelector('.js-a-github'),
  image: document.querySelector('.js-card-img')
};



function setLocalStorage() {
  const data = {};
  for (const input in formObject) {
    data[input] = formObject[input].value;
  }
  localStorage.setItem('data', JSON.stringify(data));
  // falta la mandanga de la paleta y la foto
}

function getLocalStorage() {
  const data = JSON.parse(localStorage.getItem('data'));
  if (data !== null) {
    for (const input in formObject) {
      formObject[input].value = data[input];
    }
  }
  ensureData();
}

function ensureData() {
  cardObject.name.innerHTML = formObject.name.value;
  cardObject.job.innerHTML = formObject.job.value;
  cardObject.tel.setAttribute('href', formObject.value);
  cardObject.email.setAttribute('href', formObject.value);
  cardObject.linkedin.setAttribute('href', formObject.value);
  cardObject.github.setAttribute('href', formObject.value);
  setLocalStorage();
}

getLocalStorage();

// cambiar los colores

let card = document.querySelector('.js-card');
let themeOne = document.getElementById('green');
let themeTwo = document.getElementById('red');
let themeThree = document.getElementById('other');

themeOne.addEventListener('change', paletteOne);

function paletteOne() {
  card.classList.add('card--theme1');
  card.classList.remove('card--theme2');
  card.classList.remove('card--theme3');
  setLocalStorage();
}

themeTwo.addEventListener('change', paletteTwo);

function paletteTwo() {
  card.classList.add('card--theme2');
  card.classList.remove('card--theme3');
  card.classList.remove('card--theme1');
  setLocalStorage();
}

themeThree.addEventListener('change', paletteThree);

function paletteThree() {
  card.classList.add('card--theme3');
  card.classList.remove('card--theme2');
  card.classList.remove('card--theme1');
  setLocalStorage();
}

// boton reset

const btnReset = document.querySelector('.js-btn-reset');

function reset() {
  for (const input in formObject) {
    formObject[input].value = '';
  }
  ensureData();
}
btnReset.addEventListener('click', reset);
// Share section Javascript

const shareButtonDiv = document.querySelector('.js-share__button');
const button = document.querySelector('.js-button');
const divList = document.querySelectorAll('.js-title-collapse');
const myCard = document.querySelector('.js-share__card');

function unCollapse() {
  shareButtonDiv.classList.toggle('hidden');
}
divList[2].addEventListener('click', unCollapse);

/////////////////

function createCard() {
  button.classList.remove('share__button__enabled');
  button.classList.add('share__button__unabled');
  myCard.classList.remove('hidden');
}

button.addEventListener('click', createCard);

// prueba archivo
const invisibleInput = document.querySelector('.js-input-invisible');
/* const divPicture = document.querySelector('.js-divPicture');
 */
function previewFile() {
  var preview = document.querySelector('.js-img');
  var file = document.querySelector('.js-input-invisible').files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
    cardObject.image.src = preview.src;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
}

function toggleBtnStyle() {
  const label = document.querySelector('.complete__form__image-fields__image-button-label');
  label.classList.toggle('hover');
}
invisibleInput.addEventListener('onchange', previewFile);
invisibleInput.addEventListener('mouseover', toggleBtnStyle);
invisibleInput.addEventListener('mouseout', toggleBtnStyle);
