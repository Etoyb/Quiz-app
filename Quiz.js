import { efficiencyFunction } from "../Data/efficiency.js";
import { quizArray } from "../Data/QuestionsArray.js";

export let isCorrect;
export let currentQuestionIndex = 0
function ShowQuestion () {
  let question = quizArray[currentQuestionIndex].question
  let questionrender = quizArray[currentQuestionIndex].options
    .map((button, index) => {
      return `<button data-value = "${index}" class = "selectButtons"> ${button} </button>`
    })
    .join(' ')
  document.querySelector('.js-question-display')
  .innerHTML = `${question} <br> <br>${questionrender} <br> <br>  `
}

document.querySelector('.runQuiz').addEventListener('click', () => {
let btn = document.querySelector('.runQuiz');
 btn.remove()
  ShowQuestion()
  efficiencyFunction() 
})

document.querySelector('.answerResultDisplay')
.innerHTML = `your scores and results will be placed in a minuete`;

document.querySelector('.js-question-display').addEventListener('click', event => {
    const btn = event.target.closest('button')
    if (!btn) return
    const buttonValue = Number(btn.dataset.value)
    let realAnswer = quizArray[currentQuestionIndex].correctIndex;

    isCorrect = buttonValue === realAnswer ? 'correct' : 'wrong'

    questionMove()
    isCorrect === 'correct' ? score.correct++ : score.wrong++

    let attempts = score.correct + score.wrong
    let accuracy = Math.floor((score.correct / attempts) * 100)
    document.querySelector('.answerResultDisplay')
    .innerHTML = `answered  ${isCorrect} <br> 
   Correct:${score.correct} <br> Wrong:${score.wrong} <br> <br>
   You also have an accuracy of ${accuracy}% `;
 })

 
 export let score = {
  correct: 0,
  wrong: 0
}

export function questionMove () {
  if (isCorrect === 'correct') {
    currentQuestionIndex++
  }
  if (currentQuestionIndex > quizArray.length - 1) {
    document.querySelector('.js-question-display')
    .innerHTML = `This is the end of the quiz how have you done ?
    Do you think you did better than me 🤔 i got 100% acuuracy by the way 
    <br> <br>  `
  } 
  ShowQuestion()
}

