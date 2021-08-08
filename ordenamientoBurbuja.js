//METODO BURBUJA
let array = [4, 5, 10, 1, 0, -1, -10];
let m, n, auxiliar;
console.time('Tiempo Ordenamiento Búrbuja:');
for (let m = 0; m < array.length; m++) {
  for (let n = 0; n < array.length; n++) {
    if (array[n] > array[n + 1]) {
      //numero actual es mayor al numero siguiente
      auxiliar = array[n]; //hacer el intercambio
      array[n] = array[n + 1]; //numero actual va hacer igual a numero siguiente
      array[n + 1] = auxiliar; //numero siguiente se intercambia por auxiliar
    }
  }
}
console.log('Ordenamiento Burbuja:');
array.forEach((elemento) => console.log(elemento)); //recorrido del array
console.timeEnd('Tiempo Ordenamiento Búrbuja:');
