// Usernames will be stored in the array

// being commented out for future use it is working logic!! 
let userInput = []
document.querySelector('.input-Username').addEventListener('keydown', event => {
  let user = document.querySelector('.input-Username')
  if (event.key === 'Enter') {
    let pagePrint = user.value.trim()
    if (userInput.length >= 3) {
      userInput.shift()
    }
    if (pagePrint.length <= 2) {
      alert('🚨 Enter reasonable number of letter at least 2 ')
    } else if (pagePrint.length > 10) {
      alert('🚨 dont make your user more than 10 characters')
    } else {
      userInput.push(pagePrint)
      deleteRender()
    }
    user.value = ''
  }
})



/* this renders what goes on the page what is deleted 
(.map helps create  another array and returns the array with trnsformed data)
also ternary operators were used to make code 
shorter and cleaner and we can use it for small conditions not large*/
function deleteRender () {
  const outputUsername = userInput
    .map((name, index) => {
      return `<button  ${
        index === 0
          ? 'data-in = "0" class = "userOne"'
          : index === 1
          ? 'data-in = "1" class = "userTwo"'
          : 'data-in = "2" class = "userThree"'
      }"> ${name}</button>
    <div class = "deleteFunc"> <button class= "deleteButton"> X </button> </div>`
    })
    .join(' ')

  document.querySelector('.results-grid').innerHTML = outputUsername

  document.querySelectorAll('.deleteButton').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      userInput.splice(index, 1)
      deleteRender()
    })
  })
}
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

function efficiencyFunction() {
let efficiencyScore = 10;
 efficiencyTimer = setInterval(() => {
  if (currentQuestionIndex > quizArray.length - 2){
    clearInterval(efficiencyTimer)
   }
 if (!buttonPressed) {
  efficiencyScoreReturn = efficiencyScore--
 } if (efficiencyScore < 0) {
  efficiencyScoreReturn =`Unfortunately you have 0 efficiency. 
  Answer questions quicker to get better efficiency score`
  clearInterval(efficiencyTimer)
 } 
 document.querySelector('.efficiencyDiv')
 .innerHTML = `${efficiencyScoreReturn}`
  buttonPressed = false
  console.log(efficiencyScoreReturn)
}, 2000)
document.querySelector('.efficiencyDiv')
 .innerHTML = `you have a starting efficiency of 10`
}

