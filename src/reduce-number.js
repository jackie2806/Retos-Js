/* En este desafío vas a recibir un número que tendrás que reducir a uno en la menor cantidad de pasos posibles aplicando las siguientes opreraciones:

Si es número par puedes divdir por 2
Si es número impar puedes sumar 1 o restar 1. (n+1) o (n-1).
Input

solution(15)

Output

5 */
//esta primera solución solo funciona para números pequeños
/* function solution(num) {
  let counterSteps = 0;
  if(num === 0){
    return 0;
  }
  if(num === 1){
    return 1;
  }
  if(num > 1){
    let newNUmber = num;
    if(newNUmber % 2 === 0){
      while(newNUmber > 1){
        newNUmber = newNUmber / 2;
        counterSteps += 1;
      }
    }else{
      newNUmber = num + 1;
      counterSteps += 1;
      while(newNUmber > 1){
        newNUmber = newNUmber / 2;
        counterSteps += 1;
      }

    }
  }
return counterSteps;
  
} */

//funciona para todo número, ya sea grande o pequeño
function solution(num) {
  let counter = 0;
  if(num === 0){
    return 0;
  }
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      if (num === 3) {
        num = num - 1;
      } else if ((num + 1) % 4 === 0) {
        num = num + 1;
      } else {
        num = num - 1;
      }
    }
    counter++;
  }
  
  return counter;
}


console.log(solution(15));
console.log(solution(328593));
console.log(solution(1));
console.log(solution(0));
console.log(solution(2))
console.log(solution(16))


