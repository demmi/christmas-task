import data from './data.js';
const cardsBlock = document.querySelector('.toys-block-cards');

const countSlider = document.querySelector('.count-slider-container');
const yearSlider = document.querySelector('.year-slider-container');

const shapeBtns = document.querySelectorAll('.shape-select button');
const colorBtns = document.querySelectorAll('.color-select button');

let maxYear = Math.max.apply(null, data.map((elem) => elem.year));
let minYear = Math.min.apply(null, data.map((elem) => elem.year));
let minCount = Math.min.apply(null, data.map((elem) => elem.count));
let maxCount = Math.max.apply(null, data.map((elem) => elem.count));

let count = [minCount, maxCount];
let year = [minYear, maxYear];
let color = [];
let shape = [];
let size = [];
let favorite = false;

console.log([...new Set(data.map((elem) => elem.color))])

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
  count[handle] = +values[handle].split('.')[0];
  render()
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
  year[handle] = +values[handle].split('.')[0];
  render()
});

function render() {
  const cards = data.filter(elem => isCount(elem) && isYear(elem) && isColor(elem) && isShape(elem) && isSize(elem) && isFavorite(elem)).reduce((arr, elem) => `${arr}
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
}

function isCount(elem) {
  return (elem.count >= count[0] && elem.count <= count[1])
}

function isYear(elem) {
  return (elem.year >= year[0] && elem.year <= year[1])
}

function isColor(elem) {
  return color.length === 0 || color.includes(elem.color)
}

function isShape(elem) {
  return shape.length === 0 || shape.includes(elem.shape)
}

function isSize(elem) {
  return size.length === 0 || size.includes(elem.size)
}

function isFavorite(elem) {
  return !favorite || elem.favorite
}






function shapeSelect() {
  this.classList.toggle('shape-button-active');
  shape.includes(this.dataset.shape) ? shape = shape.filter(item => item !== this.dataset.shape) : shape.push(this.dataset.shape)
  render()
}

function colorSelect() {
  this.classList.toggle('color-button-active')
  color.includes(this.dataset.color) ? color = color.filter(item => item !== this.dataset.color) : color.push(this.dataset.color)
  render()
}

shapeBtns.forEach(elem => elem.addEventListener('click', shapeSelect))
colorBtns.forEach(elem => elem.addEventListener('click', colorSelect))