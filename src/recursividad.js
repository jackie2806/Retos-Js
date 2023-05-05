// Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva

function sum(n){
    if(n === 0){
        return 0;
    } else {
        return n + sum(n-1)
    }

}

console.log(sum(3));

//Escribe una función que calcule la sucesión de Fibonacci de forma recursiva.
//Fibonacci: serie de números que empieza por 0 y 1, y cada número es la suma de las dos anteriores

//solución usando la posición
function fibonacci(n){
   
    if (n < 2) {
        return n;
      } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
      }
      
    
}

console.log(fibonacci(6))

//solución usando el valor
