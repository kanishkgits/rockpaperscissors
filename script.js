let humanScore = 0, computerScore = 0
let humanChoice, computerChoice, roundResultText
const buttons = document.querySelector("#buttons")
const roundResult = document.querySelector("#roundResult")
const score = document.querySelector("#score")
const result = document.querySelector("#result")

let getComputerChoice = () => {
    let min = 1, max = 3
    let randomChoice = Math.floor(Math.random() * (max-min+1) + min) 
    if(randomChoice === 1) return "rock"
    else if(randomChoice === 2) return "paper"
    return "scissors"
}

let playRound = (humanChoice, computerChoice) => {
    if(humanChoice == computerChoice) roundResultText = "Draw! You both chose the same."
    else if((humanChoice == "rock" && computerChoice == "paper" )|| (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")){
        roundResultText = `You loose! ${computerChoice} beats ${humanChoice} !!`
        computerScore++
    }
    else{
        roundResultText = `You win! ${humanChoice} beats ${computerChoice} !!`
        humanScore++
    }
}

let displayContents = () => {
    roundResult.textContent = roundResultText
    score.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`
    if(humanScore === 5 || computerScore === 5){
        if(humanScore>computerScore) result.textContent = "You WON"
        else result.textContent = "You LOST"
    }
}

buttons.addEventListener("click", (e) => {
    humanChoice = e.target.id
    computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    displayContents()
})
