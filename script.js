
var numberButtons = document.querySelectorAll('.numeros');
var valorActual = document.querySelector('.valor-actual');
var resetButton = document.querySelector('.reset');

function add(a, b) {
    return a + b;
};

function multiply(a, b) {
    return a * b;
};

function substract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a / b;
};

function operator(o, n1, n2) {
    if (o == '/') {
        return divide(n1, n2);
    }
    if (o == '+') {
        return add(n1, n2);
    }
    if (o == '-') {
        return substract(n1, n2);
    }
    if (o == '*') {
        return multiply(n1, n2);
    }
}

//La siguiente funcion debe imprimir que boton se clickea.
function numberSelect(e){
    for(let i = 0; i < numberButtons.length; i++){
        var valorAnterior = valorActual.textContent;
        numberButtons[i].addEventListener("click", function(){

            valorActual.textContent = `${numberButtons[i].textContent}${valorAnterior}`;
        })        
          
        
    }
}
numberSelect();

function clearButton(){
    resetButton.addEventListener("click", function(){
        valorActual.textContent = 0;
    })
}
clearButton();
