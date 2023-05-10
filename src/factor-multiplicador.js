function solution(numbers) {
    
    //empezamos con el primer factor 
    let factor1 = 3;  
    let factor2 = 1;
    const arrResult = []
    const lengthNumbers = numbers.length;
    for (let i = 0; i < lengthNumbers; i++) {
      
      factor2 = Math.round(numbers[i] / factor1);
        
        arrResult.push(factor2)
        //aumentamos el factor hasta el número de iteraciones del ciclo
        factor1 += 1;
    }
    const lengthArrResult = arrResult.length;
    let multiplier;
    for(let i = 0; i < lengthArrResult; i++){
      for(let j = i + 1; j < lengthArrResult; j++){
        if(arrResult[i] === arrResult[j]){
          multiplier = true;
        } else{
          multiplier = false;
        }
      }
    }
    //console.log(factor2)
    if(multiplier){
      multiplier = factor2;
    
    } 
    console.log(multiplier)
    return multiplier;
     
  }


  solution([6, 8, 10, 12, 14, 16]);
  solution([27, 36, 45, 54, 63, 72]);
  //console.log()
  solution([27, 36, 45, 54, 42, 72]);