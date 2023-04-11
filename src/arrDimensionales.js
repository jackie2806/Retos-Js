const str = "holaspepes";
const arrStr = str.split("");
const lengthOfStr = str.length;
const sqrtOf = Math.sqrt(lengthOfStr);
const numberOfRows = Math.round(sqrtOf); // 3
console.log(Math.round(sqrtOf));
const numberOfColumns = numberOfRows + 1; // 4
const newStrWithSpaces = [];
//agrupación
//primero columnas
let newArr = [];
let oldArr = arrStr;
for (let j = 0; j <= oldArr.length - 1; j++) {
  if (oldArr.length > 0) {
    for (let i = 0; i <= numberOfColumns - 1; i++) {
      let elementsInGroup = oldArr.shift(arrStr[i]);
      newArr.push(elementsInGroup);
      //console.log(elementsInGroup)
      //console.log(arrStr)
    }
    oldArr = arrStr;
  }
}

//console.log(newArr)
console.log(oldArr);

/* const firstGroup = str.split('',numberOfColumns);
console.log(firstGroup)

 */
