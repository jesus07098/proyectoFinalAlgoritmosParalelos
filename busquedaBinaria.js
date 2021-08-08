//BUSQUEDA BINARIA

let nums = [4, 5, 10, 1, 0, -1, -10];

console.time('Tiempo Busqueda Binaria:');
function quickSort(nums) {
  if (nums.length === 1) {
    return nums;
  }
  let indiceMedio = Math.floor(nums.length / 2); //tomar el valor del medio del arreglo
  let pivot = nums[indiceMedio]; //ir cambiando el valor medio
  let izqArr = []; //subarreglo izquierda
  let derArr = []; //subarreglo derecha
  for (let i = 0; i < nums.length; i++) {
    if (i != indiceMedio) {
      //si el indice no es igual al valor del medio del arreglo
      if (nums[i] > pivot) {
        //si el elemento actual es mayor al pivote
        derArr.push(nums[i]); // inserto al nums derecha
      } else {
        //sino inserto al nums izquierda
        izqArr.push(nums[i]);
      }
    }
  }
  izqArr = quickSort(izqArr);
  derArr = quickSort(derArr);
  return izqArr.concat(pivot).concat(derArr);
}

function binarySearch(array, elemento) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let medio = Math.floor((low + high) / 2); //tomar el numero medio
    let pivote = array[medio]; //intercambiar numero medio al dividir el array
    if (pivote == elemento) {
      //si el numero medio en ese momento es el elemento a buscar retorna ese
      return medio;
    }
    if (pivote > elemento) {
      //si el numero medio es mayor al elemento
      high = medio - 1; //ultimo es igual al numero medio-1
    } else {
      low = medio + 1; //primero es igual al numero medio+1
    }
  }
  s;
  return -1;
}

console.log(
  'Posición encontrada  por búsqueda binaria: ',
  binarySearch(quickSort(nums), 10)
);

console.timeEnd('Tiempo Busqueda Binaria:');
