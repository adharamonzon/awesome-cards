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

formObject.name.addEventListener('keyup', form);
formObject.job.addEventListener('keyup', form);
formObject.email.addEventListener('keyup', form);
formObject.tel.addEventListener('keyup', form);
formObject.linkedin.addEventListener('keyup', form);
formObject.github.addEventListener('keyup', form);

const cardObject = {
  name: document.querySelector('.js-card-title-first'),
  job: document.querySelector('.js-card-title-second'),
  tel: document.querySelector('.js-a-mobile'),
  email: document.querySelector('.js-a-mail'),
  linkedin: document.querySelector('.js-a-linkedin'),
  github: document.querySelector('.js-a-github'),
  image: document.querySelector('.js-card-img')
};

function form(event) {
  if (event.currentTarget.classList.contains('js-form-input-name')) {
    cardObject.name.innerHTML = event.currentTarget.value;
  } else if (event.currentTarget.classList.contains('js-form-input-job')) {
    cardObject.job.innerHTML = event.currentTarget.value;
  } else if (event.currentTarget.classList.contains('js-form-input-email')) {
    cardObject.email.setAttribute('href', `mailto: ${formObject.email.value}`);
  } else if (event.currentTarget.classList.contains('js-form-input-tel')) {
    cardObject.tel.setAttribute('href', formObject.tel.value);
  } else if (event.currentTarget.classList.contains('js-form-input-linkedin')) {
    cardObject.linkedin.setAttribute('href', formObject.linkedin.value);
  } else if (event.currentTarget.classList.contains('js-form-input-github')) {
    cardObject.github.setAttribute('href', formObject.github.value);
  }
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

// prueba archivo
const invisibleInput = document.querySelector('.js-input-invisible');
const divPicture = document.querySelector('.js-divPicture');

function previewFile() {
  var preview = document.querySelector('.js-img');
  var file = document.querySelector('.js-input-invisible').files[0];
  var reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
    cardObject.image.src = preview.src;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
}

invisibleInput.addEventListener('onchange', previewFile);
