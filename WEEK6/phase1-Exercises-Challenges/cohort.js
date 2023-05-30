//objects - challenge 

const cohort = {
    name: 'April2023',
    id: 2345,
    students: ['Josiah', 'Jeremiah', 'Catherine']
  };
  
  const printCohortInfo = (cohort) => {
    const { name, id, students } = cohort;
    const numberOfStudents = students.length;
    console.log(`${id} - ${name} - ${numberOfStudents} students in this cohort`);
  };
  
  printCohortInfo(cohort);
  
  //output 2345 - April2023 - 3 students in this cohort