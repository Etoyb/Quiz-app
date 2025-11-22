import { userInput } from "../UserNames/EnterUsers.js"
import { deleteRender } from "../userModule.js"

export let boundaryAllownace = {
    user1: false,
    user2: false,
    user3: false
}
export function defaultName() {
    if (userInput[0] === undefined) {
        userInput[0] = 'Enter Username'
        boundaryAllownace.user1 = true;
    }if (userInput[1] === undefined) {
        userInput[1] = 'Enter Username'
        boundaryAllownace.user2 = true;
    } if (userInput[2] === undefined) {
        userInput[2] = 'Enter Username'
        boundaryAllownace.user3 = true;
    }
    deleteRender()
}
