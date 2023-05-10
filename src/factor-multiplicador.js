function solution(numbers) {
    // Tu código aquí 👈  
    let factor1 = 3;  
    console.log('aquí', factor1)
    const lengthNumbers = numbers.length;
    for (let i = 0; i < lengthNumbers; i++) {
        //let factor1 = 3;
        console.log('i',numbers[i])
      const factor2 = Math.round(numbers[i] / factor1);
      console.log('factor2', factor2)
      if (factor1 * factor2 === numbers[i]) {        
       //factor1 += 1;        
        console.log('factor1', factor1)
        return factor2;
      } else {
        return false;
      }
    }
    factor1 += 1;
  }
  //solution([27, 36, 45, 54, 63, 72])
  //console.log()
  solution([27, 36, 45, 54, 42, 72])