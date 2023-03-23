/*En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras. 
Recibirás un único parámetro: un array de palabras. 
Si no hay ningún palíndromo en la lista, la función debe devolver null.
Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.
Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás. */

function findLargestPalindrome(words) {

    let largestPalindrome = '';

    for (let i = 0; i <= words.length-1; i++){
        let word = words[i];
        let arrWord = [...word]; 
        console.log(arrWord)
        let palindrome = false;
        let normalLetters = '';
        let reverseLetters = '';

       for (let j = 0; j <= arrWord.length-1; j++){
            console.log(arrWord[j]);
            let normalLetterOfWord = arrWord[j];
            normalLetters = normalLetterOfWord;     
       }
       console.log(arrWord)
       for (let k = [arrWord.length-1]; k >= 0; k--){
            console.log(arrWord[k]);
            let letterOfWordReverse = arrWord[k];
            reverseLetters = letterOfWordReverse;
       }

       if(normalLetters === reverseLetters){
        palindrome = true;
        let palindromeWord = '';    
        palindromeWord = word;
        if(palindrome &&  palindromeWord.length > largestPalindrome.length){
            largestPalindrome = palindromeWord;
        }              
       }    
    
    }

    if (largestPalindrome.length === 0){
        largestPalindrome = null;
    }
    // console.log('fin',largestPalindrome)
    return largestPalindrome;
   
}

console.log(findLargestPalindrome(["racecar", "level", "world", "hello"]))