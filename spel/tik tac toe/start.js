const difficultyButtons = document.querySelectorAll('.difficulty-button');

difficultyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const difficulty = button.getAttribute('data-difficulty');
        window.location.href = `game.html?difficulty=${difficulty}`;
    });
});
