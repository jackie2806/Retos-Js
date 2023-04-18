const str = "feedthedog";
//const arrStr = str.split("");
const lengthOfStr = str.length;
const sqrtOf = Math.sqrt(lengthOfStr);
console.log(sqrtOf);
let numberOfRows = 0;
let numberOfColumns = 0;

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


let newArr = '';

for (let j = 0; j < arrTwoDimensions[0].length; j++) {
  for (let i = 0; i < arrTwoDimensions.length; i++) {
    if (arrTwoDimensions[i][j] !== undefined) {
      newArr += arrTwoDimensions[i][j];
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

