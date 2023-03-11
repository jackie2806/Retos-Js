
  //devolver un array con los nombres de los gatitos que tienen solo el mayor # de seguidores
  //Si hay 2 o más con el número máximo de seguidores, incluirlos en el orden en el que aparecen dentro del array

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

function auto (marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
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
    const carrito =  newCar(i, 'Time', 2022)
    carros.push(carrito);
  }
  //console.log(arrCars)
  return carros;
}
const carro1 = newCar('Ford', 'Time', 2022)
const carro2 = newCar('Tesla', 'V8', 2023)
const carro3 = newCar('Nissan','V5', 2022)

/* console.log(arrCars);
console.log(carro2.modelo) 
 */
const carros10 = crearDiezCarros()
console.log(carros10)
console.log(arrCars)












function findFamousCats(cats) {
    
    let maxFollowers = 0;

   for (let name in cats){
      //console.log(name)
    } 

//return famousCats;
    
  }

  findFamousCats([
    /*  {
       name: "Luna",
       followers: [500, 200, 300]
     },
     {
       name: "Michi",
       followers: [100, 300]
     }, */
     {
         name: "Mimi",
         followers: [320, 120, 70]
       },
       {
         name: "Milo",
         followers: [400, 300, 100, 200]
       },
       {
         name: "Gizmo",
         followers: [250, 750]
       },
       {
         name: "Truco",
         followers: [250]
       }
   ])
