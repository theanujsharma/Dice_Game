const readMe = document.getElementById("readme")
const rollDiceBtn = document.getElementById("roll")
const resetGameBtn = document.getElementById("reset")
const diceOne = document.getElementById("dice_one")
const diceTwo = document.getElementById("dice_two")
const scoreOne = document.getElementById("score_one")
const scoreTwo = document.getElementById("score_two")
const turn = document.getElementById("turn")
turn.textContent = "Roll Dice To Start"
let playerOneScore = 0
let playerTwoScore = 0
let playerOne = true
readMe.addEventListener("click",
function()
{
    alert(`I am a roll dice game.
            Two people can play it to have fun. 
            I will let you win if you score more than 25.
            It is all about luck. Good Luck!!`)
})
resetGameBtn.style.display = "none"
const resetGame = ()=>
{
    rollDiceBtn.style.display = "block"
    resetGameBtn.style.display = "none"
    turn.textContent = "Roll Dice To Start"
    playerOneScore = 0
    playerTwoScore = 0
    diceOne.textContent = 0
    diceTwo.textContent = 0
    scoreOne.textContent = playerOneScore
    scoreTwo.textContent = playerTwoScore
    playerOne = false
}
const showDice = () =>
{
    rollDiceBtn.style.display = "none"
    resetGameBtn.style.display = "block"
}
resetGameBtn.addEventListener("click",
function()
{
    resetGame()
})


rollDiceBtn.addEventListener("click",
function(){
    const number = Math.floor(Math.random()*6)+1
    if(playerOne && playerOneScore <25 && playerTwoScore <=25)
    {
        diceOne.textContent = number
        diceOne.classList.add("shadow")
        diceTwo.classList.remove("shadow")
        playerOneScore += number
        scoreOne.textContent = playerOneScore
        turn.textContent = "Player B Will Roll"
        playerOne = false
    }
    else if(playerOneScore >= 25)
    {
        turn.textContent = "Game Over!! Player A WON"
        showDice()
    }
    else if(playerTwoScore >=25)
    {
        turn.textContent = "Game Over!! Player B WON"
        showDice()
    }

    else if (playerTwoScore <25)
    {
        diceTwo.textContent = number
        diceTwo.classList.add("shadow")
        diceOne.classList.remove("shadow")
        playerTwoScore +=number
        scoreTwo.textContent = playerTwoScore
        turn.textContent = "Player A Will Roll"
        playerOne = true
    }
})