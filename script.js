const span1 = document.getElementById("span1");
const increasebutton = document.getElementById("increaseButton");
const saveButton = document.getElementById("saveButton");
const counterValue = document.getElementById("counterValue");
const saveValue = document.getElementById("saveValue");
const startSecondGameButton = document.getElementById("start-game-button");
const takeCardButton = document.getElementById("take-card-button");
const secondGameCardsValue = document.getElementById("cards-value-js");
const secondGameSumOfCardsValue = document.getElementById("sum-value-js");
const secondGameMainText = document.getElementById("main-text-second-game");
// FirstAppVar
let counter = 0;
let saveLimitValue = 0;
const maxSaveLimitValue = 5;
// SecondAppVar
let firstCard ;
let secondCard ;



// Event section
increasebutton.onclick = counterAppAdd;
saveButton.onclick = counterAppSave;
span1.onmouseover = textMetamorphose;
startSecondGameButton.onclick = startSecondGame;

// function section for First App/Game
function textMetamorphose(){
    span1.innerText = "testNoName.project AKA влад назвал калькулятур";
    span1.onmouseleave = ()=> {
        span1.innerText = "testNoName.project";
    }
};

function counterAppAdd(){
 counter ++;
 counterValue.innerText = counter;
};

function counterAppSave(){
        
    if (saveLimitValue < maxSaveLimitValue){
    saveValue.innerHTML += counter +' ';
    counterValue.innerText = 0;
    
    } else  {
        saveValue.innerText = " ";
        counter = 0;
        limitCounter = 0
    };
    counter = 0;
    limitCounter ++;
};
// function section for Second Game//

function startSecondGame(){
    secondGameMainText.innerText = ""
    takeCardButton.onclick = takeCard;
    firstCard = getRandomCardValue();
    secondCard = getRandomCardValue();
    let cardsArray = [firstCard,secondCard];
   
    function takeCard(){
        cardsArray.push(getRandomCardValue());
        secondGameCardsValue.innerText = cardsArray.join(" ");
        secondGameSumOfCardsValue.innerText = cardsArray.reduce((a,b)=> a+b);
    };

    function getRandomCardValue(){
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

        return calculateCardValue(randomRank);
    };
    function calculateCardValue(rank){
        if (['J', 'Q', 'K'].includes(rank)) {
            return 10;
        } else if (rank === 'A') {
            return 11; // 
        } else {
            return parseInt(rank, 10);
        };
    };
    secondGameCardsValue.innerText = cardsArray.join(" ");
    secondGameSumOfCardsValue.innerText = cardsArray.reduce((a,b)=> a+b);
}
