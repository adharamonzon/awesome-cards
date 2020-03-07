'use strict';

// Propuesta de Marina

// let formInputName = document.querySelector('.js-form-input-name');

let formInputName = document.querySelector('.js-form-input-name');
let formInputJob = document.querySelector('.js-form-input-job');

let cardName = document.querySelector('.js-card-name');
let cardJob = document.querySelector('.js-card-job');

formInputName.addEventListener('keyup', form);
formInputJob.addEventListener('keyup', form);

// const card = {
//   name: ''
// };

function form(event) {
  if (event.currentTarget.classList.contains('js-form-input-name')) {
    cardName.innerHTML = formInputName.value;
  } else if (event.currentTarget.classList.contains('js-form-input-job')) {
    cardJob.innerHTML = formInputJob.value;
  }
}
