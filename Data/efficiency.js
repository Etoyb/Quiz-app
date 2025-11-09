
export function efficiencyFunction() {
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