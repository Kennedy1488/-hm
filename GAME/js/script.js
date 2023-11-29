var correctAnswer = Math.floor(Math.random() * (20 - 1)) + 1;
var count = 0; // Текущий колво попыток
var correctAnswers = 0; // Количество правильных ответов
console.log(correctAnswer);

let result = document.getElementById('result');
let output = document.querySelector('.output');

console.log(result);

function nextQuestion() {
    let answer = document.getElementById("answer");
    count++; // Увеличиваем счетчик попыток
    output.innerHTML = `Попытка ${count}`;

    if (Number(answer.value) === correctAnswer) {
        result.innerHTML = `Вы угадали число ${correctAnswer} за ${count} попыток`;

    }
}