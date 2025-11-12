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
export function deleteRender () {
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

let 