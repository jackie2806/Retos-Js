function add (a,b){
    return a + b;
}

const operation = add; // se guarda la declaración de la función en esta variable
console.log(operation)

function makeOperation(operation, num1, num2){
    return operation(num1, num2); //se llama a la función y se le asigna los valores a ejecutar en sus argumentos. 
}

console.log(makeOperation(operation,2,3))