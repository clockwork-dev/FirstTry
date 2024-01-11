const Span1 = document.getElementById("Span1");
const increasebutton = document.getElementById("increaseButton");
const saveButton = document.getElementById("saveButton");
const counterValue = document.getElementById("counterValue");
const saveValue = document.getElementById("saveValue");
var counter = 0
let limitCounter = 0
// Event section
increasebutton.onclick = counterAppAdd;
saveButton.onclick = counterAppSave;
Span1.onmouseover = textMetamorphose;
// function section
function textMetamorphose(){
    Span1.innerText = "testNoName.project AKA влад назвал калькулятур";
    Span1.onmouseleave = ()=> {
        Span1.innerText = "testNoName.project";
    }
};
function counterAppAdd(){
 counter ++;
 counterValue.innerText = counter;
}
function counterAppSave(){
    
  if (limitCounter < 5){
  saveValue.innerText += counter+'-';
  counter = 0;
  counterValue.innerText = 0;
  
} else  {
    saveValue.innerText = " ";
    counter = 0;
    limitCounter = 0
};
limitCounter ++;
};
