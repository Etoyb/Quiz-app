import { deleteRender } from "../Data/userModule.js";
import { efficiencyFunction } from "./Data/efficiency.js";

deleteRender()
let isCorrect
let quizArray = [
  {
    question:
      'How many players have won the ballon dor whilst playingin England',
    options: [2, 7, 5, 6],
    correctIndex: 1
  },
  {
    question:
      'Which two players hold the recod for the most assist in a premier league season ',
    options: [
      'Ryan Giggs and Thierry Henry',
      'Salah and De Bruyne',
      'Ozil and Salah',
      'De Bruyne and Thierry Henry'
    ],
    correctIndex: 3
  },
  {
    question:
      'which world cup tournament hads the most goals scored ever in history of the sport',
    options: [
      'France 1998 and 2014 Brazil',
      'Jabulani 2010 Southafrica',
      'Qatar 2022',
      'Russia 2018'
    ],
    correctIndex: 0
  },
  {
    question: 'Which countries will host the world cup in 2030',
    options: [
      'Portugal and Spain',
      'Morroco and algeria',
      'Morroco Spain and Portugal',
      'Saudi Arabia and Algeria'
    ],
    correctIndex: 2
  },
  {
    question: 'How many players have won the ballon D`or since 2015',
    options: [6, 7, 9, 5],
    correctIndex: 0
  }
]

let currentQuestionIndex = 0
function ShowQuestion () {
  let question = quizArray[currentQuestionIndex].question
  let questionrender = quizArray[currentQuestionIndex].options
    .map((button, index) => {
      return `<button data-value = "${index}" class = "selectButtons"> ${button} </button>`
    })
    .join(' ')
  document.querySelector(
    '.js-question-display'
  ).innerHTML = `${question} <br> <br>${questionrender} <br> <br>  `
}

document.querySelector('.runQuiz').addEventListener('click', () => {
let btn = document.querySelector('.runQuiz');
 btn.remove()
  ShowQuestion()
  efficiencyFunction() 
})

// btn for button
let buttonPressed = false
display = document.querySelector('.answerResultDisplay')
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
    display = document.querySelector(
      '.answerResultDisplay'
    ).innerHTML = `answered  ${isCorrect} <br> 
   Correct:${score.correct} <br> Wrong:${score.wrong} <br> <br>
   You also have an accuracy of ${accuracy}% `

   if (btn) {
    buttonPressed = true
  } 
  })

let score = {
  correct: 0,
  wrong: 0
}

function questionMove () {
  if (isCorrect === 'correct') {
    currentQuestionIndex++
  }
  if (currentQuestionIndex > quizArray.length - 1) {
    document.querySelector('.js-question-display')
    .innerHTML = `Your other results are packaged in that file there it will 
    contain your accuracy and your efficiency this is just version 1 more versions
     will come out <br> <br>  `
  } 
  ShowQuestion()
}

