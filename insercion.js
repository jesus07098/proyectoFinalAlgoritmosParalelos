//METODO INSERCIÓN

console.log('Ordenamiento por Inserción:');
let arr = [4, 5, 10, 1, 0, -1, -10];

let i, pos, aux;

console.time('Tiempo inserción:');
for (i = 0; i < arr.length; i++) {
  //posiciones del arreglo
  pos = i; //posicion en la que se encuentra
  aux = arr[i]; // almacena el numero en la iteracion que va

  while (pos > 0 && arr[pos - 1] > aux) {
    //si es cero no hay nada a su izquierda por eso >0 & si numeroIzquierda > al numero en la posición
    arr[pos] = arr[pos - 1]; //se realiza el cambio para ordenarlo
    pos--;
  }
  arr[pos] = aux; //para refrescar en que numero vamos
}

arr.forEach((elemento) => console.log(elemento)); //recorrido del array
console.timeEnd('Tiempo inserción:');
