let resultDisplay= document.querySelector(`#result`)
let choiceDisplay= document.querySelector(`#choices`)
let playAgain=document.querySelector(`#play-again`)
let counter=0;
const choices=["rock" ,"paper","scissors"]


// select your choice, generate computer choice
const handleClick= (e)=>{
    getRuslts(e.target.innerHTML,choices[Math.floor(Math.random()*choices.length)])
}


//generate the buttons
choices.forEach(choice=>{
    const button=document.createElement('button')
    button.innerHTML=choice;
    
    button.addEventListener('click',handleClick)
    choiceDisplay.appendChild(button)
}) 

//play again btn
playAgain.addEventListener("click",(reset)=>{
    resultDisplay.innerHTML="";
    counter=0;
}) 

function getRuslts(playerChoice, computerChoice) {
    switch (playerChoice + computerChoice) {
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            resultDisplay.innerHTML="your choice : "+ playerChoice  +", Computer choice : " + computerChoice + " , You Win !"+ " Round : "+ ++counter;
            break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            resultDisplay.innerHTML="your choice : "+ playerChoice  +", Computer choice :" + computerChoice + " , You lost ! Try Again "+ " Round : "+ ++counter;
            break;

        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            resultDisplay.innerHTML="your choice : "+ playerChoice +", Computer choice : " + computerChoice + " , It's a Draw"  + " Round : "+ ++counter;
            break;

            default:
            resultDisplay.innerHTML = "Invalid input.";
            break;
    }
}

const tutorialSection = document.querySelector("#tutorial");
const showTutorialButton = document.querySelector("#show-tutorial");
const hideTutorialButton = document.querySelector("#hide-tutorial");

//  show the tutorial section
function showTutorial() {
    tutorialSection.style.display = "block";
}

// = hide the tutorial section
function hideTutorial() {
    tutorialSection.style.display = "none";
}


showTutorialButton.addEventListener("click", showTutorial);
hideTutorialButton.addEventListener("click", hideTutorial);

