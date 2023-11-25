// custom type creation

let student1 = { id: 1, name: 'Kavindu', age: 28, faculty: 'CSE' };
let student2 = { id: 2, name: 'Janith', age: 25, faculty: 'TONIC' };
let student3 = { id: 3, name: 'Kalum', age: 20, faculty: 'TONIC', uni: 'UoC' };

// custom type creation with type
type Graduate = {id: number; name: string; age: number; faculty: string, uni?: string};

// custom type creation with interface
interface Graduate2 {
  id: number;
  name: string;
  age: number;
  faculty: string;
  uni?: string;
}

let students: Graduate[] = [];
let teachers: Graduate2[] = [];

students.push(student1);
students.push(student2);
students.push(student3);