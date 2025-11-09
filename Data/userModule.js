// Usernames will be stored in the array

// being commented out for future use it is working logic!! 
 let userInput = []
export function  userRender() {document.querySelector('.input-Username').addEventListener('keydown', event => {
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
}
