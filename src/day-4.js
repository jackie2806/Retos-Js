function getPetExerciseInfo(type, age) {
    // Tu Código aquí 👈
    switch (true) {
      case type === 'perro' && age < 1:
        return 'Los cachorros necesitan pequeñas y frecuentes sesiones de juego';
        break;
      case type === 'perro' && age > 1 && age < 7:
        return 'Los perros a esta edad necesitan caminatas diarias y sesiones de juego';
        break;
      case type === 'perro' && age > 7:
        return 'Los perros viejos necesitan caminatas más cortas';
        break;
      case type === 'gato' && age < 1:
        return 'Los gatitos necesitan frecuentes sesiones de juego';
        break;
      case type === 'gato' && age > 1 && age < 7:
        return 'Los gatos a esta edad necesitan jugar diariamente';
        break;
      case type === 'gato' && age > 7:
        return 'Los gatos viejos necesitan sesiones de juego más cortas';
        break;
      case type === 'ave' && age < 1:
        return 'Las aves jóvenes necesitan mucho espacio para volar';
        break;
      case type === 'ave' && age > 1 && age < 7:
        return 'Las aves necesitan jugar diariamente y un lugar para volar';
        break;
      case type === 'ave' && age > 7:
        return 'Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar';
        break;
      default:
        return 'Tipo de mascota inválida';
    }
}
//console.log(getPetExerciseInfo('perro', 3))

function printTriangle(size, character) {
    //let triangle = '';
   // let line = '';
    
    for (let i = 1; i <= size; i++){   
        let line = '';
        line += character;
        console.log(line)
      
    }
      
    
   return 'hola';
  }
  
console.log(printTriangle(3, '%'))