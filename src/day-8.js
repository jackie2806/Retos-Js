  /* Closures y higher order functions*/
/* Ejercicio resuelto (playground) */

/* La calculadora debe contar con los siguientes métodos:

add: recibe un número, lo suma al total y devuelve el resultado
subtract: recibe un número, lo resta al total y devuelve el resultado
multiply: recibe un número, lo multiplica al total y devuelve el resultado
divide: recibe un número, lo divide al total y devuelve el resultado
clear: reinicia el total a 0 y devuelve el resultado
getTotal: devuelve el total actual.
Ejemplo 1:

Input:
const calculator = createCalculator()
calculator.add(10)

Output: 10

Ejemplo 2:

const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)

Output: 20

Ejemplo 3:

const calculator = createCalculator()
calculator.add(10)
calculator.subtract(-10)
calculator.clear()

Output: 0 */

function createCalculator() {
  let total = 0;
  return {
    add: (value) => {
      total += value;
      return total;
    },
    subtract: (value) => {
      total -= value;
      return total;
    },
    multiply: (value) => {
      total *= value;
      return total;
    },
    divide: (value) => {
      total /= value;
      return total;
    },
    clear: (value) => {
      value = 0;
      total = value;
      return total;
    },
    getTotal: (value) => {
      value = total;
      return value;
    }
  }
  
}

const sum1 = createCalculator();
console.log(sum1.add(5))
console.log(sum1.add(2))


// Crea tu propio método map

/* En este desafío debes desarrollar una implementación personalizada del método map utilizando funciones de orden superior.

Recibirás como parámetros un array y una función (func). El array contendrá un conjunto de elementos (números, objetos, strings, etc.) y la función se utilizará para aplicar una acción sobre cada elemento del array. Tu objetivo es devolver un nuevo array con los resultados de la función tal y como lo haría el método map.
 */

myMap(array, func) {
  const newArr = [];
 
  for (let i = 0; i <= array.length - 1; i++){
    
    newArr.push(func(array[i]))
  }
  console.log(newArr)
  return newArr;
  
  
}



















