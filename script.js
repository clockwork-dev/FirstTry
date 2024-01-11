const span1 = document.getElementById("span1");
const increasebutton = document.getElementById("increaseButton");
const saveButton = document.getElementById("saveButton");
const counterValue = document.getElementById("counterValue");
const saveValue = document.getElementById("saveValue");
let counter = 0
let saveLimitValue = 0;
const maxSaveLimitValue = 5;

// Event section
increasebutton.onclick = counterAppAdd;
saveButton.onclick = counterAppSave;
span1.onmouseover = textMetamorphose;

// function section
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
