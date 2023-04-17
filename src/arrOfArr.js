const str = "feedthedog";
const arrStr = str.split("");
const lengthOfStr = str.length;
const sqrtOf = Math.sqrt(lengthOfStr);
console.log(sqrtOf);
let numberOfRows = 0;
let numberOfColumns = 0;
//let newArrStrWithSpaces;
//agrupación
//primero columnas
if(numberOfRows*numberOfColumns < lengthOfStr){
  numberOfRows = Math.round(sqrtOf);
  console.log(numberOfRows)
  numberOfColumns =  Math.ceil(sqrtOf); 
  console.log(numberOfColumns)
}else{
  numberOfRows = Math.floor(sqrtOf); 

console.log(numberOfRows)
numberOfColumns =  Math.ceil(sqrtOf); 
console.log(numberOfColumns)
}

console.log(arrStr)

const arrTwoDimensions = [];
const copyOfArrStr = arrStr;
for(let i = 0; i <= copyOfArrStr.length - 1; i++){
 
    if(i <= numberOfColumns-1){
      arrTwoDimensions.push(copyOfArrStr[i])
      
    }

}

console.log(arrTwoDimensions)

/* 
let newArr = [];
    let oldArrOfLetters = arrStr;
    for (let j = 0; j <= oldArrOfLetters.length - 1; j++) {
    if (oldArrOfLetters.length > 0) {
        for (let i = 0; i <= numberOfColumns - 1; i++) {
        let elementsInGroup = oldArrOfLetters.shift(arrStr[i]);
        newArr.push(elementsInGroup);
        }
        oldArrOfLetters = arrStr;
        newArr.push(" ");
    }
    }

    
    newArr.pop(" ");
    const newArrStrWithSpaces = newArr.concat(oldArrOfLetters);
    const joinArrString = newArrStrWithSpaces.join("");
    const splitArrString = joinArrString.split(" ");
    console.log(splitArrString)

    const arrOfArrStr = [];
    for (let k = 0; k <= splitArrString.length - 1; k++) {
     arrOfArrStr.push([splitArrString[k]]);
    }
   

    const arrOfGroupOfArrSplit = [];
    for (let i = 0; i <= arrOfArrStr.length - 1; i++) {
    let simpleArr = arrOfArrStr[i];
    let splitSimpleArr = simpleArr[0].split("");
      arrOfGroupOfArrSplit.push(splitSimpleArr);
  }

  console.log(arrOfArrStr) */
     //console.log(arrOfGroupOfArrSplit)


    /* const matrix = arrOfGroupOfArrSplit;
    //console.log(matrix[0])
    const newArrOfLetters = [];
      for (let i = 0; i < numberOfColumns; i++) {
        for (let j = 0; j < numberOfRows; j++) {
          
        
          //console.log(matrix[j])
        newArrOfLetters.push(matrix[j][i]);
    
  }
}
 */

// separando las nuevas letras

    /* let arrLetters = [];
    let oldArrLetters = newArrOfLetters;
    for (let j = 0; j <= oldArrLetters.length - 1; j++) {
        if (oldArrLetters.length > 0) {
            for (let i = 0; i <= numberOfRows - 1; i++) {
            let elementsInGroup = oldArrLetters.shift(newArrOfLetters[i]);
            arrLetters.push(elementsInGroup);
            }
            oldArrLetters = newArrOfLetters;
        }
        arrLetters.push(" ");
    }

    //arrLetters.pop(" ");
    const arrConcat = arrLetters.concat(oldArrLetters);
    const lettersJoin = arrConcat.join("");

    const lettersSplit = lettersJoin.split(" ");
    // console.log(lettersSplit)
    let result = ""; 

    for (let i = 0; i <= lettersSplit.length - 1; i++) {
        result += `${lettersSplit[i]} `;
        console.log(lettersSplit[i])
    }

    return result;
 */