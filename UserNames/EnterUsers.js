import { deleteRender } from '../userModule.js'
import { placeHolder } from './StartQuizOpt.js';
export let userInput = [] 


let user = document.querySelector('.input-Username')
let pagePrint = user.value;
let currentAllowance = false;

export function placeHolderVeri() {
  document.querySelector('.user-grid').addEventListener('click', event => {
    const btn = event.target.closest('button');
    let buttonValue = Number(btn.dataset.in)
    console.log(`test 2 ${buttonValue}`)

    if (placeHolder === true) {
       
    } else if (placeHolder === false) {
      
    }
  })
}

placeHolderVeri()
