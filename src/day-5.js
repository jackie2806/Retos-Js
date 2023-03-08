
  //devolver un array con los nombres de los gatitos que tienen solo el mayor # de seguidores
  //Si hay 2 o más con el número máximo de seguidores, incluirlos en el orden en el que aparecen dentro del array

  // Ejemplo de un loop con While
  const estudiantes = ['Jackeline', 'Isabel', 'Esmeralda', 'Julieta']
  function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`)
  }

  while(estudiantes.length > 0){
    //console.log(estudiantes)
    let estudiante = estudiantes.shift(); //se guarda el elemento eliminado del array
    //console.log(estudiante)
    saludarEstudiante(estudiante); // Ese elemento eliminado del array que ha sido almacenado en la variable anterior ingresa como parámetro y se muestra
  }

function findFamousCats(cats) {
    
    let maxFollowers = 0;

   for (let name in cats){
      console.log(name)
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