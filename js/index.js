const sliderValue = document.querySelector('.slider-value')
const slider = document.querySelector('#grid-size-slider')
sliderValue.innerText = slider.value;
createGrid(slider.value);

slider.addEventListener('input', (e) => {
  sliderValue.innerText = e.target.value;
  createGrid(e.target.value)
})

function createGrid(gridSize) {
  const canvas = document.querySelector(".canvas");
  canvas.innerHTML = "";
  for(let i = 0; i < gridSize; i++){
    let rowDiv = document.createElement('div')
    rowDiv.classList.add("canvas-row")
    for(let j = 0; j< gridSize; j++){
      let div = document.createElement("div")
      div.className = ["grid-cell"];
      div.addEventListener("mouseenter", changeCellColor)
      div.style.backgroundColor = "rgba(120, 0 ,0, 0.4 )";
      rowDiv.appendChild(div);
    }
    canvas.appendChild(rowDiv);
  }
}

function changeCellColor(e){
  e.target.style.backgroundColor = "rgb(0,0,0)"
}