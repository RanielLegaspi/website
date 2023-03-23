const container = document.getElementById('container')
const colors= ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', 'pink']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * 6)]
    element.style.background = color
}

function removeColor(element) {
    element.style.background = '#1f1f1f'
}