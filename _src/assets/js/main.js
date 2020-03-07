'use strict';

// Propuesta de Marina

const formInput = {
  name: document.querySelector('.js-form-input-name'),
  job: document.querySelector('.js-form-input-job')
};

formInput.name.addEventListener('keyup', form);
formInput.job.addEventListener('keyup', form);

const card = {
  name: document.querySelector('.js-card-name'),
  job: document.querySelector('.js-card-job')
};

function form(event) {
  if (event.currentTarget.classList.contains('js-form-input-name')) {
    card.name.innerHTML = formInput.name.value;
  } else if (event.currentTarget.classList.contains('js-form-input-job')) {
    card.job.innerHTML = formInput.job.value;
  }
}
