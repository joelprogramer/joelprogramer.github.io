const question = document.getElementById('question')
const answerInput = document.getElementById('answer')
const checkButton = document.getElementById('check-button')
const result = document.getElementById('result')

const wordPairs = [
    { question: 'apple', answer: 'äpple' },
    { question: 'bananana', answer: 'banan' },
    { question: 'car', answer: 'bil' },
];

let currentPairIndex

function showNextQuestion() {
    if (currentPairIndex < wordPairs.length) {
        question.innerText = 'Översätt detta ord: ${wordPairs[currentPairIndex].question}';
        answerInput.value = '';
        checkButton.innerText = '';
    } else {
        question.innerText = 'glosföret är avlsutat!!!';
        answerInput.style.display = 'none';
        checkButton.style.display = 'none';
    }
}

checkButton.addEventListener('click', () => {
    const useranswer = answerInput.value.toLowerCase();
    const correctaswer = wordPairs[currentPairIndex].answer.toLowerCase();

    if (useranswer === currentanswer) {
        result.innerText = 'rätt swar';
    } else {
        result.innerText = 'fel Swar';
    }

    currentPairIndex++;
    showNextQuestion();
})

showNextQuestion();