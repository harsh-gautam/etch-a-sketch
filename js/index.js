const sliderValue = document.querySelector('.slider-value')
const slider = document.querySelector('#grid-size-slider')

slider.addEventListener('input', (e) => {
  sliderValue.innerText = e.target.value;
})