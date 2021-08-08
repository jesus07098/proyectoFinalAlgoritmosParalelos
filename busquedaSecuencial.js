//Búsqueda Secuencial

let arreglo = [4, 5, 10, 1, 0, -1, -10];

console.time('Tiempo Búsqueda Secuencial:');
// Devolverá el índice donde encontró  al elemento. Recibe el valor a buscar y el arreglo donde buscará
function busquedaSecuencial(elemento, arreglo) {
  for (let i in arreglo) {
    if (arreglo[i] == elemento) return i;
  }
  return -1;
}

console.log('Búsqueda Secuencial:', busquedaSecuencial(-10, arreglo));
console.timeEnd('Tiempo Búsqueda Secuencial:');
