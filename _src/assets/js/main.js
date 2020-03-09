'use strict';

// Propuesta de Marina

const formInput = {
  name: document.querySelector('.js-form-input-name'),
  job: document.querySelector('.js-form-input-job'),
  email: document.querySelector('.js-form-input-email'),
  tel: document.querySelector('.js-form-input-tel'),
  linkedin: document.querySelector('.js-form-input-linkedin'),
  github: document.querySelector('.js-form-input-github')
};

formInput.name.addEventListener('keyup', form);
formInput.job.addEventListener('keyup', form);
formInput.email.addEventListener('keyup', form);
formInput.tel.addEventListener('keyup', form);
formInput.linkedin.addEventListener('keyup', form);
formInput.github.addEventListener('keyup', form);

const card = {
  name: document.querySelector('.js-card-name'),
  job: document.querySelector('.js-card-job'),
  email: document.querySelector('.js-card-email'),
  tel: document.querySelector('.js-card-tel'),
  linkedin: document.querySelector('.js-card-linkedin'),
  github: document.querySelector('.js-card-github')
};

function form(event) {
  if (event.currentTarget.classList.contains('js-form-input-name')) {
    card.name.innerHTML = event.currentTarget.value;
  } else if (event.currentTarget.classList.contains('js-form-input-job')) {
    card.job.innerHTML = event.currentTarget.value;
  } else if (event.currentTarget.classList.contains('js-form-input-email')) {
    card.email.innerHTML += `<a title='Ir a email de ${formInput.name.value}' href='mailto:${formInput.email.value}'></a>`;
  } else if (event.currentTarget.classList.contains('js-form-input-tel')) {
    card.tel.innerHTML += `<a title='Llamar al teléfono de ${formInput.name.value}' href='${formInput.tel.value}'></a>`;
  } else if (event.currentTarget.classList.contains('js-form-input-linkedin')) {
    card.linkedin.innerHTML += `<a title='Ir a Linkedin de ${formInput.name.value}' href='${formInput.linkedin.value}'></a>`;
  } else if (event.currentTarget.classList.contains('js-form-input-github')) {
    card.github.innerHTML += `<a title='Ir a Github de ${formInput.name.value}' href='${formInput.github.value}'></a>`;
  }
}
