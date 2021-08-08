//ORDENAMIENTO QUICKSORT
let vector = [4, 5, 10, 1, 0, -1, -10];
console.time('Tiempo Ordenamiento por Quicksort:');
function quickSort(vector) {
  if (vector.length === 1) {
    return vector;
  }
  let indiceMedio = Math.floor(vector.length / 2); //tomar el valor del medio del arreglo
  let pivot = vector[indiceMedio]; //ir cambiando el valor medio
  let izqArr = []; //subarreglo izquierda
  let derArr = []; //subarreglo derecha
  for (let i = 0; i < vector.length; i++) {
    if (i != indiceMedio) {
      //si el indice no es igual al valor del medio del arreglo
      if (vector[i] > pivot) {
        //si el elemento actual es mayor al pivote
        derArr.push(vector[i]); // inserto al vector derecha
      } else {
        //sino inserto al vector izquierda
        izqArr.push(vector[i]);
      }
    }
  }
  izqArr = quickSort(izqArr);
  derArr = quickSort(derArr);
  return izqArr.concat(pivot).concat(derArr);
}

console.log('Ordenamiento por Quicksort: ', quickSort(vector));
console.timeEnd('Tiempo Ordenamiento por Quicksort:');
