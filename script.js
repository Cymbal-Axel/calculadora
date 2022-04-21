var displayValorAnterior = document.getElementById('valorAnterior');
var displayValorActual = document.getElementById('valorActual');
var botonesNumeros = document.querySelectorAll('.numeros');
var botonesOperadores = document.querySelectorAll('.operacion');

//creo una instancia de Display y como parametro le paso los valores de display anterior y actual.
const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    //cada vez que alguien haga click, el display debe agregar un numero.
    boton.addEventListener('click', () => {
        //"agregarNumero" es un metodo de la clase Display
        display.agregarNumero(boton.innerHTML)
    });
});
