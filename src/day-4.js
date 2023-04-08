/* Arrays y objetos*/
/* Ejercicios resuelto (playground) */

// Encontrar al gato más famoso ["Luna"]
//devolver un array con los nombres de los gatitos que tienen solo el mayor # de seguidores
  //Si hay 2 o más con el número máximo de seguidores, incluirlos en el orden en el que aparecen dentro del array


function findFamousCats(cats) {
  let newArrCats = [];
  let maxFollowers = 0;
  //let winCatName = '';
  for(let i = 0; i <= cats.length-1; i++){
  //let name = cats[i].name;
    let followers = cats[i].followers;
    //console.log(followers)
    let totalFollowers = 0;
    for(let j = 0; j <= followers.length-1; j++){
      let followersForSocialMedia = 0;
      followersForSocialMedia = followers[j];
      totalFollowers += followersForSocialMedia;               
    }

    if(totalFollowers > maxFollowers){
      maxFollowers = totalFollowers;  
     // winCatName = cats[i].name;
     newArrCats = [];
     newArrCats.push(cats[i].name)
    }  else  if(totalFollowers === maxFollowers){
      maxFollowers = totalFollowers;  
     // winCatName = cats[i].name;
     newArrCats.push(cats[i].name)
    }          
  //console.log(maxFollowers)   
  }
  return newArrCats;
 // return [maxFollowers,winCatName];   
  //return newArrCats;

  //console.log('is', maxFollowers)    
}


console.log(findFamousCats([
 
   {
       name: "Mimi",
       followers: [320, 120, 70] //510
     },
     {
       name: "Milo",
       followers: [400, 300, 100, 200] //1000
     },
     {
       name: "Gizmo",
       followers: [250, 750] // 1000
     },
     {
       name: "Tuco",
       followers: [250] //250
     }
 ]))

/* Debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase
 y un array de students con los estudiantes y sus promedios individuales */

 function getStudentAverage(students) {
  const newStudents = [];
  let totalAverage = 0;    
  let sumTotalGrades = 0;      
  let sumNumberOfGrades = 0;

 for(let student of students){
  let averagePerStudent = 0; 
  let gradesOfStudent = student.grades;
  let sumAllGradesPerStudent = 0;
  
  for (let grade of gradesOfStudent){ 
      sumAllGradesPerStudent += grade;
  }           
  averagePerStudent = Number((sumAllGradesPerStudent/gradesOfStudent.length).toFixed(2));  
  newStudents.push({name: student.name, average : averagePerStudent}); 
  sumTotalGrades += sumAllGradesPerStudent;    
  sumNumberOfGrades +=  gradesOfStudent.length;    
 }
 totalAverage = Number((sumTotalGrades/sumNumberOfGrades).toFixed(2));
 return { classAverage : totalAverage, students: newStudents};  
}

console.log(getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
]))

//Más ejercicios sobre arrays y objetos




  // Ejemplo de un loop con While
  const estudiantes = ['Jackeline', 'Isabel', 'Esmeralda', 'Julieta']
  function saludarEstudiante(estudiante){
    //console.log(`Hola, ${estudiante}`)
  }

  while(estudiantes.length > 0){
    //console.log(estudiantes)
    let estudiante = estudiantes.shift(); //se guarda el elemento eliminado del array
    //console.log(estudiante)
    saludarEstudiante(estudiante); // Ese elemento eliminado del array que ha sido almacenado en la variable anterior ingresa como parámetro y se muestra
  }
// ejercicio eliminar y colocar elementos de un array


  function solution(estudiantes, deathCount, nuevo) {
    if (deathCount === 0) {
      const newArrStudents = [];
      for (let i = 0; i <= estudiantes.length - 1; i++){
          newArrStudents.push(estudiantes[i])
      }
      newArrStudents.push(nuevo);
      return newArrStudents;
    } 
  
    if (deathCount > 0) {
      const newArrStudents = estudiantes
      for (let j = 0; j <= deathCount-1; j++){
        
        newArrStudents.pop()
      }
  
      newArrStudents.push(nuevo);
      return newArrStudents;
    }
}

// Otra mejor solución
function solution(estudiantes, deathCount, nuevo) {
  if (deathCount === 0) {
    const newStudents = estudiantes;
    newStudents.push(nuevo);
    return newStudents;
  }

  if (deathCount > 0) {
    const newStudents = estudiantes;
    for (let i = 1; i <= deathCount; i++){
      newStudents.pop();
    }
    newStudents.push(nuevo);
    return newStudents;
  }
}
//reto objecto
function solution(car) {
  if (car.licensePlate != undefined) {
     car.drivingLicense = true;
  } else {
    car.drivingLicense = false;
  }

  return car
}

//console.log(solution(["Juan", "Juanita", "Daniela"], 3, "Julian"))
 //ejemplo de un caso donde solo quiero una iteración con un for
 
  

// Reto coregir el bug
function solution(cars) {
  // 👇 Este es el código que no funciona
  return cars.find(function (car) { //el método find solo retorna el primer elemento que cunmple con la condición
    if (car.licensePlate) {
      return true;
    } else {
      return false;
    }
  });
}

function solution(cars) {
  // 👇 Este es el código que funciona
 return cars.filter(function (car) {
    if (car.licensePlate != undefined) {
      return true;
    } else {
      return false;
    }
  });
}



// reto hacer una función contructora con un loop 
const arrCars = []; //almacén de datos
/* function auto (marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
} */
//const newAuto = new auto ('Ford', 'X', 2023);
//Voy a dibujar 10 autos
function newCar(marca, modelo, annio){
   //return new auto (marca, modelo, annio);
   const newCarro = {marca : marca, modelo : modelo, annio: annio}; //esta variable me permite guardar los carros ingresados para luego hacer push y después return. Caso contrario no se podría
   arrCars.push(newCarro); //hago push al array global
   return newCarro; // retorno el objeto
}

function crearDiezCarros(){
  const carros = [];
  for(let i = 1; i<=10;i++){
    const carrito =  newCar(i, 'Time', 2022)// push a la variable global del array vacío
    carros.push(carrito);
  }
 
  return carros;
}
const carro1 = newCar('Ford', 'Time', 2022) //llamo a la función newCar
const carro2 = newCar('Tesla', 'V8', 2023) //llamo a la función newCar
const carro3 = newCar('Nissan','V5', 2022) //llamo a la función newCar

/* console.log(arrCars);
console.log(carro2.modelo) 
 */
const carros10 = crearDiezCarros() //llamo a la función crearDiezCarros
//console.log(carros10) //esta variable solo me devuelve los 10 carros
console.log(arrCars) // puedo ver todo el contenido del array que ha sido introducido en cada invocación de las funciones que contienen el método push



// Encontrar al gato más famoso



