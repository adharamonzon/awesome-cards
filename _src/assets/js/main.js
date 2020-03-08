'use strict';
//Data
const styleCard1 = {
  colorTitle: (document.querySelector('.card__title__first').style.color = '#420101'),
  colorBorder: (document.querySelector('.card__title__box').style.borderLeft = '#420101'),
  colorCircles: (document.querySelectorAll('.card__menu__links__icon').style.border = '#e17334'),
  colorLogos: (document.querySelectorAll('.card__menu__links').style.color = '#420101')
};

const cardsElement = document.querySelector('.js-cards');

//Card

function getCardHtmlCode(styleCard) {
  let htmlCode = '';
  htmlCode += `<section class='card'>`;
  htmlCode += `<header class='card__title'>`;
  htmlCode += `<div class='${styleCard.colorBorder}'>`;
  htmlCode += `<h2 class='${styleCard.colorTitle}'>Nombre apellido</h2>`;
  htmlCode += `<h3 class='card__title__second'>Front-end developer</h3>`;
  htmlCode += `</div>`;
  htmlCode += `</header>`;
  htmlCode += `<img class='card__img' src='./assets/images/face-image.jpg' alt='card-image' title='card-image' />`;
  htmlCode += `<nav class='card__menu'>`;
  htmlCode += `<ul class='${styleCard.colorLogos}'>`;
  htmlCode += `<li class='${styleCard.colorCircles}'>`;
  htmlCode += `<i class='fas fa-mobile-alt'></i></li>`;
  htmlCode += `<li class='card__menu__links__icon'>
          <i class='far fa-envelope'></i>
        </li>`;
  htmlCode += `<li class='${styleCard.colorCircles}'>
          <i class='fab fa-linkedin-in'></i>
        </li>`;
  htmlCode += `<li class='${colorCircles}'>
          <i class='fab fa-github-alt'></i>
        </li>`;
  htmlCode += `</ul>`;
  htmlCode += `</nav>`;
  htmlCode += `</section>`;
  return htmlCode;
}

function paintCard() {
  cardsElement.innerHTML = '';
  const paleta1 = getCardHtmlCode(styleCard1);
  cardsElement.innerHTML = paleta1;
  listenDesingRadio();
}

function listenDesingRadio(ev) {
  const slectPaleta = ev.currentTarget.id;
  slectPaleta.addEventListener('click', getCardHtmlCode());
}
