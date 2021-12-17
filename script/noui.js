const countSlider = document.querySelector('.count-slider-container');
const yearSlider = document.querySelector('.year-slider-container');

noUiSlider.create(countSlider, {
  start: [1, 12],
  step: 1,
  connect: true,
  behaviour: 'tap',
  range: {
    min: 1,
    max: 12,
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
  start: [1960, 2020],
  step: 1,
  connect: true,
  range: {
    min: 1960,
    max: 2020,
  },
});

const yearNodes = [
  document.querySelector('.year-min'),
  document.querySelector('.year-max')
];

yearSlider.noUiSlider.on('update', (values, handle, unencoded, isTap, positions) => {
  yearNodes[handle].innerHTML = values[handle].split('.')[0];
});