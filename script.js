const container = document.querySelector('.container');

function makeGrid() {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.addEventListener('mouseenter', (e) => square.style.backgroundColor = 'blue');
  square.addEventListener('mouseleave', (e) => setTimeout(function() {
    square.style.backgroundColor = 'red';
    }, 1000));
};

for (let i = 0; i < (16 * 16); i++) {   //loop to make 16*16 divs inside container
  makeGrid();
};

//GRID RELOAD BUTTON
const button = document.querySelector('button');

function buttonClicked() {
  let newNumber = prompt('Enter a number for a new grid sized (number x number)', 'Enter a number between 0 and 101');
  if (newNumber > 100 || newNumber < 1) {
    buttonClicked();
  } else {
  while (container.firstChild) {     //loop to remove existing grid
    container.removeChild(container.lastChild);
  };
  for (let i = 0; i < (newNumber * newNumber); i++) {   //loop to make new grid
    makeGrid();
    const root = document.querySelector(':root');   //change css variable for number of columns
    root.style.setProperty('--columns', newNumber);
  }}};          

button.addEventListener('click', buttonClicked);



