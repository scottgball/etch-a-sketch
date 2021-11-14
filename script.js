const container = document.querySelector('.container');

for (let i = 0; i < (16 * 16); i++) {   //loop to make 16*16 divs inside container
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.addEventListener('mouseenter', (e) => square.style.backgroundColor = 'blue');
  square.addEventListener('mouseleave', (e) => setTimeout(function() {
    square.style.backgroundColor = 'red';
    }, 1000));
};



