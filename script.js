var numberButtons = document.querySelectorAll('.numeros');
var currentValue = document.querySelector('.valor-actual');
var resetButton = document.querySelector('.reset');
var sumSign = document.querySelector('#sum1');
var equalSign = document.querySelector('#equal1');
var result = document.querySelector('#resultado');

function add(a, b) {
    return +a + +b;
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

function calculate(operator, n1, n2) {
    if (operator == '/') {
        return divide(n1, n2);
    }
    if (operator == '+') {
        return add(n1, n2);
    }
    if (operator == '-') {
        return substract(n1, n2);
    }
    if (operator == '*') {
        return multiply(n1, n2);
    }
}

//La siguiente funcion debe imprimir que boton se clickea.
function numberSelect() {

    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].onclick = function () {
            currentValue.textContent = `${currentValue.textContent}${numberButtons[i].textContent}`;
        };
    };
};



numberSelect();

function clearButton() {
    resetButton.addEventListener("click", function () {
        currentValue.textContent = '';
    });
};
clearButton();

function sum() {
    sumSign.onclick = function () {
        currentValue.textContent += '+';
    }
}

function equal() {
    //si se hace click en el signo igual se ejecuta el siguiente codigo.
    equalSign.onclick = function () {
        //en la variable almaceno el contenido de currentValue en un array para poder recorrerlo 
        // e identificar el signo de suma para poder iniciar la operacion de suma en el caso de que se encuentre.
        var arrayCurrentValue = currentValue.textContent.toString().split("");

        //almaceno el segundo valor a partir del signo en adelante.
        var secondValue = '';

        //almaceno el primer valor antes del signo +.
        var firstValue = '';

        for (let i = 0; i < arrayCurrentValue.length; i++) {
            if (arrayCurrentValue[i] == '+') {
                for (let j = 0; j < i; j++) {
                    firstValue += arrayCurrentValue[j];
                }

                for (let j = i + 1; j < arrayCurrentValue.length; j++) {
                    secondValue += arrayCurrentValue[j];
                }
            }
        }
        
        for (let i = 0; i < arrayCurrentValue.length; i++) {
            if (arrayCurrentValue[i] == '+') {
                result.textContent = calculate('+', firstValue, secondValue);
            }
        }
    }
}