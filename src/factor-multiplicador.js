function solution(numbers) {
    
    //empezamos con el primer factor 
    let factor1 = 3;  
  
    const arrResult = []
    const lengthNumbers = numbers.length;
    for (let i = 0; i < lengthNumbers; i++) {
      
      const factor2 = Math.round(numbers[i] / factor1);
        
        arrResult.push(factor2)
        //aumentamos el factor hasta el número de iteraciones del ciclo
        factor1 += 1;
    }
    
    console.log(arrResult)
    return arrResult
     
  }


  
  //solution([27, 36, 45, 54, 63, 72])
  //console.log()
  solution([27, 36, 45, 54, 42, 72])