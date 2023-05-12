/* En este desafío vas a recibir un número que tendrás que reducir a uno en la menor cantidad de pasos posibles aplicando las siguientes opreraciones:

Si es número par puedes divdir por 2
Si es número impar puedes sumar 1 o restar 1. (n+1) o (n-1).
Input

solution(15)

Output

5 */
function solution(num) {
    let counter = 0;
    if (num === 1){
        counter++;
        return counter;
    } else {
        for(let i = num + 1; i <= 1; i--){
            counter++;
        }
    }

    return counter;
  }

  console.log(solution(15));