// Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva

function sum (n){
    if(n === 0){
        return 0;
    } else {
        return n + sum(n-1)
    }

}

console.log(sum(3));