function permutationEquation(p) {
    let result = '';
    let max = 0;
    for (let i = 0; i <= p.length-1; i++){
    if(p[i] > max){
        let newMax = p[i];
        max = newMax;          
    }  
    let element = i+1;
    let positionOfElement = p.indexOf(element);
    let newElement = positionOfElement + 1;
    let newPositionOfNewElement = p.indexOf(newElement);
    let y = newPositionOfNewElement+1;
    
    result += `${y}\n`;        
   
}

return result;
}