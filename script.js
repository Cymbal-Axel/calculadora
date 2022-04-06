function add(a, b){
return a + b;
};

function multiply(a, b){
return a * b;
};

function substract(a, b){
    return a - b;
};

function divide(a, b){
    return a / b;
};

function operator(o, n1, n2){
    if (o == '/'){
         console.log(divide(n1, n2));
    }
    if (o == '+'){
        console.log(add(n1, n2));
    }
    if (o == '-'){
        console.log(substract(n1, n2));
    }
    if (o == '*'){
        console.log(multiply(n1, n2));
    }
}