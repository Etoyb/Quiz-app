import { boundaryAllownace } from "./boundaries.js"

export let placeHolder = true;
export function  display() {document.querySelector('.user-grid').addEventListener('click', event => {
    const btn = event.target.closest('button')
    const buttonValue = Number(btn.dataset.in);

    let user1 = boundaryAllownace.user1;
    let user2 = boundaryAllownace.user2;
    let user3 = boundaryAllownace.user3;

    if (buttonValue === 0) {
      if (user1 === true) {
        placeHolder = true;
      } else {
        placeHolder = false;
      }
  } if (buttonValue === 1) {
        if (user2  === true) {
          placeHolder = true
    } else {
      placeHolder = false
    }
    
  }
  if (buttonValue === 2) {
      if (user3 === true) {
        placeHolder = true
      } else {
        placeHolder = false;
      }
    }
})
}
