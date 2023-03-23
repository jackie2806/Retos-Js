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