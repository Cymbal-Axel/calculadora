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

    borrar(){
    /* En el slice al tener el numero negativo, indica un desplazamiento desde el final del array. 
       Si tuviera un -2 eliminaria los dos ultimos numeros. */
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    agregarNumero(numero) {
//Linea 20: Si el numero seleccionado es un punto, verifico con el includes
// si ya hay un punto, y si se cumple no devuelvo nada para evitar que se agreguen mas puntos.
        if(numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.valorAnterior.textContent = this.valorAnterior
    }
}