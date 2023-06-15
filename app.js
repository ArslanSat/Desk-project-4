const board = document.querySelector('#board');
const SQUARES_NUMBER = 250;


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    board.append(square);

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    
}


function setColor(element) {
    const color = getRendomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';

    element.style.boxShadow = `0 0 2px #000`
}

// 5c8575-4a64ca-c855e3-6cf952-eb0de9, 8c0186-bfa558-17a8b4-c240ab-1de8aa

const colors = ['#5c8575', '#4a64ca', '#6cf952', '#e67e22', '#eb0de9','#8c0186', '#bfa558','#c240ab', '#1de8aa'];

function getRendomColor() {
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];

}
