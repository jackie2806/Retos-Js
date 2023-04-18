const str = "haveaniceday";
const arrStr = str.split("");
const lengthOfStr = str.length;
const sqrtOf = Math.sqrt(lengthOfStr);
const numberOfRows = Math.round(sqrtOf); // 3
console.log(Math.round(sqrtOf));
const numberOfColumns = numberOfRows + 1; // 4
//let newArrStrWithSpaces;
//agrupación
//primero columnas
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
console.log("primerArr", newArr);
const newArrStrWithSpaces = newArr.concat(oldArrOfLetters);
console.log(newArrStrWithSpaces); 
const joinArrString = newArrStrWithSpaces.join("");
const splitArrString = joinArrString.split(" ");
console.log("uniones", splitArrString);

const arrOfArrStr = [];
for (let k = 0; k <= splitArrString.length - 1; k++) {
  arrOfArrStr.push([splitArrString[k]]);
}

console.log(arrOfArrStr);
const arrOfGroupOfArrSplit = [];
for (let l = 0; l <= arrOfArrStr.length - 1; l++) {
  let simpleArr = arrOfArrStr[l];
  let splitSimpleArr = simpleArr[0].split("");
  arrOfGroupOfArrSplit.push(splitSimpleArr);
}
//console.log(arrOfGroupOfArrSplit)
// quitar el array vacío
//arrOfGroupOfArrSplit.pop(); // revisar quitar el pop

console.log(arrOfGroupOfArrSplit);

const matrix = arrOfGroupOfArrSplit;
let newArrOfLetters = [];
for (let i = 0; i < numberOfColumns; i++) { //numberOfColumns (4)
  
  for (let j = 0; j < numberOfRows; j++) { //numberOfRows (3)
    //console.log('matrixCero', matrix.length)
    //console.log('i',[i],'j',[j] )
  /*   if (j < numberOfRows) {
      //console.log('i',[i],'j',[j] )
      newArrOfLetters.push(matrix[j][i]);
    } */

    newArrOfLetters.push(matrix[j][i]);
  }
}

console.log('Mis letras',newArrOfLetters); //bien

// separando las nuevas letras

let arrLetters = [];
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
console.log('letters', arrLetters); //arrLettersWithSpaces = arrLetters.concat(oldArrLetters)
const arrConcat = arrLetters.concat(oldArrLetters);
const lettersJoin = arrConcat.join("");
console.log(lettersJoin);
const lettersSplit = lettersJoin.split(" ");
console.log(lettersSplit);

let result = ""; //result += `${y}\n`;

for (let i = 0; i <= lettersSplit.length - 1; i++) {
  result += `${lettersSplit[i]} `;
}
console.log(result);
//arrLettersWithSpaces = arrLetters.concat(oldArrLetters)
//console.log(arrLettersWithSpaces)
/* newArrStrWithSpaces = newArr.concat(oldArrOfLetters);

console.log(newArrStrWithSpaces);
joinArrString = newArrStrWithSpaces.join('');
splitArrString = joinArrString.split(' ');
console.log(splitArrString) */

/*  let splitSimpleArr = simpleArr.split('');
    console.log(splitSimpleArr) */
//console.log(arrOfArrStr[l])

/* const firstGroup = str.split('',numberOfColumns);
console.log(firstGroup)

 */

//recorrer un array de 2 dimensiones horizontalmente




const arr = [  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
/* En este ejemplo, la variable arr es un array de 2 dimensiones que contiene 3 subarrays de longitud 3.
 Se utiliza un bucle for para iterar sobre cada subarray en el array principal arr. Dentro de ese bucle, se utiliza otro bucle for para iterar sobre cada elemento en el subarray actual. 
 Dentro de este segundo bucle, se imprime el valor actual del elemento en la consola con el método console.log().

Este código recorre el array de 2 dimensiones en orden de fila por fila. Si necesitas recorrer el array en orden de columna por columna, simplemente cambia el orden de los bucles for. */

const arrArr = [  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let j = 0; j < arrArr[0].length; j++) {
  for (let i = 0; i < arrArr.length; i++) {
    console.log(arrArr[i][j]);
  }
}

/* En este ejemplo, la variable arr es un array de 2 dimensiones que contiene 3 subarrays de longitud 3. 
Se utiliza un bucle for para iterar sobre cada columna en el array principal arr. Dentro de ese bucle, se utiliza otro bucle for para iterar sobre cada fila en la columna actual. 
Dentro de este segundo bucle, se imprime el valor actual del elemento en la consola con el método console.log().

Este código recorre el array de 2 dimensiones en orden de columna por columna. Si necesitas recorrer el array en orden de fila por fila, simplemente cambia el orden de los bucles for. */