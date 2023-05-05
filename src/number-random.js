function getRandomNumber(){
    const random = Math.random(); //del 0 al 1
    const multiplied = random * 10;
    const rounded = Math.floor(multiplied);
    const result = rounded + 1; 

    return result;

}

console.log(getRandomNumber())