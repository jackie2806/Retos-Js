/* Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?
Es un espacio en la memoria que sirve para guardar valores primitivos y objetos.
¿Cuál es la diferencia entre declarar e inicializar una variable?
Declaramos una variable cuando le ponemos un nombre a dicha variable. Inicializamos cuando le asignamos un valor a dicha variable. 
¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumar números implica operar aritméticamente 2 o más valores. Concatenar strings significa juntar caracteres. 
¿Cuál operador me permite sumar o concatenar?
el operador +
2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre (name, string)
Apellido (lastName, string)
Nombre de usuario en Platzi (userName, string)
Edad (age, number)
Correo electrónico (email, string)
Mayor de edad (older, number)
Dinero ahorrado (saveMoney, number)
Deudas (debt, number)
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
const name = 'Jackeline';
const lastName = 'Puruaya';
const userName = 'jcositas;
const age = 25;
const email = 'jajaja@gmail.com';
let older = 36;
let saveMoney = 25;
let debt = 1;
4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
const completeName = name + lastName;
Dinero real (dinero ahorrado menos deudas)
let currentlyMoney = saveMoney - debt;
Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
Es un objeto de primera clase que nos permite agrupar código con la finalidad de no repetir código constantemente.
¿Cuándo me sirve usar una función en mi código?
Cuando veo código repetido y para mantener un orden. 
¿Cuál es la diferencia entre parámetros y argumentos de una función?
Los parámetros existen al momento de crear una función; los valores de los parámetros son estándar. Los argumentos de un función existen al momento de llamar o invocar a la función y van cambiando de valor a una específico, segun el llamado de cada función
2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
function completeName (completeName, nickName){
    return "Mi nombre es " + completeName + ", pero prefiero que me digas "+ nickname + ".";
}
function(Jackeline, Jackie);
function(Pepito, Pepi)
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
Es una estructura de control
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
Existen if, else, else if, y switch. 
¿Puedo combinar funciones y condicionales?
Claro que sí
2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
if (tipoDeSuscripcion == 'Free'){
      console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion == 'Expert'){
     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion == 'ExpertPlus'){
     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
if (tipoDeSuscripcion == 'Free'){
      console.log("Solo puedes tomar los cursos gratis");
} 
if(tipoDeSuscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion == 'Expert'){
     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(tipoDeSuscripcion == 'ExpertPlus'){
     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
Es la repetición de un evento.
¿Qué tipos de ciclos existen en JavaScript?
Existen ciclos tales como : for(), for (in), for (of), while, do While
¿Qué es un ciclo infinito y por qué es un problema?
Es aquel no tiene forma de terminar. Es un problema porque crashea la memoria de la computadora. 
¿Puedo mezclar ciclos y condicionales?
Por supuesto.
2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
let i = 0;
while(i<5){
    console.log("El valor de i es: " + i);
    i++;
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
let i = 10
while(i > = 2){
    console.log("El valor de i es: " + i);
    i--;
}
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

function mathPower(){
    let answer = prompt('Cuánto es 2 +2');
    if (answer == 4){
        return alert('Felicitaciones')
    } else {
        return mathPower()
    }
}
mathPower()

Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
Es una colección de datos que no guardan relación entre sí necesariamente.
¿Qué es un objeto?
Es la representación de propiedades y acciones que guardan relación entre sí. 
¿Cuándo es mejor usar objetos o arrays?
Los objetos es mejor usarlos cuando tenemos que manejar mucha cantidad de datos.
Los arrays sirven para hacer ejercicios prácticos, no tanto para almacenar volúmenes de información.
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Claro 
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */

function myArr (arr){
    return arr[0];
}
myArr(['a','e'])

function printAllElements(arr){
   let newElement = '';
    for(let i = 0; i <= arr.length-1; i++){
        let element = '';
            element = arr[i];
            newElement += `${element} \n`;        
        
    }
 
    return newElement ; 
   
}
console.log(printAllElements([ 'a', 'e', 'i', 'o', 'u']))

function myObj (obj){
    let printObj = '';
    for(let element in obj){
        let printKey = '';
        let printValue = '';
        printKey = element;
        printValue = obj[element];

        printObj += `${printKey}:${printValue}\n`;
        //console.log(element+ ':'+ obj[element])
    }
    
    return printObj;
}
console.log(myObj({name:'Toyota', annio:2021, kilometraje: 0}))