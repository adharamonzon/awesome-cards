'use strict';

const form = document.querySelector('.design__form');
form.addEventListener('change', colorChanges);

function colorChanges(ev) {
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
