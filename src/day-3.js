/* condicionales, switch, ciclos */
/* Ejercicios resueltos (playground) */
function isLeapYear(year) {
    // Tu código aquí 👈 Verifica si el año ingresado es un año bisiesto
    if (year>=1 && year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }

console.log(isLeapYear('1991'))

//  Obten información de mascotas según su tipo

function getPetExerciseInfo(type, age) {
  // Tu Código aquí 👈
  switch (true) {
    case type === "perro" && age < 1:
      return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
      break;
    case type === "perro" && age > 1 && age < 7:
      return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
      break;
    case type === "perro" && age > 7:
      return "Los perros viejos necesitan caminatas más cortas";
      break;
    case type === "gato" && age < 1:
      return "Los gatitos necesitan frecuentes sesiones de juego";
      break;
    case type === "gato" && age > 1 && age < 7:
      return "Los gatos a esta edad necesitan jugar diariamente";
      break;
    case type === "gato" && age > 7:
      return "Los gatos viejos necesitan sesiones de juego más cortas";
      break;
    case type === "ave" && age < 1:
      return "Las aves jóvenes necesitan mucho espacio para volar";
      break;
    case type === "ave" && age > 1 && age < 7:
      return "Las aves necesitan jugar diariamente y un lugar para volar";
      break;
    case type === "ave" && age > 7:
      return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
      break;
    default:
      return "Tipo de mascota inválida";
  }
}
//console.log(getPetExerciseInfo('perro', 3))

//Dibuja un triángulo


function printTriangle(size, character) {
  
  let triangle = ''; //Variable que nos permitirá guardar el resultado a mostrar
  for (let i = 1; i <= size; i++) { //Este ciclo nos permitirá dibujar el triángulo de forma vertical
    let heigh = ''; // Esta variable nos permite guardar los caracteres de la altura del triángulo (lado vertical)
    let numberOfSpace = size - i; // Es el número de espacios nos permitirá saber cuántos espacios debemos colocar de manera horizontal
    for (let j = 1; j <= size; j++) { //este ciclo nos permite iterar en horizontal      
      let positionsOfBlankSpace = ''; // inicializamos la variable dentro del ciclo con vacío para que con cada iteración se vaya reasignando el valor de la variable.
      // Es decir cada vez que el ciclo inicie, el valor de la variable vuelve a vacío y se le vuelve a asignar el valor que va adquiriendo j.
        positionsOfBlankSpace += j;  // le asignamos el valor de la variable j para que se mantenga la relación número de espacios y de caracter en cada línea  
      if( positionsOfBlankSpace <= numberOfSpace){      
        heigh += ' '; //dibubamos los espacios
      } else {        
        heigh += `${character}` //dibujamos el caracter
      }
    
    }
    // salimos del cilco que dibuja los espacios y caracteres de manera horizontal
    //para enfocarnos en la parte vertical del triángulo
    let lineBreak = ''; //inicializamos la variable que nos permitirá controlar los espacios de salto de línea
    if(i < size){ // verificamos que iteración de manera vertical sea menor al tamaño total del triángulo (size)
      lineBreak = '\n'; //salto de línea
    } else {
      lineBreak = ''; // Cuando el número de iteraciones en vertical sea igual al tamaño (size) no se hará ningún salto de línea
    }
    
    triangle += `${heigh}${lineBreak}` // Finalmete, vamos reasignado un nuevo valor dentro de la variable triangle
  }
  return triangle;   //devolvemos el valor de la variable triangle

}

console.log(printTriangle(3, "$"));
