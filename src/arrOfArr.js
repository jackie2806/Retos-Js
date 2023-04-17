const str = "feedthedog";
//const arrStr = str.split("");
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

console.log(str)

const arrTwoDimensions = [];

for(let i = 0; i <= str.length - 1; i += numberOfColumns){
 
   let subArray = str.substring(i, i + numberOfColumns).split('');
    arrTwoDimensions.push(subArray);
    
//console.log(copyOfArrStr)
}

console.log(arrTwoDimensions)

const arr = [ [ 'f', 'e', 'e', 'd' ], [ 't', 'h', 'e', 'd' ], [ 'o', 'g' ] ];
let newArr = '';

for (let j = 0; j < arr[0].length; j++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][j] !== undefined) {
      newArr += arr[i][j];
    }
  }
  newArr += ' ';
}

newArr = newArr.trim();
console.log(newArr);


/* const arr = [ [ 'f', 'e', 'e', 'd' ], [ 't', 'h', 'e', 'd' ], [ 'o', 'g' ] ]

const newArr = [];

for (let j = 0; j < arr[0].length; j++) {
  for (let i = 0; i < arr.length; i++) {
 
    newArr.push(arr[i][j]);
  }
}

console.log(newArr) */


/* const arr = [ [ 'f', 'e', 'e', 'd' ], [ 't', 'h', 'e', 'd' ], [ 'o', 'g' ] ];

let result = "";

for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i].join('')+' ')
  result += arr[i].join("") + " ";
}

console.log(result.trim()); */  // "fto ehg ee dd"

/* let s = "feedthedog";
let result = [];
for (let i = 0; i < s.length; i += 4) {
    let subarray = s.substring(i, i + 4).split('');
    result.push(subarray);
}

console.log(result); */




//console.log(arrTwoDimensions)

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