const str = "holaspepes";
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



/* const firstGroup = str.split('',numberOfColumns);
console.log(firstGroup)

 */
