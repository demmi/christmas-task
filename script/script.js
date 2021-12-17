import data from './data.js';
const cardsBlock = document.querySelector('.toys-block-cards');

const countSlider = document.querySelector('.count-slider-container');
const yearSlider = document.querySelector('.year-slider-container');

let maxYear = Math.max.apply(null, data.map((elem) => elem.year));
let minYear = Math.min.apply(null, data.map((elem) => elem.year));
let minCount = Math.min.apply(null, data.map((elem) => elem.count));
let maxCount = Math.max.apply(null, data.map((elem) => elem.count));


noUiSlider.create(countSlider, {
  start: [minCount, maxCount],
  step: 1,
  connect: true,
  behaviour: 'tap',
  range: {
    min: minCount,
    max: maxCount,
  },
});

const countNodes = [
  document.querySelector('.count-min'),
  document.querySelector('.count-max')
];

countSlider.noUiSlider.on('update', (values, handle, unencoded, isTap, positions) => {
  countNodes[handle].innerHTML = values[handle].split('.')[0];
});

noUiSlider.create(yearSlider, {
  start: [minYear, maxYear],
  step: 1,
  connect: true,
  range: {
    min: minYear,
    max: maxYear,
  },
});

const yearNodes = [
  document.querySelector('.year-min'),
  document.querySelector('.year-max')
];

yearSlider.noUiSlider.on('update', (values, handle, unencoded, isTap, positions) => {
  yearNodes[handle].innerHTML = values[handle].split('.')[0];
});

const cards = data.reduce((arr, elem) => `${arr}
<div class="card">
  <h2 class="card-title">${elem.name}</h2>
  <img class="card-img" src="assets/toys/${elem.num}.png" alt="toy">
  <div class="card-description">
    <p class="count">Количество:<span>${elem.count}</span></p>
    <p class="year">Год покупки:<span>${elem.year}</span></p>
    <p class="shape">Форма:<span>${elem.shape}</span></p>
    <p class="color">Цвет:<span>${elem.color}</span></p>
    <p class="size">Размер:<span>${elem.size}</span></p>
    <p class="favorite">Любимая:<span>${elem.favorite ? 'да' : 'нет'}</span></p>
  </div>
</div>`, '');

cardsBlock.innerHTML = cards;