import data from './data.js';

const cardsBlock = document.querySelector('.toys-block-cards');

const countSlider = document.querySelector('.count-slider-container');
const yearSlider = document.querySelector('.year-slider-container');

const shapeBtns = document.querySelectorAll('.shape-select button');
const colorBtns = document.querySelectorAll('.color-select button');
const sizeBtns = document.querySelectorAll('.aside-filter-size input[type="checkbox"]');
const favBtns = document.querySelector('.aside-filter-favorite input[type="checkbox"]');
const resetBtn = document.querySelector('.reset-filter');
const sortSelector = document.querySelector('.aside-sort-select');

const maxYear = Math.max.apply(null, data.map((elem) => elem.year));
const minYear = Math.min.apply(null, data.map((elem) => elem.year));
const minCount = Math.min.apply(null, data.map((elem) => elem.count));
const maxCount = Math.max.apply(null, data.map((elem) => elem.count));

let count = [minCount, maxCount];
let year = [minYear, maxYear];
let color = [];
let shape = [];
let size = [];
let favorite = false;
let sortFunc = (a, b) => 0;

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
  document.querySelector('.count-max'),
];

countSlider.noUiSlider.on('update', (values, handle, unencoded, isTap, positions) => {
  countNodes[handle].innerHTML = values[handle].split('.')[0];
  count[handle] = +values[handle].split('.')[0];
  render();
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
  document.querySelector('.year-max'),
];

yearSlider.noUiSlider.on('update', (values, handle, unencoded, isTap, positions) => {
  yearNodes[handle].innerHTML = values[handle].split('.')[0];
  year[handle] = +values[handle].split('.')[0];
  render();
});

function isCount(elem) {
  return (elem.count >= count[0] && elem.count <= count[1]);
}

function isYear(elem) {
  return (elem.year >= year[0] && elem.year <= year[1]);
}

function isColor(elem) {
  return color.length === 0 || color.includes(elem.color);
}

function isShape(elem) {
  return shape.length === 0 || shape.includes(elem.shape);
}

function isSize(elem) {
  return size.length === 0 || size.includes(elem.size);
}

function isFavorite(elem) {
  return !favorite || elem.favorite;
}

function render() {
  const cards = data.filter((elem) => isCount(elem) && isYear(elem) && isColor(elem) && isShape(elem) && isSize(elem) && isFavorite(elem)).sort(sortFunc).reduce((arr, elem) => `${arr}
<div class="card">
  <h2 class="card-title">${elem.name}</h2>
  <img class="card-img" src="./assets/toys/${elem.num}.png" alt="toy">
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

function shapeSelect() {
  this.classList.toggle('shape-button-active');
  shape.includes(this.dataset.shape) ? shape = shape.filter((item) => item !== this.dataset.shape) : shape.push(this.dataset.shape);
  render();
}

function colorSelect() {
  this.classList.toggle('color-button-active');
  color.includes(this.dataset.color) ? color = color.filter((item) => item !== this.dataset.color) : color.push(this.dataset.color);
  render();
}

function sizeSelect() {
  size.includes(this.dataset.size) ? size = size.filter((item) => item !== this.dataset.size) : size.push(this.dataset.size);
  render();
}

function favSelect() {
  favorite = this.checked;
  render();
}

function sortFunction() {
  switch (this.value) {
    case 'disabled':
      sortFunc = (a, b) => 0;
      break;
    case 'name-max':
      sortFunc = (a, b) => a.name > b.name ? 1 : -1;
      break;
    case 'name-min':
      sortFunc = (a, b) => a.name < b.name ? 1 : -1;
      break;
    case 'count-max':
      sortFunc = (a, b) => +a.count > +b.count ? 1 : -1;
      break;
    case 'count-min':
      sortFunc = (a, b) => +a.count < +b.count ? 1 : -1;
      break;
    default:
      break;
  }
  render();
}



function resetSelect() {
  count = [minCount, maxCount];
  year = [minYear, maxYear];
  color = [];
  shape = [];
  size = [];
  favorite = false;
  sortFunc = (a, b) => 0;
  countSlider.noUiSlider.set([minCount, maxCount]);
  yearSlider.noUiSlider.set([minYear, maxYear]);
  shapeBtns.forEach((elem) => elem.classList.remove('shape-button-active'));
  colorBtns.forEach((elem) => elem.classList.remove('color-button-active'));
  sizeBtns.forEach((elem) => elem.checked = false);
  favBtns.checked = false;
  render();
}

shapeBtns.forEach((elem) => elem.addEventListener('click', shapeSelect));
colorBtns.forEach((elem) => elem.addEventListener('click', colorSelect));
sizeBtns.forEach((elem) => elem.addEventListener('change', sizeSelect));
favBtns.addEventListener('change', favSelect);
resetBtn.addEventListener('click', resetSelect);
sortSelector.addEventListener('change', sortFunction);
