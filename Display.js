//se encarga de controlar la calculadora, interactuar con los botones y mostrar el resultado o numeros en el display.
class Display {
    //un constructor porque cuando instanciemos la clase le vamos a pasar valores 
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
/*voy a agregar un valorActual y un 
valorAnterior que es distinto al de 
valorDisplay, el display es el elemento que se va 
a modificar, y los siguientes valores son los
 numeros que se van guardando.*/
        this.valorActual = ''; 
        this.valorAnterior = '';
    }

    agregarNumero(numero) {
        this.valorActual = numero;
    }
}