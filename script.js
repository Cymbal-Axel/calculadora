
var numberButton = document.querySelectorAll('.numeros')
var valorActual = document.querySelector('.valor-actual')

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
function numberSelect(){
    for(let i = 0; i < numberButton.length; i++){
        if(numberButton[i].onClick){
          valorActual.textContent = `${valorActual.textContent}${numberButton[i].textContent}`;
        }
    }    
}
numberSelect();