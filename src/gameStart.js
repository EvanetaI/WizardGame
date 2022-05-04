import { gameAction } from "./globalMovement.js"
import { configurations } from "./configurations.js"
const startGame = document.querySelector('.game-start')
const gameArea = document.querySelector('.game-area')

export function onGameStart(){
   
    startGame.classList.add("hide")
    const wizardDiv = document.createElement("div")
    wizardDiv.classList.add("wizard")
    wizardDiv.style.top=configurations.player.x + "px";
    wizardDiv.style.left=""

    gameArea.appendChild(wizardDiv)
    window.requestAnimationFrame(gameAction)
}