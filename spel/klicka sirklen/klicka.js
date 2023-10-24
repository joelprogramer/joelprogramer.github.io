const circle = document.getElementById('target');
const barrier = document.getElementById('barrier');
const scoreDisplay = document.getElementById('score');

let score = 0;

circle.addEventListener('click', () => {
    score++;
    updateScore();
    moveCircle();
});

function updateScore() {
    scoreDisplay.textContent = score;
}

function moveCircle() {
    const maxWidth = window.innerWidth - circle.clientWidth;
    const maxHeight = window.innerHeight - circle.clientHeight;

    const newX = Math.random() * maxWidth;
    const newY = Math.random() * maxHeight;

    circle.style.left = newX + 'px';
    circle.style.top = newY + 'px';

    // Check for collision with the barrier
    const circleRect = circle.getBoundingClientRect();
    const barrierRect = barrier.getBoundingClientRect();

    if (
        circleRect.right > barrierRect.left &&
        circleRect.left < barrierRect.right &&
        circleRect.bottom > barrierRect.top &&
        circleRect.top < barrierRect.bottom
    ) {
        // Collision occurred, reset circle position
        moveCircle();
    }
}

moveCircle();
