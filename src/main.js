import { onGameStart } from "./gameStart.js";
import * as movementFunctions from "./globalMovement.js";

const startGame = document.querySelector('.game-start')
const score = document.querySelector('.game-score')
const gameArea = document.querySelector('.game-area')
const gameOver = document.querySelector('.game-over')

startGame.addEventListener("click", onGameStart)

document.addEventListener("keydown", movementFunctions.onKeyDown)
document.addEventListener("keyup", movementFunctions.onKeyDown)
