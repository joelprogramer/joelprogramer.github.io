const question = document.getElementById('question');
const answerInput = document.getElementById('answer');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

let currentPairIndex = 0;

let wordPairs = [
    { question: 'apple', answer: 'äpple' },
    { question: 'banana', answer: 'banan' },
    { question: 'car', answer: 'bil' },
];

function showNextQuestion() {
    if (currentPairIndex < wordPairs.length) {
        // No need for newFunction() here
        question.innerText = `Översätt detta ord: ${wordPairs[currentPairIndex].question}`;
        answerInput.value = '';
        checkButton.innerText = 'kontrollera';
    } else {
        question.innerText = 'Glosförhöret är avslutat!!';
        answerInput.style.display = 'none';
        checkButton.style.display = 'none';
    }
}

checkButton.addEventListener('click', () => {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = wordPairs[currentPairIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        result.innerText = 'Rätt svar';
    } else {
        result.innerText = 'Fel svar';
    }

    currentPairIndex++;
    showNextQuestion();
});

showNextQuestion();
