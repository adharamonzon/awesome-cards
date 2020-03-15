'use strict';

//Desing
const form = document.querySelector('.design__form');

function colorChanges(ev) {
  debugger;
  const newClass = ev.target.value;
  const options = ['__title__box', '__title__first', '__menu__links', '__menu__links__icon'];
  for (const option of options) {
    const elements = document.querySelectorAll('.card' + option);
    for (const element of elements) {
      element.classList.remove('other' + option);
      element.classList.remove('red' + option);
      if (newClass !== 'green') {
        element.classList.add(newClass + option);
      }
    }
  }
}

form.addEventListener('change', colorChanges);

//COLLAPSABLE

function collapse(ev) {
  const titleSelected = ev.target.parentElement.parentElement.parentElement.querySelector('.js-collapse');
  const collapsables = document.querySelectorAll('.js-collapse');
  for (const collapsable of collapsables) {
    collapsable.classList.remove('hidden');
    collapsable.classList.add('hidden');
  }
  titleSelected.classList.remove('hidden');
}

//FORM

const personalData = {};
//Clases añadidas a sección complete
const firstName = document.querySelector('.js-name');
const job = document.querySelector('.js-job');

function handlepersonalData(ev) {
  const name = ev.currentTarget.name;
  personalData[name] = ev.currentTarget.value;
  paintPersonalCard();
}

function paintPersonalCard() {
  document.querySelector('.card__title__first').innerHTML = `${personalData.nombre || 'Nombre Apellido'} `;
  document.querySelector('.card__title__second').innerHTML = `${personalData.puesto || 'Front-end developer'} `;
}

firstName.addEventListener('change', handlepersonalData);
job.addEventListener('change', handlepersonalData);
