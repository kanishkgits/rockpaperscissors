let getComputerChoice = () => {
    let a = Math.random()
    if(a<0.33) return "rock"
    else if(a<0.66) return "paper"
    return "scissors"
}

let getHumanChoice = () => {
    let b = prompt("Rock, Papers, Scissors!!")
    return b.toLowerCase()
}

let humanScore = 0, computerScore = 0
let humanChoice, computerChoice 
let playRound = (humanChoice, computerChoice) => {
    if(humanChoice == computerChoice) console.log("Draw! You both chose the same.")
    else if((humanChoice == "rock" && computerChoice == "paper" )|| (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")){
        console.log("You loose!" + computerChoice + " beats " + humanChoice + "!!")
        computerScore++
    }
    else{
        console.log("You win!" + humanChoice + " beats " + computerChoice + "!!")
        humanScore++
    }
}
for(let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
}
if(computerScore > humanScore) console.log( "You Lost!!")
else if(humanScore > computerScore) console.log("You WON!!!")
else console.log("It's a TIE !!!")