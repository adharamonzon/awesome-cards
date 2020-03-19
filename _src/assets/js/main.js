'use strict';

// JS del formulario
const formComplete = document.querySelector('.complete__form');

const formObject = {
  name: document.querySelector('.js-form-input-name'),
  job: document.querySelector('.js-form-input-job'),
  email: document.querySelector('.js-form-input-email'),
  tel: document.querySelector('.js-form-input-tel'),
  linkedin: document.querySelector('.js-form-input-linkedin'),
  github: document.querySelector('.js-form-input-github'),
};

formComplete.addEventListener('keyup', ensureData);

//ESTO NO HACE FALTA SI HACEMOS EL LISTENER A TODO EL FORMULARIO.

// formObject.name.addEventListener('keyup', ensureData);
// formObject.job.addEventListener('keyup', ensureData);
// formObject.email.addEventListener('keyup', ensureData);
// formObject.tel.addEventListener('keyup', ensureData);
// formObject.linkedin.addEventListener('keyup', ensureData);
// formObject.github.addEventListener('keyup', ensureData);

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
  cardObject.name.innerHTML = formObject.name.value || 'Nombre Apellido';
  cardObject.job.innerHTML = formObject.job.value || 'Puesto de trabajo';
  document.querySelector('.js-a-mobile').href = 'tel:' + formObject.tel.value;
  document.querySelector('.js-a-mail').href = 'mailto:' + formObject.email.value;
  document.querySelector('.js-a-linkedin').href = formObject.linkedin.value;
  document.querySelector('.js-a-github').href = formObject.github.value;

  //NO FUNCIONAN LOS ENLACES CON ESTA FORMA
  // cardObject.tel.setAttribute('href', formObject.value);
  // cardObject.email.setAttribute('href', formObject.value);
  // cardObject.linkedin.setAttribute('href', formObject.value);
  // cardObject.github.setAttribute('href', formObject.value);
  setLocalStorage();
}


getLocalStorage();

// cambiar los colores

let pallete = document.querySelector('.design__form');
let card = document.querySelector('.js-card');

function changePallete(ev) {
  if (ev.target.id === 'green') {
    card.classList.add('card--theme1');
    card.classList.remove('card--theme2');
    card.classList.remove('card--theme3');

  } else if (ev.target.id === 'red') {
    card.classList.add('card--theme2');
    card.classList.remove('card--theme3');
    card.classList.remove('card--theme1');

  } else {
    card.classList.add('card--theme3');
    card.classList.remove('card--theme2');
    card.classList.remove('card--theme1');
  }
}


pallete.addEventListener('change', changePallete);

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
