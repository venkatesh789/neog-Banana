
var btnTranslate = document.querySelector("#btn-tanslate");
var txtInput = document.querySelector('#txt-input');
var trans = document.querySelector("input [name ='translator']");
console.log(trans);

btnTranslate.addEventListener("click", clicka);


/* btnTranslate.addEventListener("mouseover", hover);
function hover(){
    console.log("Butten ke uppar Hover");   
}; */

function clicka(){
    console.log(`My name is ${txtInput.value}`)
    console.log("Clicked");
};


