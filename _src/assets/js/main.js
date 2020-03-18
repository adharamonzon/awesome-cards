'use strict';

//Campos del formulario
const formOptions = ['name', 'job', 'email', 'phone', 'linkedin', 'github'];

//Model Object
let modelObject = {
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  image: ''
};

//Se cargan al objeto los datos del LocalStorage (si existen)
if (localStorage.getItem('form')) {
  setDataFromLocalStorage();
}

//Se escuchan un evento para cada campo del formulario
for (const option of formOptions) {
  document.querySelector('.js-form-input-' + option).addEventListener('keyup', saveDataToLocalStorage);
}©

function saveDataToLocalStorage(event) {
  if (event.target.name === 'image') {
    modelObject[event.target.name].src = event.target.src;
  } else {
    modelObject[event.target.name] = event.currentTarget.value;
  }
  setDataToForm();
  localStorage.setItem('form', JSON.stringify(modelObject));
}

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
}

themeTwo.addEventListener('change', paletteTwo);

function paletteTwo() {
  card.classList.add('card--theme2');
  card.classList.remove('card--theme3');
  card.classList.remove('card--theme1');
}

themeThree.addEventListener('change', paletteThree);

function paletteThree() {
  card.classList.add('card--theme3');
  card.classList.remove('card--theme2');
  card.classList.remove('card--theme1');
}

// boton reset

const btnReset = document.querySelector('.js-btn-reset');

function reset() {
  document.location.reload();
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

function previewFile() {
  var preview = document.querySelector('.js-img');
  var file = document.querySelector('.js-input-invisible').files[0];
  var reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
    modelObject.image = preview.src;
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

function setDataFromLocalStorage() {
  modelObject = JSON.parse(localStorage.getItem('form'));
  setDataToCard();
  setDataToForm();
}

function setDataToCard() {
  for (const option of formOptions) {
    document.querySelector('.js-form-input-' + option).value = modelObject[option];
  }
}

function setDataToForm() {
  document.querySelector('.js-card-title-first').innerHTML = modelObject['name'];
  document.querySelector('.js-card-title-second').innerHTML = modelObject['job'];
  document.querySelector('.js-card-img').innerHTML = modelObject['img'];
  document.querySelector('.js-a-mobile').href = modelObject['phone'];
  document.querySelector('.js-a-mail').href = modelObject['mail'];
  document.querySelector('.js-a-linkedin').href = modelObject['linkedin'];
  document.querySelector('.js-a-github').href = modelObject['github'];
}
