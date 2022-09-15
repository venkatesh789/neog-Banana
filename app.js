
var btnTranslate = document.querySelector("#btn-tanslate");
var txtInput = document.querySelector('#txt-input');
var outPutDiv = document.querySelector('#output');



btnTranslate.addEventListener("click", clicka);


/* btnTranslate.addEventListener("mouseover", hover);
function hover(){
    console.log("Butten ke uppar Hover");   
}; */

function clicka(){
    console.log(`My name is ${txtInput.value}`)
    outPutDiv.innerHTML = txtInput.value + 'Good Morning'; 
}

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=Venkatesh"

fetch(url).then(function responseHandler(response){return response.json() });
.then(function logJSON(json){console.log(json)});
