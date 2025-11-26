import { currentQuestionIndex } from '../Quiz.js'
import { quizArray } from '../Data/QuestionsArray.js'

export const efiiciencyObject = {
  buttonPressed: false,

  checkButtonStatus () {
    document.querySelector('.js-question-display').addEventListener('click', event => {
        let btn = event.target.closest('buttton')

        if (btn) {
          this.buttonPressed = true
        }
      })
  },

  efficiencyFunction () {
    let efficiencyScore = 10
    let efficiencyScoreReturn

    let efficiencyTimer = setInterval(() => {
      if (currentQuestionIndex > quizArray.length - 2) {
        clearInterval(efficiencyTimer)
      }
      if (!this.buttonPressed) {
        efficiencyScoreReturn = efficiencyScore--
      }
      if (efficiencyScore < 0) {
        efficiencyScoreReturn = `Unfortunately you have 0 efficiency. 
      Answer questions quicker to get better efficiency score`
        clearInterval(efficiencyTimer)
      }
      document.querySelector('.efficiencyDiv').innerHTML = `Your efficiency is currently at
    ${efficiencyScoreReturn}`
      this.buttonPressed = false
      console.log(efficiencyScoreReturn)
    }, 2000)
    document.querySelector('.efficiencyDiv').innerHTML = `you have a starting efficiency of 10`
  },

}
