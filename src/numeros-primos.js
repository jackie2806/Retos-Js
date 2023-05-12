function solution(num) {
    // Tu código aquí 👈
    console.log(num)
    const result = [];
  
    if (num > 1) {
      for (let i = 2; i <= num; i++){
        if (i % i === 0 && i % 1 === 0 && i % 2 === 1) {
          result.push(i)
        }
      }
    }
   console.log(result)
  }

  solution(5)