window.onload = function () {
    var gameBoard =
        document.getElementById("game-board");
    var score = 0;
    var scoreValue =
        document.getElementById("score.value");


    gameBoard.addEventListener("click",
        function (event) {
            if (event.target.classList.contains("game-peice")) { score++; scoreValue.textContent = score; }
        });

        function createGamePiece() {
            var gamePiece =
                document.createElement("div");
            gamePiece.classList.add("game-piece");
            gamePiece.style.left =
                getRandomPosition() + "px";
            gamePiece.style.top
            getRandomPosition() + "px";
            gameBoard.appendChild(gamePiece);
        }
        
        function getRandomPosition() {
            var min = 0;
            var max = 350;
            return Math.random() * (max - min) +
                min;
        }
        
        setInterval(createGamePiece, 1000);
};

