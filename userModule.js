import { enterDoc } from "./UserNames/EnterUsers.js";
import { userInput } from "./UserNames/EnterUsers.js";
import { defaultName } from "./UserNames/boundaries.js";
import { display } from "./UserNames/StartQuizOpt.js";

defaultName()
display()
enterDoc()
/* this renders what goes on the page what is deleted 
(.map helps create  another array and returns the array with trnsformed data)
also ternary operators were used to make code 
shorter and cleaner and we can use it for small conditions not large*/

 export function deleteRender () {
    const outputUsername = userInput.map((name, index) => {
      return`<button  ${
        index === 0.
          ? 'data-in = "0" class = "userOne"'
          : index === 1
          ? 'data-in = "1" class = "userTwo"'
          : 'data-in = "2" class = "userThree"'
      }"> ${name}</button>
     <div class = "deleteFunc"> <button class= "deleteButton"> X </button> </div>`
    }).join(' ')

  document.querySelector('.user-grid').innerHTML = outputUsername;

  document.querySelectorAll('.deleteButton').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      userInput.splice(index, 1)
      deleteRender()
    })
  })
}