const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let gameActive = true;
let aiPlayer = 'O';

const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner(board, player) {
    for (const combination of winCombination) {
        const [a, b, c] = combination;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

function checkTie(board) {
    return board.every((cell) => cell === 'X' || cell === 'O');
}

function minimax(board, depth, isMaximizing) {
    const scores = {
        X: -1,
        O: 1,
        tie: 0,
    };

    if (checkWinner(board, aiPlayer)) {
        return scores[aiPlayer];
    }

    if (checkWinner(board, 'X')) {
        return scores.X;
    }

    if (checkTie(board)) {
        return scores.tie;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = aiPlayer;
                const score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                const score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function bestMove(board) {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = aiPlayer;
            const score = minimax(board, 0, false);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    return move;
}

function handleCellClick(e) {
    const cell = e.target;

    if (cell.innerText || !gameActive) return;

    cell.innerText = currentPlayer;
    gameActive = !gameActive;

    if (checkWinner(getBoard(), currentPlayer)) {
        message.innerText = `${currentPlayer} vann!`;
    } else if (checkTie(getBoard())) {
        message.innerText = 'Det blev oavgjort!';
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    if (!gameActive && currentPlayer === aiPlayer) {
        setTimeout(() => {
            const move = bestMove(getBoard());
            cells[move].innerText = aiPlayer;
            gameActive = true;

            if (checkWinner(getBoard(), aiPlayer)) {
                message.innerText = `${aiPlayer} vann!`;
            } else if (checkTie(getBoard())) {
                message.innerText = 'Det blev oavgjort!';
            }

            currentPlayer = 'X';
        }, 1000); // AI tänker i 1 sekund innan den gör sitt drag
    }
}

function resetBoard() {
    cells.forEach((cell) => (cell.innerText = ''));
    message.innerText = '';
    currentPlayer = 'X';
    gameActive = true;
}

function getBoard() {
    return Array.from(cells).map((cell) => cell.innerText);
}

cells.forEach((cell) => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetBoard);
