function solution(num) {
  // Tu código aquí 👈
  const primos = [];

  for (let i = 2; i <= num; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }
  console.log(primos)
  return primos;
}

function esPrimo(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    //eficiencia del algoritmo
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

solution(20); 
