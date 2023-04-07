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
