'use strict';

// debugger

let card = document.querySelector('.js-card-title-box');

let title = document.querySelector('.js-card-title-first');

let links = document.querySelector('.js-card-menu-links');

let linksIcon = document.querySelector('.js-card-menu-links-icon');

let themeOne = document.getElementById('green');

let themeTwo = document.getElementById('red');

let themeThree = document.getElementById('other');


themeOne.addEventListener('change', paletteOne);

function paletteOne() {
  card.classList.add('card__box--theme1');
  title.classList.add('card__first--theme1');
  links.classList.add('card__menu__links--theme1');
  linksIcon.classList.add('card__menu__links__icon--theme1');
  card.classList.remove('card__box--theme2');
  title.classList.remove('card__first--theme2');
  links.classList.remove('card__menu__links--theme2');
  linksIcon.classList.remove('card__menu__links__icon--theme2');
  card.classList.remove('card__box--theme3');
  title.classList.remove('card__first--theme3');
  links.classList.remove('card__menu__links--theme3');
  linksIcon.classList.remove('card__menu__links__icon--theme3');
}


themeTwo.addEventListener('change', paletteTwo);

function paletteTwo() {
  card.classList.add('card__box--theme2');
  title.classList.add('card__first--theme2');
  links.classList.add('card__menu__links--theme2');
  linksIcon.classList.add('card__menu__links__icon--theme2');
  card.classList.remove('card__box--theme3');
  title.classList.remove('card__first--theme3');
  links.classList.remove('card__menu__links--theme3');
  linksIcon.classList.remove('card__menu__links__icon--theme3');
  card.classList.remove('card__box--theme1');
  title.classList.remove('card__first--theme1');
  links.classList.remove('card__menu__links--theme1');
  linksIcon.classList.remove('card__menu__links__icon--theme1');

}



themeThree.addEventListener('change', paletteThree);


function paletteThree() {
  card.classList.add('card__box--theme3');
  title.classList.add('card__first--theme3');
  links.classList.add('card__menu__links--theme3');
  linksIcon.classList.add('card__menu__links__icon--theme3');
  card.classList.remove('card__box--theme2');
  title.classList.remove('card__first--theme2');
  links.classList.remove('card__menu__links--theme2');
  linksIcon.classList.remove('card__menu__links__icon--theme2');
  card.classList.remove('card__box--theme1');
  title.classList.remove('card__first--theme1');
  links.classList.remove('card__menu__links--theme1');
  linksIcon.classList.remove('card__menu__links__icon--theme1');


}
