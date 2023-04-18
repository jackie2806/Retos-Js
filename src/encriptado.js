function encryption(s) {
    const lengthOfStr = s.length;
    const sqrtOf = Math.sqrt(lengthOfStr);
    let numberOfRows = 0;
    let numberOfColumns = 0;

    if(numberOfRows*numberOfColumns < lengthOfStr){
        numberOfRows = Math.round(sqrtOf);  
        numberOfColumns =  Math.ceil(sqrtOf); 
  
        }else{
            numberOfRows = Math.floor(sqrtOf); 
            numberOfColumns =  Math.ceil(sqrtOf); 
    }


    const arrTwoDimensions = [];

    for(let i = 0; i <= s.length - 1; i += numberOfColumns){ 
        let subArray = s.substring(i, i + numberOfColumns).split('');
        arrTwoDimensions.push(subArray);
    }


    let result = '';

    for (let j = 0; j <= arrTwoDimensions[0].length - 1; j++) {
        for (let i = 0; i <= arrTwoDimensions.length - 1; i++) {
            if (arrTwoDimensions[i][j] !== undefined) {
             result += arrTwoDimensions[i][j];
            }
        }
        result += ' ';
    }

    result = result.trim();
    
    return result;


}