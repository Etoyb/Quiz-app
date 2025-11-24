import { deleteRender } from './userModule.js'
export const Start = {

  userInput: [undefined, undefined, undefined],
  userIndex: undefined,
   startQuiz() {
    document.querySelector('.input-Username').addEventListener('keydown', event => {
      let user = document.querySelector('.input-Username')
      let currentAllowance = true;
      let pagePrint = user.value;
      if (pagePrint.length < 2) {
      currentAllowance = false;
      } if (pagePrint.length > 12) {
        currentAllowance = false
      }

      if (event.key === 'Enter') {
        console.log(currentAllowance)
        if (currentAllowance === false) {
          alert(`Check if you have less than 2 character if so enter more than 2
            
  Also Check if you have more than 12 characters if so enter less 12 chararacters `)
        } else if (currentAllowance === true) {
          if (this.userIndex === 0) {
            this.userInput[0] = pagePrint;
            deleteRender()
          } else if (this.userIndex === 1) {
            this.userInput[1] = pagePrint;
            deleteRender()
          } else if (this.userIndex === 2){
            this.userInput[2] = pagePrint;
            deleteRender()
          }
      }
      user.value = '';            
   }
    })
  },

  placeHolderVeri() {
    document.querySelector('.user-grid').addEventListener('click', event => {
      const btn = event.target.closest('button');
       this.userIndex = Number(btn.dataset.in);
      console.log(this.userIndex)
      console.trace()
      console.count() 
    })
  },

  defaultName() {
    Start.userInput.forEach((name, index) => {
      if(Start.userInput[index] === undefined) {
        Start.userInput[index] = 'Enter Username'
      }
      deleteRender()
    })
  }
} 