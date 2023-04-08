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
  var total = 0;
  return {
      add : (value) => {
          total += value;
          return total;
      },
      add2 : function (value) {
          total += value;
          return total;
      }
      /* subtract,
      multiply,
      divide,
      clear,
      getTotal,  */
  }
}

const sum = createCalculator();
console.log(sum.add(2));
console.log(sum.add(3));
console.log(sum.add2(2));
console.log(sum.add2(3));

var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
    console.log(i)
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log(i);
    console.log("My value:", i);
  };
}

console.log(funcs)
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}


// Ejemplos de closures


function add (a,b){
  return a + b;
}

const operation = add; // se guarda la declaración de la función en esta variable
//console.log(operation)

function makeOperation(operation, num1, num2){
  return operation(num1, num2); //se llama a la función y se le asigna los valores a ejecutar en sus argumentos. 
}

console.log('make',makeOperation(operation,2,3))

// una curiosidad descubierta

/* function add (a,b){
  return a + b;
}

//const operation = add; // se guarda la declaración de la función en esta variable
//console.log(operation)

function makeOperation(add, num1, num2){
  return add(num1, num2); //se llama a la función y se le asigna los valores a ejecutar en sus argumentos. 
}

console.log(makeOperation(add,2,3)) */

//Closure

function multiplyBy(multiplier) {
  console.log('multiplier', multiplier)
  return function (value) { //función anónima (sirve como parámetro de otra función)
  console.log('value', value)
  return value* multiplier;
  }
   
}
  
  const double= multiplyBy(2);
  console.log(double(8))

  multiplyBy.x = 7;
  multiplyBy.print = function(){
      console.log('hola')
  }    
  console.log(multiplyBy)
  multiplyBy.print()
  
 // console.log(double(5)); // Output: 10
  //console.log(double(10)); // Output: 20
  
  //const triple = multiplyBy(3);
  //console.log(triple(10)); // Output: 30
  //console.log(triple(20)); // Output: 60
  
//his question does not show any research effort; it is unclear or not useful
