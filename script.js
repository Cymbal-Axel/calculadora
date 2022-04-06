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
         return divide(n1, n2);
    }
    if (o == '+'){
        return add(n1, n2);
    }
    if (o == '-'){
        return substract(n1, n2);
    }
    if (o == '*'){
        return multiply(n1, n2);
    }
}