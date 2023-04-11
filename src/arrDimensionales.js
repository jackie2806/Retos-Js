const str = "haveaniceday";
const arrStr = str.split("");
const lengthOfStr = str.length;
const sqrtOf = Math.sqrt(lengthOfStr);
const numberOfRows = Math.round(sqrtOf); // 3
console.log(Math.round(sqrtOf));
const numberOfColumns = numberOfRows + 1; // 4
let newArrStrWithSpaces;
//agrupación
//primero columnas
let newArr = [];
let oldArr = arrStr;
for (let j = 0; j <= oldArr.length - 1; j++) {
  if (oldArr.length > 0) {
    for (let i = 0; i <= numberOfColumns - 1; i++) {
      let elementsInGroup = oldArr.shift(arrStr[i]);
      newArr.push(elementsInGroup);   
    }
    oldArr = arrStr;
   
  }
  newArr.push(' ');

}
newArrStrWithSpaces = newArr.concat(oldArr);
console.log(newArrStrWithSpaces);
joinArrString = newArrStrWithSpaces.join('');
splitArrString = joinArrString.split(' ');
console.log(splitArrString)
const arrOfArrStr = [];
for (let k = 0; k <= splitArrString.length - 1; k++){ 
    arrOfArrStr.push([splitArrString[k]]); 
    
}

console.log(arrOfArrStr)
  const arrOfGroupOfArrSplit = []
for(let l = 0; l <= arrOfArrStr.length - 1; l++){
  let simpleArr = arrOfArrStr[l];
  let splitSimpleArr = simpleArr[0].split('');
   arrOfGroupOfArrSplit.push(splitSimpleArr);

}
//console.log(arrOfGroupOfArrSplit)
 // quitar el array vacío
 arrOfGroupOfArrSplit.pop(); // revisar quitar el pop

 console.log(arrOfGroupOfArrSplit)
 const matrix = arrOfGroupOfArrSplit;
 for(let i = 0; i < matrix[0].length ; i++){
   for(let j = 0; j < matrix.length; j++){ 
    //console.log('i',[i],'j',[j] )
    
    if(j < numberOfRows ){
      
      console.log(matrix[j][i])
    }
    
   }
 }



 /*  let splitSimpleArr = simpleArr.split('');
    console.log(splitSimpleArr) */
  //console.log(arrOfArrStr[l])



/* const firstGroup = str.split('',numberOfColumns);
console.log(firstGroup)

 */
